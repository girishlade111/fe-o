import dynamic from "next/dynamic"
import { ItemManagerProvider } from "@/lib/item-manager-context"

// The 3D game scene (three.js / react-three-fiber) is client-only:
// prerendering it on the server crashes the static export.
const GameContainer = dynamic(() => import("@/components/game/game-container"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-screen bg-black flex items-center justify-center text-white">
      Loading world…
    </div>
  ),
})

export default function Home() {
  return (
    <ItemManagerProvider>
      <main className="w-full h-screen overflow-hidden bg-black">
        <GameContainer />
      </main>
    </ItemManagerProvider>
  )
}
