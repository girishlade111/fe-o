# Fe₂O₃ (Fe-O)

Fe₂O₃ is a browser-based 3D voxel survival game — think Minecraft-style block building meets first-person exploration — built with Next.js, React Three Fiber, and Three.js. Wander a procedurally generated world, chop trees, mine stone, craft items, build structures, fight with weapons, and manage your inventory, health, and hunger.

Originally generated with [v0.app](https://v0.app).

## Features

- **3D voxel world** — procedurally generated terrain, trees, and stone nodes (simplex-noise based)
- **First-person gameplay** — walk, jump, aim with crosshair, pointer-lock controls
- **Tools & weapons** — hatchets, guns (AK-style), ammo counter, bullet trails
- **Crafting system** — crafting grid, recipes, placeable items
- **Interactables** — campfires (cook/rest), storage boxes, doors
- **HUD** — health/hunger status bars, inventory grid, toolbar, interaction prompts
- **Sound** — WebAudio-generated sound effects with a sound manager and diagnostics
- **Settings** — in-game settings page (sensitivity, audio, etc.)
- **Title & wake-up screens** — full game-flow UI

## Tech Stack

- **Framework:** Next.js 14 (App Router, static export)
- **3D:** Three.js, @react-three/fiber, @react-three/drei
- **World gen:** simplex-noise
- **Language:** TypeScript + React 18
- **UI:** Tailwind CSS, custom game HUD components
- **Audio:** Web Audio API (procedural sounds)

## Quick Start

Prerequisites: Node.js 18+ and npm.

```bash
# Install dependencies
npm install

# Run the dev server
npm run dev
# → http://localhost:3000

# Production build (static export to ./out)
npm run build
```

> **Controls:** click the canvas to lock the pointer. WASD to move, Space to jump, E to interact, click to use the equipped tool/weapon.

## Project Structure

```
fe-o/
├── app/
│   ├── page.tsx            # Entry → <GameContainer /> in fullscreen canvas
│   ├── layout.tsx          # Root layout
│   └── providers.tsx
├── components/game/
│   ├── game-container.tsx  # Canvas + pointer lock setup
│   ├── game-scene.tsx      # 3D scene composition
│   ├── player/             # Player controller (movement, camera)
│   ├── environment/        # Terrain, trees, stone nodes
│   ├── hud/                # Crosshair, inventory, toolbar, status bars, crafting
│   ├── items/              # Campfire, doors, storage boxes, interactables
│   ├── weapons/            # Weapon models + firing logic
│   ├── audio/              # Procedural sound generation + diagnostics
│   └── ui/                 # Title page, settings, wake-up screen
├── lib/
│   ├── terrain-generator.ts  # Procedural terrain
│   ├── tree-generator.ts / stone-generator.ts
│   ├── *-context.tsx         # Game state: inventory, crafting, player status, ...
│   ├── sound-manager.ts
│   └── hooks/               # use-placeable-item, use-interactable-item
├── docs/
│   └── adding-new-items.md # Guide: adding new placeable/interactable items
├── next.config.mjs         # Static export config (output: 'export')
└── public/                 # Sprites, textures, item icons
```

## Environment Variables

None. The game is fully client-side — no backend, no API keys, no login.

## Deployment Notes

- Configured for **static export** (`output: 'export'`) and deployed to **GitHub Pages** via the `gh-pages` branch.
- GitHub Pages serves from a subpath (`https://girishlade111.github.io/fe-o/`), so `basePath: '/fe-o'` is set in `next.config.mjs`.
  - Deploying to Vercel (root domain)? **Remove the `basePath` line** first.
- Build skips ESLint/TypeScript validation (inherited v0 scaffold defaults) — a cleanup pass would be worthwhile.
- 3D scene renders at full viewport; a device with a real GPU and ~1–2 GB RAM gives the smoothest experience.

---

Built by Girish Lade — https://ladestack.in
