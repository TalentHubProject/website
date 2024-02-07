<script setup lang="ts">

</script>

<template>
    <div>


        <footer class="bg-white z-50 ">
            <div class="mx-4 lg:mx-8  not-diagonalNew px-0 lg:px-16 pt-16 pb-4  lg:border-x lg:border-t rounded-lg ">
                <div class="md:flex md:justify-between">
                    <div class="mb-6  md:mb-0">
                        <span class="mr-30">
                            <Logo />
                            <p class="w-9/12 font-normal text-base text-gray-400 mt-6 mb-10">Réunissant passionnés d'art, de
                                développement, de musique et bien plus encore
                            </p>
                            <span>
                                <JoinButton text="Rejoindre l’aventure" />
                            </span>
                        </span>
                    </div>
                    <div class="grid grid-cols-1 gap-8 sm:gap-20 sm:grid-cols-3 pb-16">
                        <div>
                            <h2 class="mb-6 text-xl font-semibold text-gray-900 truncate mt-16 sm:mt-0">Accueil</h2>
                            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                <li class="mb-8 sm:mb-4 ">
                                    <a href="https://flowbite.com/" class="hover:underline ">Blog</a>
                                </li>
                                <li class="mb-8 sm:mb-4 ">
                                    <a href="https://tailwindcss.com/" class="hover:underline">Offres CSS</a>
                                </li>
                                <li>
                                    <a href="https://tailwindcss.com/" class="hover:underline">Trombinoscope</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 class="mb-6 text-xl font-semibold text-gray-900 overflow-visible mt-12 sm:mt-0">
                                Contactez-nous</h2>
                            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                <li class="mb-8 sm:mb-4">
                                    <a href="https://github.com/themesberg/flowbite" class="hover:underline ">Instagram</a>
                                </li>
                                <li class="mb-8 sm:mb-4">
                                    <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Facebook</a>
                                </li>
                                <li>
                                    <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Twitter</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 class="mb-6 text-xl font-semibold text-gray-900 truncate mt-16 sm:mt-0">
                                <Connecter />
                            </h2>

                        </div>
                    </div>
                </div>
                <hr class="my-6 border-slate-200 sm:mx-auto lg:my-8" />
                <div class="my-16 sm:my-0 sm:flex sm:items-center sm:justify-between">
                    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                       Développé par <a href="https://agdl.dev" class="underline">Alexis C. Gridel | Ecrin Digital</a> 
                        © Copyright 2023, Talent Hub.
                    </span>

                </div>
            </div>
        </footer>


    </div>
</template>

<style lang="css" scoped>
.not-diagonalNew {
    transform: skewY(0deg);
}
</style>