<script setup lang="ts">

</script>

<template>
  <section>
    <h1 class="font-bold text-6xl text-center text-primaryBlack mb-10">Talent Hub Collaboration et créativité</h1>
    <p class="text-center text-primaryGray font-inter text-2xl mx-6 leading-[32px]">Réunissant passionés d'art, de développement, de musique et bien plus encore...</p>
    <div class="flex justify-center items-center mt-12">
      <Button variant="outline" class="w-100 mx-0 border-[#E05880] text-[#E05880] hover:text-white font-semibold font-inter hover:bg-gradient-to-r hover:from-[#E05880] hover:to-[#DF8F90]" asChild>
        <nuxt-link to="https://discord.talent-hub.fr" class="flex gap-2">
          Rejoindre l'aventure
          <LucideArrowRight />
        </nuxt-link>
      </Button>
    </div>
  </section>
</template>