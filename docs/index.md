---
layout: home

hero:
  name: ForgiaCraft X
  text: Modpack Minecraft
  tagline: Guess who's back
  image:
    src: /images/javaw_76NNHws31D.png
    alt: ForgiaCraft X
  actions:
    - theme: brand
      text: Guida Generale
      link: /guide
    - theme: alt
      text: Guida Keybinds
      link: /keybinds

features:
  - icon: 🎮
    title: Guida Generale
    details: Requisiti, installazione, aggiornamenti e consigli per giocare a ForgiaCraft X
    link: /guide
  - icon: ⌨️
    title: Keybinds
    details: Tutti i comandi e tasti delle mod organizzati per frequenza d'uso
    link: /keybinds
  - icon: 🗺️
    title: Ambientazione
    details: Esplora la grande isola e coopera con gli altri giocatori
---

<script setup>
import Countdown from './.vitepress/components/Countdown.vue'
</script>

<Countdown
  targetDate="2025-10-10T21:30:00+02:00"
  title="🎮 Apertura Server"
  days="giorni"
  hours="ore"
  minutes="minuti"
  seconds="secondi"
  expired="Il server è aperto! Buon divertimento!"
/>
