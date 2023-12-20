<script setup lang="ts">

</script>

<template>
  <section class="mt-60 flex flex-col gap-y-10">

    <div class="text-center mb-10">
      <span class="bg-slate-100 py-1 px-4 rounded-md font-inter font-medium text-sm text-slate-700">📙A propos</span>
      <h2 class="text-3xl font-bold font-poppins my-8 text-primaryBlack">Qu'est-ce que Talent Hub ?</h2>
      <p class="text-primaryGray text-2xl font-inter">Découvrez Talent Hub, la plateforme collaborative ultime qui rassemble les esprits créatifs et innovants.</p>
    </div>

    <ul class="flex flex-col gap-y-24 child:flex child:flex-col child:gap-y-5">
      <li>
        <span class="text-primaryGray border rounded-full p-4 w-min">
          <LucideCopy/>
        </span>
        <h3 class="font-semibold text-2xl mb-4 text-primaryBlack font-poppins">Contenu</h3>
        <p class="text-primaryGray text-xl font-inter"> Suivez des créations ou un modèle créé par des artistes vérifiés et accélérez la croissance de votre niveau et de votre créativité.</p>
      </li>
      <li>
        <span class="text-primaryGray border rounded-full p-4 w-min">
          <LucideUsers/>
        </span>
        <h3 class="font-semibold text-2xl mb-4 text-primaryBlack font-poppins">Communauté</h3>
        <p class="text-primaryGray text-xl font-inter">Rejoignez Talent Hub et trouvez les connaissances, le soutien et la communauté qui vous aideront à faire évoluer votre entreprise vers le niveau suivant.</p>
      </li>
      <li>
        <span class="text-primaryGray border rounded-full p-4 w-min">
          <LucideHelpingHand/>
        </span>
        <h3 class="font-semibold text-2xl mb-4 text-primaryBlack font-poppins">Besoin d'aide</h3>
        <p class="text-primaryGray text-xl font-inter">Recevez des conseils de plusieurs artistes en groupe ou en tête-à-tête et surmontez les obstacles commerciaux et les blocages créatifs.</p>
      </li>
    </ul>
  </section>
</template>
