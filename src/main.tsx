import { createRoot } from "react-dom/client"
import App from "./App"

// No StrictMode: its double effect run tears down and rebuilds every GSAP
// ScrollTrigger on mount, which the template's timelines don't survive.
createRoot(document.getElementById("root")!).render(<App />)
