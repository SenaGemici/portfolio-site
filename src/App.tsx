import { useEffect, useMemo } from "react"
import MarginaliaPortfolioTemplate from "./Marginalia"
import { content, type Lang } from "./content"

const TITLES: Record<Lang, string> = {
  tr: "Sena Gemicioğlu · Junior Veri Analisti",
  en: "Sena Gemicioğlu · Junior Data Analyst",
}

function store(fn: () => void) {
  try {
    fn()
  } catch {
    /* storage blocked: the page still works, it just forgets */
  }
}

function initialLang(): Lang {
  const q = new URLSearchParams(location.search).get("lang")
  if (q === "tr" || q === "en") return q
  let saved: string | null = null
  store(() => (saved = localStorage.getItem("lang")))
  if (saved === "tr" || saved === "en") return saved
  return (navigator.language || "tr").toLowerCase().startsWith("tr") ? "tr" : "en"
}

const lang = initialLang()

export default function App() {
  const props = useMemo(() => content(lang), [])

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = TITLES[lang]
    // after a language switch, come back to where the reader was
    let y: string | null = null
    store(() => {
      y = sessionStorage.getItem("scrollY")
      sessionStorage.removeItem("scrollY")
    })
    if (y) requestAnimationFrame(() => window.scrollTo(0, Number(y)))
  }, [])

  const other: Lang = lang === "tr" ? "en" : "tr"
  // Switching reloads the page in the other language: every GSAP timeline is
  // built once for the text on screen, and rebuilding them in place is fragile.
  const switchLang = () => {
    store(() => {
      localStorage.setItem("lang", other)
      sessionStorage.setItem("scrollY", String(Math.round(window.scrollY)))
    })
    const url = new URL(location.href)
    url.searchParams.set("lang", other)
    location.replace(url.toString())
  }

  const toggle = (
    <button className="mgn-lang-btn" onClick={switchLang} aria-label={lang === "tr" ? "Switch to English" : "Türkçeye geç"} lang={other}>
      {other.toUpperCase()}
    </button>
  )

  return <MarginaliaPortfolioTemplate {...props} barExtra={toggle} />
}
