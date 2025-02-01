<script setup lang="ts">
  import { computed } from 'vue';
  import { useRoute, useRouter } from 'vue-router';

  const router = useRouter()
  const route = useRoute();

  const routeStyle: Record<string, any> = {
    '/aboutMe': { background : 'url("/Sniffaris_Background (Lemon).jpg")', textColour : '#155030' },
    '/dropinDog': { background : 'url("/Sniffaris_Background (Lemon).jpg")', textColour : '#155030' }
  };

  const backgroundStyle = computed(() => ({
    backgroundImage: routeStyle[route.path]?.background || 'url("/Sniffaris_Background (Green).jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed', 
    minHeight: '100vh',
    color: routeStyle[route.path]?.textColour || '#defba8',
  }));

  const nav = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/aboutMe'},
    { label: 'Walks', to: '/walks' },
    { label: 'Drop-ins', submenu: [ 
      {label: 'Dogs', to: '/dropinDog'}, 
      {label: 'Cats & Small pets', to: '/dropinCat'}]  
    },
    { label: 'Contact', to: '/contact' },
  ]
</script>

<template>
  <Navbar :navLinks="nav"/>
  <main>
    <NuxtPage class="template-page" :style="backgroundStyle" />
  </main>
</template>
