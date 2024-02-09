<template>
    <div class="min-h-screen flex justify-center align-middle">
        <div class="">
            <section class="bg-white">
                <div class="mt-16 lg:mt-40 pt-32 text-center md:bg-white lg:pt-16 ">
                    <div class="flex items-center justify-center ">
                        <div class="bg-slate-100 px-4 py-1 rounded">
                            <img class="float-left pt-1 pr-2" src="~/assets/images/gallery-icon.png" />
                            <p class="text-slate-700 float-left">Gallery</p>
                        </div>
                    </div>
                    <h1
                        class=" max-[375px]:px-16 max-[320px]:px-8 px-16 text-4xl sm:px-64 mt-5 sm:text-5xl font-extrabold tracking-tight leading-none text-gray-900 md:mb-16  lg:text-6xl ">
                        Les créations des meilleurs artistes du moment
                    </h1>


                </div>
            </section>
            <section class="pt-8 xl:pt-32">
                <div class="diagonal-box mb-28">
                    <div class="py-0 mx-auto w-11/12 xl:w-fit not-diagonal">
                        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 gap-4 mb-4">
                            <div>
                                <img src="~/assets/images/gallery/gallery1.png" alt="">
                            </div>
                            <div>
                                <img src="~/assets/images/gallery/gallery2.png" alt="">
                            </div>
                        </div>
                        <div class="grid grid-col-1 gap-4 sm:grid-cols-3 gap-4">
                            <div>
                                <img src="~/assets/images/gallery/gallery3.png" alt="">
                            </div>
                            <div>
                                <img src="~/assets/images/gallery/gallery4.png" alt="">
                            </div>
                            <div>
                                <img src="~/assets/images/gallery/gallery5.png" alt="">
                            </div>
                            <div>
                                <img src="~/assets/images/gallery/gallery6.png" alt="">
                            </div>
                            <div>
                                <img src="~/assets/images/gallery/gallery7.png" alt="">
                            </div>
                            <div>
                                <img src="~/assets/images/gallery/gallery8.png" alt="">
                            </div>
                            <div>
                                <img src="~/assets/images/gallery/gallery9.png" alt="">
                            </div>
                            <div>
                                <img src="~/assets/images/gallery/gallery10.png" alt="">
                            </div>
                            <div>
                                <img src="~/assets/images/gallery/gallery11.png" alt="">
                            </div>
                            <div>
                                <img src="~/assets/images/gallery/gallery12.png" alt="">
                            </div>
                            <div>
                                <img src="~/assets/images/gallery/gallery13.png" alt="">
                            </div>
                            <div>
                                <img src="~/assets/images/gallery/gallery14.png" alt="">
                            </div>
                            <div>
                                <img src="~/assets/images/gallery/gallery15.png" alt="">
                            </div>
                            <div>
                                <img src="~/assets/images/gallery/gallery16.png" alt="">
                            </div>
                            <div>
                                <img src="~/assets/images/gallery/gallery17.png" alt="">
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

}
</script>

  
<style>
.container {
    margin: 0;
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.diagonal-box {
    background: linear-gradient(to right, rgba(193, 65, 104, 1) 13%, rgba(223, 143, 144, 1) 100%);
    transform: skewY(-14deg);
}

.not-diagonal {
    transform: skewY(14deg);
}
</style>