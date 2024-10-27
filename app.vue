<script setup lang="ts">
  const router = useRouter()
  const nav = [
    { label: 'Home', to: '/' },
    { label: 'About', submenu: [ 
      {label: 'Me', to: '/aboutMe'}, 
      {label: 'Sniffari', to: '/aboutSniffari'}] 
    },
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
    <NuxtPage class="template-page" />
  </main>
</template>
