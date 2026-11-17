import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
export default defineConfig({
  plugins: [react()],
  base: "/",
  // pre-bundle every gsap entry together so the plugins share one gsap instance
  optimizeDeps: { include: ["gsap", "gsap/ScrollTrigger", "gsap/ScrollToPlugin", "gsap/MorphSVGPlugin"] },
})
