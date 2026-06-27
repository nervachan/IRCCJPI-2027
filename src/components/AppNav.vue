<template>
  <nav class="nav" :class="{ 'nav--scrolled': scrolled }">
    <router-link class="nav__brand" to="/">
      <img class="nav__brand-logo" src="/ccjpi_logo.png" alt="IR3CJPI logo" />
      <div>
        <span class="nav__brand-name">IR3CJPI 2027</span>
        <span class="nav__brand-sub">Feb 8–9 · Baguio City, PH</span>
      </div>
    </router-link>

    <ul class="nav__links" :class="{ 'nav__links--open': menuOpen }">
      <li><a href="/#overview" @click="menuOpen = false">Overview</a></li>
      <li><a href="/#subthemes" @click="menuOpen = false">Sub-themes</a></li>
      <li><a href="/#speakers" @click="menuOpen = false">Speakers</a></li>
      <li>
        <router-link class="nav__cta" to="/submit" @click="menuOpen = false">
          Register Now
        </router-link>
      </li>
    </ul>

    <button class="nav__hamburger" aria-label="Toggle menu" @click="menuOpen = !menuOpen">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const menuOpen = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 10
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>
