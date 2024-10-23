<script setup lang="ts">
  const router = useRouter()
  const nav = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Walks', to: '/walks' },
    { label: 'Drop-ins', to: '/dropin' },
    { label: 'Contact', to: '/contact' },
  ]
</script>

<template>
  <Navbar :navLinks="nav"/>
  <main>
    <NuxtPage class="template-page" />
  </main>
</template>
