<script lang="ts" setup>

</script>

<template>
  <nav class="flex justify-between px-20 py-10">

    <span>Talent Hub</span>

    <div class="flex justify-between gap-5 bg-slate-100 p-2 rounded-md child-hover:bg-white child:p-2 child:rounded-md child:transition-all child:duration-300 child:ease-in-out">
      <nuxt-link to="/blog">Blog</nuxt-link>
      <nuxt-link to="/offres">Offres</nuxt-link>
      <nuxt-link to="/trombinoscope">Trombinoscope</nuxt-link>
    </div>

    <Button variant="link"><nuxt-link to="/login">Se connecter</nuxt-link></Button>
  </nav>
</template>
