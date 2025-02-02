<script setup lang="ts">
  import { computed } from 'vue';
  import { useRoute, useRouter } from 'vue-router';

  const router = useRouter()
  const route = useRoute();
  const img = useImage()

  const routeStyle: Record<string, any> = {
    '/aboutMe': { background : '/Sniffaris_Background (Lemon).jpg', textColour : '#155030', backgroundColour : '#FFFACF' },
    '/dropinDog': { background : '/Sniffaris_Background (Lemon).jpg', textColour : '#155030', backgroundColour : '#FFFACF' }
  };

  const backgroundStyle = computed(() => ({
    backgroundImage: `url("${ img(routeStyle[route.path]?.background || '/Sniffaris_Background (Green).jpg', { width: 3840, height: 2160, quality: 80, format: 'jpg' }) }")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed', 
    minHeight: '100vh',
    color: routeStyle[route.path]?.textColour || '#defba8',
    backgroundColor: routeStyle[route.path]?.backgroundColour || '#155030'
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
  <div :style="backgroundStyle">
    <Navbar :navLinks="nav"/>
    <main>
      <NuxtPage class="template-page"  />
    </main>
  </div>
</template>
