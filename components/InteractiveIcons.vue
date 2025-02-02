<template>
  <div class="container text-center">
    <div class="row justify-content-center">
      <div 
        v-for="(item, index) in items" 
        :key="index" 
        class="col-6 col-md-4 col-lg-3 d-flex justify-content-center"
      >
        <div 
          class="reveal-card position-relative"
          :class="{ 'clicked': clickedIndex === index }"
          @click="toggleText(index)"
        >
          <!-- Image and Label -->
          <div class="front">
            <img :src="item.image" class="img-fluid" alt="Item Image">
            <p class="label">{{ item.label }}</p>
          </div>

          <!-- Hidden Text -->
          <div class="back position-absolute">
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Sample data
const items = ref([
  { image: '/Sniffaris_Icon + (Bonding Time).png', label: 'Bonding Time', description: 'Sniffaris allow you to see the world from their perspective and can strengthen the bond you share by supporting their natural instincts.' },
  { image: '/Sniffaris_Icon + (Improved Behaviour).png', label: 'Improved Behaviour', description: 'Allowing dogs the freedom to explore can help with behaviour, as they’re less likely to act out due to boredom or frustration.' },
  { image: '/Sniffaris_Icon + (Mental Stimulation).png', label: 'Mental Stimulation', description: 'Sniffing engages a dog’s mind, giving them something mentally enriching to focus on, which can be just as tiring as physical exercise.' },
  { image: '/Sniffaris_Icon + (Physical Exercise).png', label: 'Physical Exercise', description: 'While not the same as a long run, wandering and stopping to sniff still offers some level of physical movement, which can be beneficial for low-energy or senior dogs.' },
  { image: '/Sniffaris_Icon + (Stress Relief).png', label: 'Stress Relief', description: 'Exploring and sniffing new smells helps a dog relax and reduces stress by fulfilling their natural desire to investigate the world through scent.' }
]);

const clickedIndex = ref<number | null>(null);

// Toggle visibility for mobile users
const toggleText = (index: number) => {
  clickedIndex.value = clickedIndex.value === index ? null : index;
};
</script>

<style scoped>
/* Card container */
.reveal-card {
  width: 200px;
  height: 300px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

/* Front side (image + label) */
.front {
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s ease-in-out;
}

.front img {
  border-radius: 50%;
  background-color: #defba8;
  width: 180px;
  height: 180px;
  object-fit: cover;
}

.label {
  margin-top: 5px;
  font-size: 20px;
  font-weight: bold;
}

/* Back side (hidden text) */
.back {
  top: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px;
  opacity: 0;
  transform: scale(1.1);
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
}

/* Hover effect for desktop */
@media (hover: hover) {
  .reveal-card:hover .front {
    opacity: 0;
  }

  .reveal-card:hover .back {
    opacity: 1;
    transform: scale(1);
  }
}

/* Click effect for mobile */
@media (hover: none) {
  .reveal-card.clicked .front {
    opacity: 0;
  }

  .reveal-card.clicked .back {
    opacity: 1;
    transform: scale(1);
  }
}

@media (max-width: 576px) {
  .reveal-card {
    width: 160px;
    height: 230px;
  }

  .front img {
    width: 150px;
    height: 150px;
  }

  .label {
    font-size: 14px;
  }

  .back {
    font-size: 14px;
  }
}
</style>
