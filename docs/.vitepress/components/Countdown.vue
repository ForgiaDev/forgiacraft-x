<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  targetDate: {
    type: String,
    required: true
  },
  title: {
    type: String,
    default: 'Countdown'
  },
  days: {
    type: String,
    default: 'days'
  },
  hours: {
    type: String,
    default: 'hours'
  },
  minutes: {
    type: String,
    default: 'minutes'
  },
  seconds: {
    type: String,
    default: 'seconds'
  },
  expired: {
    type: String,
    default: 'The event has started!'
  }
})

const now = ref(Date.now())
let intervalId = null

onMounted(() => {
  intervalId = setInterval(() => {
    now.value = Date.now()
  }, 1000)
})

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
})

const timeRemaining = computed(() => {
  const target = new Date(props.targetDate).getTime()
  const diff = target - now.value

  if (diff <= 0) {
    return null
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((diff % (1000 * 60)) / 1000)

  return { days, hours, minutes, seconds }
})
</script>

<template>
  <div class="countdown-container">
    <h2 class="countdown-title">{{ title }}</h2>
    <div v-if="timeRemaining" class="countdown">
      <div class="countdown-item">
        <span class="countdown-value">{{ timeRemaining.days }}</span>
        <span class="countdown-label">{{ days }}</span>
      </div>
      <div class="countdown-item">
        <span class="countdown-value">{{ timeRemaining.hours }}</span>
        <span class="countdown-label">{{ hours }}</span>
      </div>
      <div class="countdown-item">
        <span class="countdown-value">{{ timeRemaining.minutes }}</span>
        <span class="countdown-label">{{ minutes }}</span>
      </div>
      <div class="countdown-item">
        <span class="countdown-value">{{ timeRemaining.seconds }}</span>
        <span class="countdown-label">{{ seconds }}</span>
      </div>
    </div>
    <div v-else class="countdown-expired">
      {{ expired }}
    </div>
  </div>
</template>

<style scoped>
.countdown-container {
  margin: 3rem auto;
  text-align: center;
  max-width: 800px;
  padding: 2rem;
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  border: 1px solid var(--vp-c-divider);
}

.countdown-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: var(--vp-c-brand-1);
}

.countdown {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.countdown-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 100px;
}

.countdown-value {
  font-size: 3rem;
  font-weight: 700;
  line-height: 1;
  color: var(--vp-c-text-1);
  font-variant-numeric: tabular-nums;
}

.countdown-label {
  font-size: 0.875rem;
  margin-top: 0.5rem;
  color: var(--vp-c-text-2);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.countdown-expired {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--vp-c-brand-1);
  padding: 2rem;
}

@media (max-width: 640px) {
  .countdown-container {
    padding: 1.5rem;
  }

  .countdown-title {
    font-size: 1.5rem;
  }

  .countdown {
    gap: 1rem;
  }

  .countdown-item {
    min-width: 70px;
  }

  .countdown-value {
    font-size: 2rem;
  }

  .countdown-label {
    font-size: 0.75rem;
  }
}
</style>
