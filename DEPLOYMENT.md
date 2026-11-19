# Million Laugh — Hostinger VPS Deployment

This guide follows the numbered workflow of the existing VPS guide, trimmed
for this Nuxt static website. It assumes Ubuntu 22.04 and Nginx. The site gets
its own source directory, web root, and Nginx site; it does not need PM2 or a
Node.js server at runtime.

## Architecture

```text
Browser → Nginx (80/443) → /var/www/millionlaugh (generated static files)
                                  ↑
                 GitHub source → Nuxt generate
```

Do not remove or edit another site's Nginx configuration, change global Node.js,
or run `pm2 restart all`.

## 1. Connect and check the VPS

SSH into the VPS as you normally do (your current workflow uses `root`), then
check the existing services and tools:

```bash
node --version
npm --version
nginx -t
nginx -T 2>/dev/null | grep -n "millionlaugh.lumicore-labs.com" || true
pm2 status
```

This Nuxt 4 project needs Node.js 20.19 or newer to build. If the installed
version is older, do not upgrade the system Node.js used by existing PM2 apps.
Build on another machine with Node.js 20.19+ and copy the generated
`.output/public/` files to the VPS.

## 2. Point the subdomain to the VPS

In the DNS settings for `lumicore-labs.com`, add an A record:

```text
Type: A
Name: millionlaugh
Value: <VPS public IPv4 address>
```

Wait for DNS to resolve to the VPS before setting up HTTPS:

```bash
getent ahostsv4 millionlaugh.lumicore-labs.com
```

## 3. Get the source and build

Clone the repository into its own directory:

```bash
mkdir -p /opt/millionlaugh-site
git clone https://github.com/MG4ACA/million-laugh.git /opt/millionlaugh-site
cd /opt/millionlaugh-site
npm ci
npm run generate
```

The generated files are in `/opt/millionlaugh-site/.output/public/`.

For subsequent updates, use the existing clone instead of cloning again:

```bash
cd /opt/millionlaugh-site
git pull --ff-only
npm ci
npm run generate
```

## 4. Publish the static files

Keep the destination dedicated to this site. The `--delete` option removes
stale files only from `/var/www/millionlaugh/`; verify the destination before
running it.

```bash
mkdir -p /var/www/millionlaugh
rsync -a --delete /opt/millionlaugh-site/.output/public/ /var/www/millionlaugh/
chown -R www-data:www-data /var/www/millionlaugh
```

If you built on another machine, copy the contents of its `.output/public/`
directory into `/var/www/millionlaugh/` and set ownership as above.

## 5. Configure Nginx

Create `/etc/nginx/sites-available/millionlaugh.lumicore-labs.com`:
nano /etc/nginx/sites-available/millionlaugh.lumicore-labs.com

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name millionlaugh.lumicore-labs.com;

    root /var/www/millionlaugh;
    index index.html;

    access_log /var/log/nginx/millionlaugh-access.log;
    error_log /var/log/nginx/millionlaugh-error.log;

    location / {
        try_files $uri $uri/ =404;
    }

    location ~* \.(?:css|js|jpg|jpeg|png|gif|svg|webp|ico|woff2?)$ {
        try_files $uri =404;
        expires 7d;
        add_header Cache-Control "public";
    }
}
```

Enable this site only. If its symlink is already present, leave it in place.
Test before reloading Nginx; do not remove the default site or restart Nginx:

```bash
if [ ! -e /etc/nginx/sites-enabled/millionlaugh.lumicore-labs.com ]; then
  ln -s /etc/nginx/sites-available/millionlaugh.lumicore-labs.com \
    /etc/nginx/sites-enabled/millionlaugh.lumicore-labs.com
fi

nginx -t && systemctl reload nginx
```

If `nginx -t` fails, do not reload. Check the error and any existing Nginx
configuration for a duplicate `server_name`; do not change another site's
configuration to resolve it.

## 6. Set up HTTPS

After DNS points to the VPS and the site is reachable over HTTP, install
Certbot and request a certificate for this subdomain only:

```bash
apt update
apt install -y certbot python3-certbot-nginx
certbot --nginx -d millionlaugh.lumicore-labs.com
nginx -t && systemctl reload nginx
certbot renew --dry-run
```

If DNS is not resolving correctly or ports 80/443 are not reachable, fix that
before requesting the certificate.

## 7. Verify

```bash
curl -I http://millionlaugh.lumicore-labs.com
curl -I https://millionlaugh.lumicore-labs.com
nginx -t
pm2 status
```

Open `https://millionlaugh.lumicore-labs.com` and check the pages, images, and
project-detail links. PM2 should show the same applications as before; this
static site does not add or restart a PM2 process.

For Nginx errors, check only this site's log:

```bash
tail -n 50 /var/log/nginx/millionlaugh-error.log
```

## 8. Deploy updates

After building the latest source as in step 3, publish it to the same dedicated
web root:

```bash
rsync -a --delete /opt/millionlaugh-site/.output/public/ /var/www/millionlaugh/
chown -R www-data:www-data /var/www/millionlaugh
```

No Nginx reload or PM2 command is needed for static file updates.
