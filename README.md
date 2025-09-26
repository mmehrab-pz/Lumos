<!-- ---
title: LumosLite
description: Lightweight, magical scroll animations for the web.
---

# Lumos — Illuminate your UI with scroll effects

Bring magic to your website with **Lumos** — a lightweight library that animates elements beautifully as you scroll.

- Minimal and dependency-free
- Easy to set up: HTML attributes + one JS init
- Customizable: delay, duration, easing, offset, once/repeat
- Works well with frameworks (React / Vue / Svelte) or vanilla HTML

## Quick start

```html
<link rel="stylesheet" href="/dist/lumos.css">
<script src="/dist/lumos.js"></script>

<div data-lumos="fade-up" data-lumos-delay="del-600" data-lumos-timingFunction="ease-in-out" class="lumos">
  Hello, Lumos ✨
</div>

<script>
  const lumos = new Lumos({ once: true, offset: 120 });
  lumos.init();
</script> -->