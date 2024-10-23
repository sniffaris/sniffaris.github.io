<template>
    <nav class="navbar navbar-expand-md sticky-top border-bottom">
        <div class="container-fluid">
            <button class="navbar-toggler ms-auto hidden-sm-up float-xs-right custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto text-center">
                    <li v-for="link in navLinks" class="nav-item">
                        <NuxtLink :key="link.label" :to="link.to" class="nav-link">
                            {{ link.label }}
                        </NuxtLink>
                    </li>
                </ul>
            </div>
            
        </div>
    </nav>
</template>

<script setup>
defineProps({
    navLinks: {
        type: Array,
        required: true
    }
});

const { $bs } = useNuxtApp();

onMounted(() => {
    // Get all nav-link elements
    const navLinks = document.querySelectorAll('.nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    // Add a click event listener to each nav-link
    navLinks.forEach((link) => {
      link.addEventListener('click', function () {
        // Collapse the navbar after a link is clicked
        if (navbarCollapse.classList.contains('show')) {
          new $bs.Collapse(navbarCollapse).hide();
        }
      });
    });
});
</script>

<style scoped>
.navbar-nav {
    justify-content: center;
    padding: 0.5rem 2rem;
}

.nav-link {
    text-decoration: none;
    padding: 0.5rem 2rem;
}

.navbar-item:hover {
    border-radius: 4px;
}
</style>