<template>
  <div class="site">
    <a href="#main" class="skip">Skip to content</a>
    <div class="site-bg" aria-hidden="true">
      <div class="blob a" />
      <div class="blob b" />
      <div class="blob c" />
      <div class="blob d" />
      <div class="blob e" />
    </div>
    <main id="main"><slot /></main>
    <SiteFooter />
  </div>
</template>
