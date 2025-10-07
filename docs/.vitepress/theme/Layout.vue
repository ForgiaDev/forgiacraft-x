<script setup>
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Countdown from '../components/Countdown.vue'
import { computed } from 'vue'

const { Layout } = DefaultTheme
const { page, frontmatter } = useData()

const isHomePage = computed(() => {
  return frontmatter.value.layout === 'home'
})

const getCountdownProps = computed(() => {
  const isEnglish = page.value.relativePath.startsWith('en/')

  if (isEnglish) {
    return {
      title: '🎮 Server Opening',
      days: 'days',
      hours: 'hours',
      minutes: 'minutes',
      seconds: 'seconds',
      expired: 'The server is open! Have fun!'
    }
  }

  return {
    title: '🎮 Apertura Server',
    days: 'giorni',
    hours: 'ore',
    minutes: 'minuti',
    seconds: 'secondi',
    expired: 'Il server è aperto! Buon divertimento!'
  }
})
</script>

<template>
  <Layout>
    <template #home-hero-before>
      <div v-if="isHomePage" class="countdown-banner">
        <Countdown
          targetDate="2025-10-10T21:30:00+02:00"
          v-bind="getCountdownProps"
        />
      </div>
    </template>
  </Layout>
</template>

<style>
.countdown-banner {
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  background: linear-gradient(135deg, var(--vp-c-brand-soft) 0%, var(--vp-c-bg-soft) 100%);
  border-bottom: 1px solid var(--vp-c-divider);
  margin-bottom: 0;
}

.countdown-banner .countdown-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem 24px;
  background: transparent;
  border: none;
}

@media (max-width: 768px) {
  .countdown-banner .countdown-container {
    padding: 1.5rem 16px;
  }
}
</style>
