<template lang="pug">
    #app
      Header
      router-view
      Footer
      
</template>

<script>
import Header from '@/components/header.vue';
import Footer from '@/components/footer.vue';


export default {
  data() {
    return {
    };
  },
  methods: {
  },
  components: {
    Header,
    Footer
  },
};
</script>
<style>

@charset "UTF-8";