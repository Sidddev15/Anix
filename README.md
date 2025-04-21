# 🎉 AniX – Animation + UX Library

AniX is a modern, lightweight animation library built for developers working with **HTML/CSS/JS**, **React**, and **Angular**. It provides **production-ready UI animations** – from button hover effects to full-page transitions – all in a clean, dev-friendly format.

> 🎯 Goal: To become the go-to animation library for developers who want **polished UI** without bloated dependencies.

---

## ✨ Features

- 🔥 100+ production-ready animations (entry, exit, loaders, buttons & more)
- ⚡ Lightweight and fast (no runtime bloat)
- 🌐 Use with **HTML**, or integrate with **React** & **Angular**
- 🎛️ Customizable: duration, delay, color, easing, size
- 🧩 Modular: Use only what you need

---

## 📦 Installation
`<link rel="stylesheet" href="https://cdn.anix.dev/anix.min.css">`
### 📁 HTML / Vanilla JS
<!-- CDN (coming soon) -->
`<script src="https://cdn.anix.dev/anix.min.js"></script>`

Or download locally:
`npm install anix-core`

## 🛠️ Usage
### 🚀 In HTML

`<div class="ani-fade-in-up">Hello AniX</div>`

You can also trigger animations via JavaScript:

`AniX.animate(document.querySelector('.my-box'), 'fade-in-left');`

## ⚛️ In React (AniX-React)
`npm install anix-react`

`import { AniXFade } from 'anix-react';`

<AniXFade direction="up" delay={200}>
  <h1>Hello from React</h1>
</AniXFade>

Also available:

`useAniX()` hook for manual control

`<AniXBounce>, <AniXZoom>, etc.`

## 🅰️ In Angular (AniX-Angular)

`npm install anix-angular`

`<div aniXFade [aniXDelay]="300">Fade in Angular</div>`

### Use directives like:
- aniXSlide
- aniXBounce
- aniXOnScroll

## 🎁 Animation Categories

### 🎬 Entry Animations
- fade-in, slide-in-up, zoom-in, rotate-in, bounce-in, pop-in, stretch-in, drop-in, flip-in-x

### 🚪 Exit Animations
- fade-out, slide-out-left, zoom-out, flip-out-y, shrink-out, contract-out, drop-out

### 🎨 Button Effects

- Slide reveal (slide-bg-left, slide-text-up)
- Glow & fills (fill-color-left, fill-glow)
- Morph & 3D (morph-pill, 3d-tilt, wobble)
- Icon interactions (icon-bounce, icon-rotate, icon-grow)

### ⚙️ Loader & Spinner Animations

- Dot loaders (bounce-dots, typing-dots, wave-dots)
- Circular spinners (spinner-ring, orbit-loader)
- Bar loaders (progress-bar-slide, pulse-progress)
- Text effects (typewriter-loader, scrambled-text)
- Fancy (gooey-balls, heartbeat-loader, firefly-loader)

### 🧲 Scroll-Based Effects

- On scroll: fade-in-on-scroll, zoom-in-on-scroll
- Scroll motion: scroll-float-up, scroll-blur-in, scroll-tilt
- Text scroll: text-reveal-mask, text-split-word

## 🛒 AniX Product Roadmap

- ✅ AniX Core – HTML/CSS/JS utility classes
- ⚛️ AniX-React – React components & hooks
- 🅰️ AniX-Angular – Angular directives
- 💎 AniX Pro (coming soon) – Premium templates, dashboards, loaders
- 🌐 AniX CDN – Free hosted version (for quick testing)
- 🧪 AniX Playground – Live animation customizer

## 🛠 Contribution Guide

- Want to contribute? Open to PRs for new animations, fixes, and integrations.
- Fork the repo
- Create a new branch: git checkout -b feature-name
- Add your changes with comments
- Submit a PR and let's collaborate 🚀

Contribution guidelines and testing instructions coming soon.

## 📜 License

MIT License. Free to use in personal and commercial projects.

## 💼 Business Philosophy

AniX = Animation + UX.
We aim to simplify animations for frontend devs while keeping things modern, modular, and blazing fast. Whether you're building a landing page, dashboard, or app UI, AniX helps you stand out with style.

Want to collaborate, sponsor, or contribute to AniX Pro? Let’s talk: siddharth.sr.dev@gmail.com

## 🚀 Quick Links

- 🌐 Docs: anix.dev (coming soon)
- 📦 NPM: [npmjs.com/package/anix-core](https://www.npmjs.com/package/@siddsr/anix)
- 🧪 Playground: play.anix.dev (coming soon)
- 🐙 GitHub: [github.com/your-username/anix](https://github.com/Sidddev15/Anix)

Made with ❤️ by [Siddharth Singh Rathore]