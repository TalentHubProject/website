<script lang="ts" setup>

</script>

<template>
  <nav class="flex justify-between md:px-20 py-10 px-10 mb-32">

    <nuxt-link to="/" class="flex items-center justify-between gap-2">
      <nuxt-img src="/logotype.png" width="32" height="32" />
      <span class="text-black font-bold text-2xl">Talent Hub</span>
    </nuxt-link>

    <div
        class="md:flex justify-between gap-x-5 bg-slate-100 px-2 py-1 rounded-md
    child-hover:bg-white child:px-2 child:py-1 child:rounded-md child:transition-all child:duration-300 child:ease-in-out hidden">
      <nuxt-link to="/blog">Blog</nuxt-link>
      <nuxt-link to="/offres">Offres</nuxt-link>
      <nuxt-link to="/trombinoscope">Trombinoscope</nuxt-link>
    </div>

    <button class="md:hidden">
      <LucideMenu/>
    </button>

    <Button variant="link" asChild class="hidden md:flex">
      <nuxt-link to="/signin" class="flex gap-5"><LucideFingerprint/> Se connecter</nuxt-link>
    </Button>
  </nav>
</template>
