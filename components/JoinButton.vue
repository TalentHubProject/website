<!-- <script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
});
const { text } = props;
const data = () => ({
  isMouseOver: false
}); -->

<!-- </script> -->

<template>
  <a href="https://discord.talent-hub.fr" target="_blank" rel="noreferrer noopener">
    <button @mouseover="isMouseOver = true" @mouseout="isMouseOver = false"
      class="bg-transparent  text-[#E05880] text-sm font-medium hover:text-white py-2 px-4 border border-[#E05880] hover:border-transparent rounded transition duration-300 ease-in-out"
      :class="isMouseOver ? 'red-fill' : ''">
      <p class="float-left">{{ text }}</p>
      <svg width="24" height="21" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12.97 15.4698C12.8963 15.5385 12.8372 15.6213 12.7962 15.7133C12.7552 15.8053 12.7332 15.9046 12.7314 16.0053C12.7296 16.106 12.7482 16.2061 12.7859 16.2994C12.8236 16.3928 12.8797 16.4777 12.951 16.5489C13.0222 16.6201 13.107 16.6762 13.2004 16.714C13.2938 16.7517 13.3938 16.7702 13.4945 16.7684C13.5952 16.7667 13.6945 16.7446 13.7865 16.7036C13.8785 16.6626 13.9613 16.6035 14.03 16.5298L18.03 12.5298C18.0998 12.4603 18.1552 12.3778 18.1929 12.2868C18.2307 12.1959 18.2502 12.0983 18.2502 11.9998C18.2502 11.9014 18.2307 11.8038 18.1929 11.7129C18.1552 11.6219 18.0998 11.5393 18.03 11.4698L14.03 7.46985C13.9613 7.39616 13.8785 7.33706 13.7865 7.29606C13.6945 7.25507 13.5952 7.23303 13.4945 7.23126C13.3938 7.22948 13.2938 7.248 13.2004 7.28572C13.107 7.32344 13.0222 7.37959 12.951 7.45081C12.8797 7.52203 12.8236 7.60686 12.7859 7.70025C12.7482 7.79364 12.7296 7.89366 12.7314 7.99437C12.7332 8.09507 12.7552 8.19439 12.7962 8.28638C12.8372 8.37838 12.8963 8.46118 12.97 8.52985L15.69 11.2498L6 11.2498C5.80109 11.2498 5.61032 11.3289 5.46967 11.4695C5.32901 11.6102 5.25 11.8009 5.25 11.9998C5.25 12.1988 5.32901 12.3895 5.46967 12.5302C5.61032 12.6708 5.80108 12.7498 6 12.7498L15.69 12.7498L12.97 15.4698Z"
          :fill="isMouseOver ? 'white' : '#E05880'" />
      </svg>
    </button>
  </a>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isMouseOver: false
    };
  }
};
</script>
<style scoped>
.red-fill {
  background: linear-gradient(to right, #DF8F90, #E05880);
  color: #fff;
}
</style>

