# Backend Implementation Plan: PocketBase

This document outlines the migration of the Million Laugh site content management from static files to a dynamic PocketBase backend.

## 1. Architecture
- **Backend Engine:** PocketBase (Single binary)
- **Database:** Internal SQLite
- **Deployment:** Hostinger VPS, managed as a systemd service
- **API Access:** `api.millionlaugh.lumicore-labs.com`

## 2. Phase 1: Setup & Infrastructure
- [ ] **Review VPS Environment:** Check existing Nginx configuration for potential conflicts.
- [ ] **Install PocketBase:** Download and install the latest binary in `/opt/pocketbase`.
- [ ] **Systemd Service:** Configure `pocketbase.service` to ensure the process starts on boot.
- [ ] **Nginx Reverse Proxy:** Create a new configuration for the `api.` subdomain to proxy requests to local port 8090.
- [ ] **HTTPS:** Use Certbot to secure the API domain.

## 3. Phase 2: Database Modeling
- [ ] **Schema Definition:**
    - `projects`: `slug`, `cat`, `filter`, `t`, `d`, `long`, `src`, `alt`, `meta`, `site_id`
    - `galleryItems`: `src`, `alt`, `cat`, `type`, `videoUrl`, `thumbnail`, `site_id`
    - `upcomings`: `day`, `mon`, `t`, `p`, `site_id`
    - `recent`: `d`, `t`, `p`, `n`, `site_id`
- [ ] **Multi-tenancy:** Implement `site_id` on all collections to support future sites.

## 4. Phase 3: Migration & Frontend
- [ ] **Nuxt Refactor:** Create `composables/useApi.ts` to interact with PocketBase.
- [ ] **Migration Script:** Create a Node.js script to push data from the existing `site.ts` to PocketBase collections.
- [ ] **Frontend Integration:** Update `pages/` and `components/` to fetch data from the API.

## 5. Phase 4: Final Polish
- [ ] **Security:** Configure Collection Rules for authentication.
- [ ] **Monitoring:** Ensure logs are correctly captured.
