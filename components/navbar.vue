<script lang="ts" setup>
import Separator from "~/components/ui/separator/Separator.vue";
import Toaster from "~/components/ui/toast/Toaster.vue";
import {useToast} from "~/components/ui/toast";

let isMenuOpen = ref(false)

const { toast } = useToast()

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <nav class="flex justify-between md:px-20 py-10 px-10 mb-32">

    <nuxt-link class="flex items-center justify-between gap-2" to="/">
      <nuxt-img height="32" src="/logotype.png" width="32"/>
      <span class="text-black font-bold text-2xl">Talent Hub</span>
    </nuxt-link>

    <div
        class="md:flex justify-between gap-x-5 bg-slate-100 px-2 py-1 rounded-md
    child-hover:bg-white child:px-2 child:py-1 child:rounded-md child:transition-all child:duration-300 child:ease-in-out hidden">
      <nuxt-link to="/blog">Blog</nuxt-link>
      <nuxt-link to="#" @click="() => {
      toast({
        title: 'A venir bientôt!',
        description: 'Les offres arrivent bientôt! Restez à l\'affût! 😝',
      });
    }">Offres</nuxt-link>
      <nuxt-link to="/trombinoscope">Trombinoscope</nuxt-link>
    </div>

    <button class="md:hidden" @click="toggleMenu">
      <LucideMenu/>
    </button>

    <Transition name="slide-fade">
      <div
          v-show="isMenuOpen"
          :class="{'translate-x-0': isMenuOpen, '-translate-x-full': !isMenuOpen}"
          class="bg-white fixed top-0 left-0 w-full z-40 transform transition ease-in-out duration-500 px-10 py-10 h-full">

        <nuxt-link class="flex items-center justify-between gap-2 mb-20" to="/">
          <div class="flex flex-row gap-y-2">
            <nuxt-img height="32" src="/logotype.png" width="32"/>
            <span class="text-black font-bold text-2xl">Talent Hub</span>
          </div>

          <Button asChild variant="link" @click="toggleMenu">
            <LucideX class="text-black w-16 h-16 fill-black"/>
          </Button>
        </nuxt-link>

        <div
            class="flex flex-col items-start justify-center child:font-inter child:font-normal child:text-xl w-full gap-y-14 child:text-primaryBlack">
          <Separator class="mb-5"/>
          <nuxt-link class="mb-4" to="/blog">Blog</nuxt-link>
          <nuxt-link class="mb-4" to="#" @click="() => {
      toast({
        title: 'A venir bientôt!',
        description: 'Les offres arrivent bientôt! Restez à l\'affût! 😝',
      });
    }">Offres</nuxt-link>
          <nuxt-link class="mb-4" to="/trombinoscope">Trombinoscope</nuxt-link>
          <Separator class="my-20"/>
        </div>

        <div
            class="flex flex-col items-start justify-start h-full child:font-inter child:font-normal w-full gap-y-5">
          <nuxt-link class="mb-4 text-primaryGray" href="#" to="/blog">Instagram</nuxt-link>
          <nuxt-link class="mb-4 text-primaryGray" href="#" to="/offres">Twitter</nuxt-link>

          <Button asChild
                  class="w-100 mx-0 border-[#E05880] text-[#E05880] hover:text-white font-semibold font-inter hover:bg-gradient-to-r hover:from-[#E05880] hover:to-[#DF8F90]"
                  variant="outline">
            <nuxt-link class="flex gap-2" to="https://discord.talent-hub.fr">
              Rejoindre l'aventure
              <LucideArrowRight/>
            </nuxt-link>
          </Button>

        </div>

      </div>
    </Transition>

    <Button asChild class="hidden md:flex" variant="link">
      <nuxt-link class="flex gap-5" to="/signin">
        <LucideFingerprint/>
        Se connecter
      </nuxt-link>
    </Button>
  </nav>
</template>