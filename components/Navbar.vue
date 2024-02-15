<template>
  <div>
    <nav class="fixed w-full p-6 bg-white z-20">
      <div class="flex items-center justify-between sm:justify-around">
        <!-- Header logo -->
        <div class="ml-0 lg:ml-24">
          <Logo />
        </div>
        <!-- Navbar -->
        <div class="hidden md:block">
          <ul class="flex space-x-2 text-sm bg-slate-100 px-1 py-2 rounded">
            <li>
              <NuxtLink to="/" active-class="exactActiveClass" class="px-2 hoverClass">Blog
              </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/events" active-class="exactActiveClass " class="px-2 hoverClass">Événements</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/starboard" active-class="exactActiveClass" class="px-2 hoverClass">Starboard
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="hidden md:block mr-24">
          <ul>
            <li>
              <Connecter />
            </li>
          </ul>
        </div>
        <!-- Mobile toggle -->
        <div class="md:hidden">
          <button @click="drawer">
            <svg width="27" height="9" viewBox="0 0 27 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="27" height="2" fill="black" />
              <rect x="4" y="7" width="23" height="2" fill="black" />
            </svg>
          </button>
        </div>
        <!-- Drawer Menu -->
        <aside
          class="p-5 pt-0 transform top-0 left-0 w-screen bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
          :class="isOpen ? 'translate-x-0' : '-translate-x-full'">
          <div class="close">
            <button class="absolute top-0 right-0 mt-6 mr-4" @click="isOpen = false">
              <svg class="w-6 h-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                viewBox="0 0 24 24" stroke="currentColor">
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          <span @click="isOpen = false" class="flex w-full items-center justify-between p-4 pl-0 border-b">
            <Logo />
            <Connecter />
            <span class=""></span>
          </span>

          <ul class="">
            <li>
              <NuxtLink to="/" @click="isOpen = false" class="my-8 inline-block text-xl font-medium">Blog</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/events" @click="isOpen = false" class="my-8 inline-block text-xl font-medium">Événements</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/starboard" @click="isOpen = false" class="my-8 inline-block text-xl font-medium">
                Starboard</NuxtLink>
            </li>
          </ul>
          <div class="border-t"></div>
          <ul class="text-gray-500 dark:text-gray-400 font-medium mb-8">
            <li class="mt-16">
              <a href="https://github.com/themesberg/flowbite" class="hover:underline">Instagram</a>
            </li>
            <li class="mt-8 sm:mb-4">
              <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Facebook</a>
            </li>
            <li class="mt-8">
              <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Twitter</a>
            </li>
          </ul>
          <JoinButton text="Rejoindre l’aventure" />
        </aside>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    drawer() {
      this.isOpen = !this.isOpen;
    },
  },
  watch: {
    isOpen: {
      immediate: true,
      handler(isOpen) {
        if (process.client) {
          if (isOpen) document.body.style.setProperty("overflow", "hidden");
          else document.body.style.removeProperty("overflow");
        }
      },
    },
  },
  mounted() {
    document.addEventListener("keydown", (e) => {
      if (e.keyCode == 27 && this.isOpen) this.isOpen = false;
    });
  },
};
</script>
<style>
.exactActiveClass {
  font-weight: 500;
  background-color: #fff;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}

.hoverClass:hover {
  font-weight: 500;
  background-color: #fff;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}

.exactActiveClass:hover {
  font-weight: 500;
  background-color: #ffffff9c;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}
</style>
