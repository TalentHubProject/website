<template>
    <div class="min-h-screen flex justify-center align-middle">
        <div class="">
            <section class="bg-white">
                <div class="mt-16 lg:mt-40 pt-40 text-center md:bg-white lg:pt-16 ">
                    <div class="flex items-center justify-center ">
                        <div class="bg-slate-100 px-4 py-1 rounded">
                            <img class="float-left pt-1 pr-2" src="~/assets/images/Events.png"/>
                            <p class="text-slate-700 float-left">Events</p>
                        </div>
                    </div>
                    <h1
                            class=" max-[376px]:px-2 px-8 text-4xl sm:px-64 mt-5 sm:text-5xl font-extrabold tracking-tight leading-none text-gray-900 md:mb-16  lg:text-6xl ">
                        Liste des évènements
                    </h1>


                </div>
            </section>
            <section class="pt-44 xl:pt-32">
                <div class=" mb-28">
                    <div class="py-0 mx-auto w-11/12 xl:w-full">
                        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-2 mb-4">
                            <div class="w-full h-[340px] sm:h-[440px] relative card-bg bg-cover bg-center rounded-lg">
                                <div
                                        class="absolute top-0 left-0 w-full h-full opacity-90 overlay hover:opacity-100 rounded-lg text-white transition-all duration-300 ease-in-out">
                                    <div class="flex items-center justify-end mt-4 sm:mt-8 mr-8">
                                        <img class=" mr-2" src="~/assets/images/ri_time-fill.png">
                                        <!-- Adjust width, height, and margin as needed -->
                                        <p class="text-sm sm:text-xl font-normal">se termine dans 4 jours..</p>
                                        <!-- Adjust text size and other styles as needed -->
                                    </div>
                                    <div class="mt-20 sm:mt-28 ml-6 sm:ml-8">
                                        <h3 class="text-base sm:text-2xl font-semibold">T-Design Week</h3>
                                        <!-- Adjust width, height, and margin as needed -->
                                        <p class="text-sm sm:text-xl font-normal mt-4 w-11/12 sm:w-10/12 leading-5">Vous
                                            Vous devrez créer un logo sur la thématique de l'hiver (entreprise, marque,
                                            restaurant, etc...) et réalisé une mise en situation. (un mockup)</p>
                                        <button class="mt-6 bg-white text-rose-700 text-sm font-medium  py-2 px-4 pinkButton hover:border-transparent rounded"
                                                @mouseout="isMouseOver = false"
                                                @mouseover=" isMouseOver = true">
                                            <p class="float-left">Voir plus</p>
                                            <svg fill="none" height="21" viewBox="0 0 24 24" width="24"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                        :fill="isMouseOver ? 'white' : '#E05880'"
                                                        d="M12.97 15.4698C12.8963 15.5385 12.8372 15.6213 12.7962 15.7133C12.7552 15.8053 12.7332 15.9046 12.7314 16.0053C12.7296 16.106 12.7482 16.2061 12.7859 16.2994C12.8236 16.3928 12.8797 16.4777 12.951 16.5489C13.0222 16.6201 13.107 16.6762 13.2004 16.714C13.2938 16.7517 13.3938 16.7702 13.4945 16.7684C13.5952 16.7667 13.6945 16.7446 13.7865 16.7036C13.8785 16.6626 13.9613 16.6035 14.03 16.5298L18.03 12.5298C18.0998 12.4603 18.1552 12.3778 18.1929 12.2868C18.2307 12.1959 18.2502 12.0983 18.2502 11.9998C18.2502 11.9014 18.2307 11.8038 18.1929 11.7129C18.1552 11.6219 18.0998 11.5393 18.03 11.4698L14.03 7.46985C13.9613 7.39616 13.8785 7.33706 13.7865 7.29606C13.6945 7.25507 13.5952 7.23303 13.4945 7.23126C13.3938 7.22948 13.2938 7.248 13.2004 7.28572C13.107 7.32344 13.0222 7.37959 12.951 7.45081C12.8797 7.52203 12.8236 7.60686 12.7859 7.70025C12.7482 7.79364 12.7296 7.89366 12.7314 7.99437C12.7332 8.09507 12.7552 8.19439 12.7962 8.28638C12.8372 8.37838 12.8963 8.46118 12.97 8.52985L15.69 11.2498L6 11.2498C5.80109 11.2498 5.61032 11.3289 5.46967 11.4695C5.32901 11.6102 5.25 11.8009 5.25 11.9998C5.25 12.1988 5.32901 12.3895 5.46967 12.5302C5.61032 12.6708 5.80108 12.7498 6 12.7498L15.69 12.7498L12.97 15.4698Z"/>
                                            </svg>

                                        </button>
                                        <!-- Adjust text size and other styles as needed -->
                                    </div>

                                </div>
                            </div>
                            <div class="w-full h-[340px] sm:h-auto relative card-bg2 bg-cover bg-center rounded-lg">
                                <div
                                        class="absolute top-0 left-0 w-full h-full opacity-90 overlay2 hover:opacity-100 rounded-lg text-white transition-all duration-300 ease-in-out">
                                    <div class="flex items-center justify-end mt-4 sm:mt-8 mr-8">
                                        <img class=" mr-2" src="~/assets/images/ri_time-fill.png">
                                        <!-- Adjust width, height, and margin as needed -->
                                        <p class="text-sm sm:text-xl font-normal">se termine dans 2 jours..</p>
                                        <!-- Adjust text size and other styles as needed -->
                                    </div>
                                    <div class="mt-20 sm:mt-28 ml-6 sm:ml-8">
                                        <h3 class="text-base sm:text-2xl font-semibold">Champignons 🍄</h3>
                                        <!-- Adjust width, height, and margin as needed -->
                                        <p class="text-sm sm:text-xl font-normal mt-4 w-11/12 sm:w-10/12 leading-5">Vous
                                            Vous pourrez faire un logo, un site, une illustration, un dessin, un
                                            personnage,
                                            une création en 3D, une sculpture, une photo, une animation 2D/3D </p>
                                        <button class="mt-6 mb-4 bg-white text-[#6ad1b8] text-sm font-medium  py-2 px-4 pinkButton hover:border-transparent rounded"
                                                @mouseout="isMouseOver1 = false"
                                                @mouseover=" isMouseOver1 = true">
                                            <p class="float-left ">Voir plus</p>
                                            <svg fill="none" height="21" viewBox="0 0 24 24" width="24"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                        :fill="isMouseOver1 ? 'white' : '#65C4AC'"
                                                        d="M12.9701 15.4698C12.8964 15.5385 12.8373 15.6213 12.7963 15.7133C12.7553 15.8053 12.7333 15.9046 12.7315 16.0053C12.7297 16.106 12.7482 16.2061 12.786 16.2994C12.8237 16.3928 12.8798 16.4777 12.951 16.5489C13.0223 16.6201 13.1071 16.6762 13.2005 16.714C13.2939 16.7517 13.3939 16.7702 13.4946 16.7684C13.5953 16.7667 13.6946 16.7446 13.7866 16.7036C13.8786 16.6626 13.9614 16.6035 14.0301 16.5298L18.0301 12.5298C18.0999 12.4603 18.1552 12.3778 18.193 12.2868C18.2308 12.1959 18.2502 12.0983 18.2502 11.9998C18.2502 11.9014 18.2308 11.8038 18.193 11.7129C18.1552 11.6219 18.0999 11.5393 18.0301 11.4698L14.0301 7.46985C13.9614 7.39616 13.8786 7.33706 13.7866 7.29606C13.6946 7.25507 13.5953 7.23303 13.4946 7.23126C13.3939 7.22948 13.2939 7.248 13.2005 7.28572C13.1071 7.32344 13.0223 7.37959 12.951 7.45081C12.8798 7.52203 12.8237 7.60686 12.786 7.70025C12.7482 7.79364 12.7297 7.89366 12.7315 7.99437C12.7333 8.09507 12.7553 8.19439 12.7963 8.28638C12.8373 8.37838 12.8964 8.46118 12.9701 8.52985L15.6901 11.2498L6.00007 11.2498C5.80116 11.2498 5.6104 11.3289 5.46974 11.4695C5.32909 11.6102 5.25007 11.8009 5.25007 11.9998C5.25007 12.1988 5.32909 12.3895 5.46974 12.5302C5.6104 12.6708 5.80116 12.7498 6.00007 12.7498L15.6901 12.7498L12.9701 15.4698Z"/>
                                            </svg>

                                        </button>
                                        <!-- Adjust text size and other styles as needed -->
                                    </div>

                                </div>
                            </div>
                            <div class="w-full h-[340px] sm:h-[440px] relative card-bg3 bg-cover bg-center rounded-lg">
                                <div
                                        class="absolute top-0 left-0 w-full h-full opacity-90 overlay3 hover:opacity-100  rounded-lg text-white transition duration-300 ease-in-out">
                                    <div class="flex items-center justify-end mt-4 sm:mt-8 mr-8">
                                        <img class=" mr-2" src="~/assets/images/ri_time-fill.png">
                                        <!-- Adjust width, height, and margin as needed -->
                                        <p class="text-sm sm:text-xl font-normal">se termine dans 4 jours..</p>
                                        <!-- Adjust text size and other styles as needed -->
                                    </div>
                                    <div class="mt-20 sm:mt-28 ml-6 sm:ml-8">
                                        <h3 class="text-base sm:text-2xl font-semibold">Thème de la semaine</h3>
                                        <!-- Adjust width, height, and margin as needed -->
                                        <p class="text-sm sm:text-xl font-normal mt-4 w-11/12 sm:w-10/12 leading-5">Vous
                                            Bonjour à tous ! Voici le thème de cette première semaine de l'été des
                                            artistes
                                            : </p>
                                        <ul class="list-disc">
                                            <li class="ml-4"> Plages</li>
                                        </ul>
                                        <button class="mt-6 bg-white hover:bg-rose-800 text-[#D1BA6A] text-sm pinkButton font-medium hover:text-white py-2 px-4  hover:border-transparent rounded"
                                                @mouseout="isMouseOver2 = false"
                                                @mouseover=" isMouseOver2 = true">
                                            <p class="float-left">Voir plus</p>
                                            <svg fill="none" height="24" viewBox="0 0 24 24" width="24"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                        :fill="isMouseOver2 ? 'white' : '#D1BA6A'"
                                                        d="M12.9701 15.4701C12.8964 15.5388 12.8373 15.6216 12.7963 15.7136C12.7553 15.8056 12.7333 15.9049 12.7315 16.0056C12.7297 16.1063 12.7482 16.2063 12.786 16.2997C12.8237 16.3931 12.8798 16.4779 12.951 16.5491C13.0223 16.6203 13.1071 16.6765 13.2005 16.7142C13.2939 16.7519 13.3939 16.7705 13.4946 16.7687C13.5953 16.7669 13.6946 16.7449 13.7866 16.7039C13.8786 16.6629 13.9614 16.6038 14.0301 16.5301L18.0301 12.5301C18.0999 12.4606 18.1552 12.378 18.193 12.287C18.2308 12.1961 18.2502 12.0986 18.2502 12.0001C18.2502 11.9016 18.2308 11.8041 18.193 11.7131C18.1552 11.6222 18.0999 11.5396 18.0301 11.4701L14.0301 7.47009C13.9614 7.3964 13.8786 7.3373 13.7866 7.29631C13.6946 7.25532 13.5953 7.23328 13.4946 7.2315C13.3939 7.22972 13.2939 7.24825 13.2005 7.28597C13.1071 7.32369 13.0223 7.37983 12.951 7.45105C12.8798 7.52227 12.8237 7.6071 12.786 7.70049C12.7482 7.79388 12.7297 7.89391 12.7315 7.99461C12.7333 8.09532 12.7553 8.19463 12.7963 8.28663C12.8373 8.37863 12.8964 8.46143 12.9701 8.53009L15.6901 11.2501L6.00007 11.2501C5.80116 11.2501 5.6104 11.3291 5.46974 11.4698C5.32909 11.6104 5.25007 11.8012 5.25007 12.0001C5.25007 12.199 5.32909 12.3898 5.46974 12.5304C5.6104 12.6711 5.80116 12.7501 6.00007 12.7501L15.6901 12.7501L12.9701 15.4701Z"/>
                                            </svg>


                                        </button>
                                        <!-- Adjust text size and other styles as needed -->
                                    </div>

                                </div>
                            </div>
                            <div class="w-full h-[340px] sm:h-[440px] relative card-bg4 bg-cover bg-center rounded-lg">
                                <div
                                        class="absolute top-0 left-0 w-full h-full opacity-90 overlay4 hover:opacity-100 rounded-lg text-white transition duration-300 ease-in-out">
                                    <div class="flex items-center justify-end mt-4 sm:mt-8 mr-8">
                                        <img class=" mr-2" src="~/assets/images/ri_time-fill.png">
                                        <!-- Adjust width, height, and margin as needed -->
                                        <p class="text-sm sm:text-xl font-normal">se termine dans 2 jours..</p>
                                        <!-- Adjust text size and other styles as needed -->
                                    </div>
                                    <div class="mt-20 sm:mt-28 ml-6 sm:ml-8">
                                        <h3 class="text-base sm:text-2xl font-semibold">Thème de l’Hiver ⛄</h3>
                                        <!-- Adjust width, height, and margin as needed -->
                                        <p class="text-sm sm:text-xl font-normal mt-4 w-11/12 sm:w-10/12 leading-5">Vous
                                            devrez créer un logo sur la thématique de l'hiver (entreprise, marque,
                                            restaurant, etc...) et réalisé une mise en situation. (un mockup) </p>
                                        <button class="mt-6 bg-white hover:bg-rose-800 text-[#6AA0D1] text-sm font-medium hover:text-white py-2 px-4 pinkButton hover:border-transparent rounded"
                                                @mouseout="isMouseOver3 = false"
                                                @mouseover=" isMouseOver3 = true">
                                            <p class="float-left ">Voir plus</p>
                                            <svg fill="none" height="21" viewBox="0 0 24 24" width="24"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                        :fill="isMouseOver3 ? 'white' : '#6697C2'"
                                                        d="M12.9701 15.4701C12.8964 15.5388 12.8373 15.6216 12.7963 15.7136C12.7553 15.8056 12.7333 15.9049 12.7315 16.0056C12.7297 16.1063 12.7482 16.2063 12.786 16.2997C12.8237 16.3931 12.8798 16.4779 12.951 16.5491C13.0223 16.6203 13.1071 16.6765 13.2005 16.7142C13.2939 16.7519 13.3939 16.7705 13.4946 16.7687C13.5953 16.7669 13.6946 16.7449 13.7866 16.7039C13.8786 16.6629 13.9614 16.6038 14.0301 16.5301L18.0301 12.5301C18.0999 12.4606 18.1552 12.378 18.193 12.287C18.2308 12.1961 18.2502 12.0986 18.2502 12.0001C18.2502 11.9016 18.2308 11.8041 18.193 11.7131C18.1552 11.6222 18.0999 11.5396 18.0301 11.4701L14.0301 7.47009C13.9614 7.3964 13.8786 7.3373 13.7866 7.29631C13.6946 7.25532 13.5953 7.23328 13.4946 7.2315C13.3939 7.22972 13.2939 7.24825 13.2005 7.28597C13.1071 7.32369 13.0223 7.37983 12.951 7.45105C12.8798 7.52227 12.8237 7.6071 12.786 7.70049C12.7482 7.79388 12.7297 7.89391 12.7315 7.99461C12.7333 8.09532 12.7553 8.19463 12.7963 8.28663C12.8373 8.37863 12.8964 8.46143 12.9701 8.53009L15.6901 11.2501L6.00007 11.2501C5.80116 11.2501 5.6104 11.3291 5.46974 11.4698C5.32909 11.6104 5.25007 11.8012 5.25007 12.0001C5.25007 12.199 5.32909 12.3898 5.46974 12.5304C5.6104 12.6711 5.80116 12.7501 6.00007 12.7501L15.6901 12.7501L12.9701 15.4701Z"/>
                                            </svg>


                                        </button>
                                        <!-- Adjust text size and other styles as needed -->
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            isMouseOver: false,
            isMouseOver1: false,
            isMouseOver2: false,
            isMouseOver3: false,
        };
    }
};
</script>


<style>
.arrow {
    width: 0;
    height: 0;
    border-top: 20px solid transparent;
    /* Adjust size as needed */
    border-bottom: 20px solid transparent;
    /* Adjust size as needed */
    border-left: 40px solid #3498db;
    /* Adjust color as needed */
}

.pinkButton:hover {
    background: linear-gradient(to right, #DF8F90, #E05880);
    color: #fff;
}

.card-bg {
    background-image: url('~/assets/images/card1.png');
}

.overlay {
    background-color: #D16A7D;
    /* Adjust the color and opacity as needed */
}

.card-bg2 {
    background-image: url('~/assets/images/mushrooms.png');
}

.overlay2 {
    background-color: #6AD1B8;
    /* Adjust the color and opacity as needed */
}

.card-bg3 {
    background-image: url('~/assets/images/mushrooms.png');
}

.overlay3 {
    background-color: #D1BA6A;
    /* Adjust the color and opacity as needed */
}

.card-bg4 {
    background-image: url('~/assets/images/due-drop.png');
}

.overlay4 {
    background-color: #6AA0D1;
    /* Adjust the color and opacity as needed */
}

/* .overlay:hover {
    background-color: #bb5b6d;
    /* Adjust the color and opacity as needed
} */
</style>