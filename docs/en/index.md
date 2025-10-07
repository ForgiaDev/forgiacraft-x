---
layout: home

hero:
  name: ForgiaCraft X
  text: Minecraft Modpack
  tagline: Guess who's back
  image:
    src: /images/javaw_76NNHws31D.png
    alt: ForgiaCraft X
  actions:
    - theme: brand
      text: General Guide
      link: /en/guide
    - theme: alt
      text: Keybinds Guide
      link: /en/keybinds

features:
  - icon: 🎮
    title: General Guide
    details: Requirements, installation, updates and tips for playing ForgiaCraft X
    link: /en/guide
  - icon: ⌨️
    title: Keybinds
    details: All mod commands and keys organized by frequency of use
    link: /en/keybinds
  - icon: 🗺️
    title: Setting
    details: Explore the large island and cooperate with other players
---

<script setup>
import Countdown from '../.vitepress/components/Countdown.vue'
</script>

<Countdown
  targetDate="2025-10-10T21:30:00+02:00"
  title="🎮 Server Opening"
  days="days"
  hours="hours"
  minutes="minutes"
  seconds="seconds"
  expired="The server is open! Have fun!"
/>
