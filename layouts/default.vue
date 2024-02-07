<script setup lang="ts"></script>

<template>
  <div >
    
   <Navbar/>
       <slot />
    <Footer/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isMenuHidden: true
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuHidden = !this.isMenuHidden;
    }
  }
};
</script>
<style lang="scss" scoped></style>
