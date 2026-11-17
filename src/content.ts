import type { MarginaliaPortfolioTemplateProps, MgnLabels, MgnProject } from "./Marginalia"
import { EN_LABELS } from "./Marginalia"

export type Lang = "tr" | "en"

const EMAIL = "senagemicioglu8181@gmail.com"
const LINKEDIN = "https://www.linkedin.com/in/senagemicioglu/"
const GITHUB = "https://github.com/SenaGemici"
const KAGGLE = "https://kaggle.com/olisadep"

const TR_LABELS: MgnLabels = {
  sections: { cover: "kapak", hello: "merhaba", education: "eğitim", skills: "yetkinlikler", projects: "projeler", cases: "vaka çalışmaları", facts: "notlar", thanks: "teşekkürler" },
  education: "Eğitim & Deneyim",
  languages: "Diller",
  skills: "Yetkinlikler",
  projects: "Projeler.",
  facts: "Küçük Notlar",
  scanMe: "okut beni",
  openCv: "LinkedIn profilimi aç",
  moreTools: "araç kutumda daha fazlası var",
  challenge: "asıl soru:",
  getInTouch: "Bana ulaşın:",
  copied: "kopyalandı!",
  copy: "Kopyala:",
  backToTop: "başa dön",
  scroll: "kaydır",
  close: "kapat ×",
  contents: "İçindekiler",
  openCase: "Vaka çalışmasını aç:",
  phoneCta: "İncele",
  run: "Çalıştır",
  drawAgain: "yeniden çiz",
}

const EN: MgnLabels = { ...EN_LABELS, openCv: "Open my LinkedIn", phoneCta: "Explore", challenge: "the question:" }

// Real numbers from data/analysis in the PipelineIQ repo
const BACKTEST_ACTUAL = [290183, 631069, 716497, 888735, 702024, 586202, 673419, 650195, 608380, 673004]
const BACKTEST_MODEL = [589613, 699296, 804427, 918604, 767847, 804806, 753580, 810782, 787635, 778589]

function projects(l: Lang): MgnProject[] {
  const tr = l === "tr"
  return [
    {
      name: "PipelineIQ",
      tagline: tr ? "CRM verisinden satış kararlarına." : "From CRM data to sales decisions.",
      kind: tr ? "Satış analitiği · Vaka çalışması" : "Sales analytics · Case study",
      year: "2026",
      summary: tr
        ? "Bir satış ekibinin CRM verisini uçtan uca inceledim: Python ile eksik, tekrarlı ve tutarsız *kayıtları temizledim*, DuckDB'de 9 SQL analiziyle huniyi, kanalları ve temsilcileri karşılaştırdım. Kazanma olasılığı için lojistik regresyon modeli kurdum, gelir tahminini geçmiş aylar üzerinde test ettim ve sonuçları 3 sayfalık bir [Power BI raporuna] dönüştürdüm."
        : "An end-to-end look at a sales team's CRM data: I cleaned missing, duplicate and *inconsistent records* in Python, compared the funnel, channels and reps with 9 SQL analyses in DuckDB, built a logistic regression win-probability model, backtested the revenue forecast and turned it all into a 3-page [Power BI report].",
      challenge: tr
        ? "Hangi fırsatın kazanılacağını, basit bir referans yöntemden daha iyi tahmin edebilir miyiz?"
        : "Can we predict which deals will be won better than a simple baseline?",
      note: tr ? "referans → model: AUC 0.668 → 0.747" : "baseline vs model: AUC 0.668 → 0.747",
      stats: [
        { value: 0.747, decimals: 3, label: tr ? "AUC (referans 0.668)" : "AUC (baseline 0.668)" },
        tr ? { value: 25.8, decimals: 1, prefix: "%", label: "tahmin hatası, MAPE (referans %68.2)" } : { value: 25.8, decimals: 1, suffix: "%", label: "forecast error, MAPE (baseline 68.2%)" },
        { value: 9, label: tr ? "SQL analizi, DuckDB" : "SQL analyses in DuckDB" },
      ],
      screens: ["sql", "shot", "chart"],
      screenTitle: tr ? "Kanal performansı" : "Channel performance",
      code: tr
        ? ["-- kanal bazında kazanma oranı", "SELECT kaynak,", "  COUNT(*) AS firsat,", "  AVG(kazanildi) AS oran", "FROM firsatlar", "GROUP BY kaynak", "ORDER BY oran DESC;"]
        : ["-- win rate by lead source", "SELECT source,", "  COUNT(*) AS deals,", "  AVG(is_won) AS win_rate", "FROM deals", "GROUP BY source", "ORDER BY win_rate DESC;"],
      table: tr
        ? { head: ["kaynak", "fırsat", "oran"], rows: [["Referans", "868", "%36.1"], ["İş Ortağı", "804", "%28.6"], ["Web", "1.724", "%22.3"], ["Outbound", "1.522", "%14.7"]] }
        : { head: ["source", "deals", "win rate"], rows: [["Referral", "868", "36.1%"], ["Partner", "804", "28.6%"], ["Web", "1,724", "22.3%"], ["Outbound", "1,522", "14.7%"]] },
      shot: "/assets/pipelineiq-powerbi.webp",
      shotTitle: tr ? "Power BI raporu" : "Power BI report",
      kpis: tr
        ? [{ label: "AUC", value: "0.747" }, { label: "MAPE", value: "%25.8" }, { label: "Brier skoru", value: "0.175" }]
        : [{ label: "AUC", value: "0.747" }, { label: "MAPE", value: "25.8%" }, { label: "Brier score", value: "0.175" }],
      chart: {
        title: tr ? "Gelir tahmini geri testi" : "Revenue forecast backtest",
        actual: BACKTEST_ACTUAL,
        forecast: BACKTEST_MODEL,
        legend: tr ? ["Gerçekleşen", "Model"] : ["Actual", "Model"],
      },
      accent: "#2f5bff",
      tag: tr ? "vaka çalışması" : "case study",
      links: [
        { label: tr ? "canlı uygulama" : "live app", href: "https://pipelineiq-sales-analytics.vercel.app" },
        { label: "GitHub", href: GITHUB + "/pipelineiq-sales-analytics" },
      ],
    },
    {
      name: "ReviewLens",
      tagline: tr ? "Müşteri yorumlarından aksiyon planına." : "From customer reviews to an action plan.",
      kind: tr ? "Yapay zekâ destekli web uygulaması" : "AI-powered web app",
      year: "2026",
      summary: tr
        ? "Küçük e-ticaret işletmeleri için bir karar destek platformu. İşletme yorumlarını CSV olarak yüklüyor; uygulama puanları analiz ediyor, Gemini ile tekrar eden [sorunları kümeliyor] ve öncelikli bir gelişim planı öneriyor. Yorumlardaki kişisel veriler analizden önce *otomatik olarak maskeleniyor*, şüpheli kayıtlar ayrı bir inceleme alanına düşüyor."
        : "A decision-support platform for small e-commerce businesses. A shop uploads its reviews as a CSV; the app analyses ratings, uses Gemini to [cluster recurring problems] and suggests a prioritised growth plan. Personal data in reviews is *masked automatically* before analysis, and suspicious records go to a separate review queue.",
      challenge: tr
        ? "Yorumlardaki sorunları bulurken kişisel verileri yapay zekâya hiç göndermemek."
        : "Find the problems in reviews without ever sending personal data to the AI.",
      note: tr ? "Firebase ile giriş, kurallar ve yönetici paneli" : "Firebase auth, rules and an admin panel",
      screens: ["reviews", "shot", "table"],
      screenTitle: tr ? "Yorum analizi" : "Review analysis",
      reviews: tr
        ? [
            { name: "A*** Y***", stars: 2, text: "Kargo çok geç geldi, aradığımda [telefon maskelendi] ulaşamadım.", tag: "Kargo gecikmesi" },
            { name: "M*** K***", stars: 5, text: "Ürün kaliteli, paketleme özenliydi.", tag: "Ürün kalitesi", good: true },
            { name: "S*** D***", stars: 3, text: "Beden tablosu yanlış, iade süreci uzun sürdü.", tag: "İade süreci" },
          ]
        : [
            { name: "A*** Y***", stars: 2, text: "Delivery was very late, and when I called [phone masked] nobody answered.", tag: "Late delivery" },
            { name: "M*** K***", stars: 5, text: "Good quality, carefully packed.", tag: "Product quality", good: true },
            { name: "S*** D***", stars: 3, text: "The size chart is wrong and the return took ages.", tag: "Returns" },
          ],
      shot: "/assets/reviewlens.webp",
      shotTitle: tr ? "Canlı uygulama" : "Live app",
      kpis: tr
        ? [{ label: "Kişisel veri", value: "maskeli" }, { label: "Analiz", value: "Gemini" }]
        : [{ label: "Personal data", value: "masked" }, { label: "Analysis", value: "Gemini" }],
      table: tr
        ? { head: ["sorun kümesi", "öncelik"], rows: [["Kargo gecikmesi", "yüksek"], ["İade süreci", "orta"], ["Beden uyumu", "orta"], ["Paketleme", "düşük"]] }
        : { head: ["problem cluster", "priority"], rows: [["Late delivery", "high"], ["Returns", "medium"], ["Sizing", "medium"], ["Packaging", "low"]] },
      accent: "#7c5cff",
      tag: tr ? "canlıda" : "live",
      links: [{ label: tr ? "canlı uygulama" : "live app", href: "https://reviewlens-psi.vercel.app" }],
      linksNote: tr ? "Kaynak kod özel." : "Source code is private.",
    },
    {
      name: tr ? "Müşteri Kaybı" : "Churn",
      tagline: tr ? "Kaybedilecek müşteriyi önceden görmek." : "Spot the customers you are about to lose.",
      kind: tr ? "RFM · Lojistik regresyon · Streamlit" : "RFM · Logistic regression · Streamlit",
      year: "2026",
      summary: tr
        ? "Bir çevrim içi perakendecinin yaklaşık 540 bin işlemini temizledim ve müşteri kaybını keyfi bir eşikle değil, verideki kırılma noktasıyla tanımladım: *90 gündür* alışveriş yapmayan müşteri. RFM ile 8 segment oluşturdum ve sonuçları canlı bir Streamlit uygulamasıyla sundum. En önemli bulgu: sipariş sıklığı, kaybı harcamadan [yaklaşık 45 kat] daha güçlü etkiliyor."
        : "I cleaned about 540K transactions from an online retailer and defined churn from the data itself rather than an arbitrary cutoff: *no purchase in 90 days*. I built 8 RFM segments and served the results in a live Streamlit app. The key finding: order frequency drives churn [about 45 times] more than spend.",
      challenge: tr
        ? "Hangi müşteriye, kaybetmeden önce ulaşmalıyız?"
        : "Which customers should we reach before we lose them?",
      stats: tr
        ? [
            { value: 33.3, decimals: 1, prefix: "%", label: "müşteri kaybı (4.339 müşteriden 1.445'i)" },
            { value: 71.6, decimals: 1, prefix: "%", label: "model doğruluğu" },
            { value: 244, label: "öncelikli geri kazanım müşterisi" },
          ]
        : [
            { value: 33.3, decimals: 1, suffix: "%", label: "churned (1,445 of 4,339 customers)" },
            { value: 71.6, decimals: 1, suffix: "%", label: "model accuracy" },
            { value: 244, label: "high-priority win-back customers" },
          ],
      screens: ["dash", "cover", "table"],
      screenTitle: tr ? "RFM segmentleri" : "RFM segments",
      kpis: tr
        ? [{ label: "Müşteri", value: "4.339" }, { label: "Kayıp oranı", value: "%33.3" }, { label: "Doğruluk", value: "%71.6" }, { label: "Risk altında", value: "244" }]
        : [{ label: "Customers", value: "4,339" }, { label: "Churn rate", value: "33.3%" }, { label: "Accuracy", value: "71.6%" }, { label: "At risk", value: "244" }],
      bars: [962, 507, 491, 320, 166, 78].map((v) => v / 962),
      barLabels: tr ? ["Şampiyon", "Potansiyel", "Sadık", "Yeni", "Risk", "Kaybetme"] : ["Champions", "Potential", "Loyal", "New", "At risk", "Can't lose"],
      table: tr
        ? { head: ["", "aktif", "kayıp"], rows: [["Sipariş", "5.48", "1.86"], ["Harcama", "$2.722", "$715"], ["Son alım (gün)", "31", "213"]] }
        : { head: ["", "active", "churned"], rows: [["Orders", "5.48", "1.86"], ["Spend", "$2,722", "$715"], ["Recency (days)", "31", "213"]] },
      chart: { title: "", actual: [0.9, 0.84, 0.86, 0.74, 0.7, 0.62, 0.58, 0.5, 0.46, 0.4] },
      accent: "#e0613a",
      tag: tr ? "makine öğrenmesi" : "machine learning",
      links: [{ label: "GitHub", href: GITHUB + "/ecommerce-churn-analysis" }],
    },
    {
      name: tr ? "Satış Tahmini" : "Forecasting",
      tagline: tr ? "Stok bitmeden talebi görmek." : "See demand before stock runs out.",
      kind: tr ? "Prophet · ABC analizi" : "Prophet · ABC analysis",
      year: "2025",
      summary: tr
        ? "Birden fazla Amazon satış raporunu birleştirip *128 binden fazla satırı* temizledim. Prophet ile trend, haftalık ve yıllık mevsimselliği ayırıp 30 günlük satış tahmini ürettim. Ürünleri ABC analiziyle [gelire katkısına göre] sınıflandırarak stok yatırımının nereye yapılacağını önceliklendirdim."
        : "I merged several Amazon sales reports and cleaned *more than 128K rows*. With Prophet I separated trend, weekly and yearly seasonality and produced a 30-day sales forecast. ABC analysis ranked products [by share of revenue] to prioritise where stock investment should go.",
      challenge: tr
        ? "Talep belirsizken hangi ürüne stok ayırmalıyız?"
        : "When demand is uncertain, which products deserve the stock?",
      stats: tr
        ? [
            { value: 128, suffix: " bin+", label: "satır temizlendi" },
            { value: 30, label: "günlük Prophet tahmini" },
          ]
        : [
            { value: 128, suffix: "K+", label: "rows cleaned" },
            { value: 30, label: "day Prophet forecast" },
          ],
      screens: ["table", "chart", "cover"],
      screenTitle: tr ? "ABC analizi" : "ABC analysis",
      table: tr
        ? { head: ["sınıf", "öncelik"], rows: [["A", "kritik"], ["B", "önemli"], ["C", "düşük"]] }
        : { head: ["class", "priority"], rows: [["A", "critical"], ["B", "important"], ["C", "low"]] },
      chart: {
        title: tr ? "Prophet satış tahmini" : "Prophet sales forecast",
        actual: [0.92, 0.8, 0.88, 0.74, 0.82, 0.66, 0.72, 0.6, 0.64, 0.52],
        forecast: [0.86, 0.84, 0.8, 0.77, 0.73, 0.7, 0.66, 0.62, 0.58, 0.54],
        legend: tr ? ["Gerçek", "Tahmin"] : ["Actual", "Forecast"],
      },
      accent: "#d98a1c",
      tag: tr ? "zaman serisi" : "time series",
      links: [{ label: "GitHub", href: GITHUB + "/Amazon-sales-forecasting-inventory-optimization" }],
    },
    {
      name: tr ? "Stok Asistanı" : "Stock Bot",
      tagline: tr ? "Stoğu tek bir mesajla güncelle." : "Update stock with a single message.",
      kind: tr ? "n8n · Gemini · Google Sheets" : "n8n · Gemini · Google Sheets",
      year: "2026",
      summary: tr
        ? "Telegram'dan yazılan “2 klavye sattım” gibi doğal Türkçe mesajları anlayıp stoğu Google Sheets üzerinde güncelleyen bir n8n prototipi. Gemini yalnızca mesajı yorumluyor; stok hesabı ve doğrulamalar [kurallı JavaScript] koduyla yapılıyor, böylece yapay zekâ bir miktar uyduramıyor. Asistan sohbetteki *son ürünü hatırlıyor* ve her değişikliği hareket kaydı olarak saklıyor."
        : "An n8n prototype that understands plain Turkish messages such as “I sold 2 keyboards” on Telegram and updates stock in Google Sheets. Gemini only interprets the message; stock maths and validation run in [rule-based JavaScript], so the AI can't invent a number. The assistant *remembers the last product* in the chat and logs every change as a movement.",
      challenge: tr
        ? "Yapay zekâ mesajı anlasın ama stoğu asla o hesaplamasın."
        : "Let the AI read the message, but never let it do the stock maths.",
      note: tr ? "bir prototip: gerçek müşteride kullanılmadı" : "a prototype, not used with real customers",
      screens: ["table", "chat", "cover"],
      screenTitle: tr ? "Stok Asistanı" : "Stock Bot",
      chat: tr
        ? [
            { me: true, text: "Klavye stoğu ne kadar?" },
            { me: false, text: "Klavye: 10 adet." },
            { me: true, text: "2 klavye sattım" },
            { me: false, text: "Satış kaydedildi. Klavye 10 → 8" },
            { me: true, text: "Şu an kaç kaldı?" },
            { me: false, text: "Klavye: 8 adet." },
          ]
        : [
            { me: true, text: "How many keyboards are in stock?" },
            { me: false, text: "Keyboard: 10 units." },
            { me: true, text: "I sold 2 keyboards" },
            { me: false, text: "Sale saved. Keyboard 10 → 8" },
            { me: true, text: "How many are left now?" },
            { me: false, text: "Keyboard: 8 units." },
          ],
      table: tr
        ? { head: ["sku", "ürün", "stok"], rows: [["KLV-001", "Klavye", "8"], ["MOU-001", "Mouse", "5"]] }
        : { head: ["sku", "product", "stock"], rows: [["KLV-001", "Keyboard", "8"], ["MOU-001", "Mouse", "5"]] },
      accent: "#229ED9",
      tag: tr ? "otomasyon" : "automation",
      links: [{ label: "GitHub", href: GITHUB + "/mini-erp-telegram-stok-asistani" }],
    },
  ]
}

export function content(l: Lang): MarginaliaPortfolioTemplateProps {
  const tr = l === "tr"
  return {
    labels: tr ? TR_LABELS : EN,
    locale: l,
    name: "Sena Gemicioğlu",
    role: tr ? "Junior Veri Analisti" : "Junior Data Analyst",
    year: "2026",
    location: "Türkiye",
    title: tr ? "Portfolyo" : "Portfolio",
    docLabel: tr ? "Özgeçmiş" : "Curriculum Vitae",
    portrait: "/assets/sena.webp",
    traits: tr
      ? ["analitik", "detaycı", "sorgulayan", "problem çözücü", "iş odaklı", "hızlı öğrenen"]
      : ["analytical", "detail-oriented", "inquisitive", "problem solver", "business-minded", "fast learner"],
    greeting: tr ? "Merhaba." : "Hello.",
    bio: tr
      ? "Ben Sena. İstatistik ve Bilgisayar Bilimleri bölümünden [bölüm ikincisi olarak] mezun oldum. Dağınık veriyi temizleyip *SQL ve Python* ile analiz ediyor, sonuçları Power BI panolarına ve uygulanabilir iş önerilerine dönüştürüyorum. Serbest çalıştığım dönemde e-ticaret işletmeleri için müşteri segmentasyonu, sepet analizi ve kârlılık analizleri yaptım. Claude Code ve Codex gibi yapay zekâ araçlarını analiz ve geliştirme sürecimin doğal bir parçası olarak kullanıyorum. Şu an [junior veri analisti] pozisyonları için görüşmelere açığım."
      : "I'm Sena. I graduated in Statistics and Computer Science, [ranked 2nd in my department]. I clean messy data, analyse it with *SQL and Python*, and turn the results into Power BI dashboards and actionable business recommendations. As a freelancer I delivered customer segmentation, basket analysis and profitability analysis for e-commerce businesses. AI tools such as Claude Code and Codex are a natural part of how I analyse and build. I'm open to [junior data analyst] roles.",
    educationIntro: tr
      ? "Temmuz 2026'da mezun oldum. Okulun yanında serbest projeler, bir araştırma projesi ve eğitim programlarıyla gerçek veri üzerinde çalıştım."
      : "I graduated in July 2026. Alongside my degree I worked on real data through freelance projects, a research project and training programmes.",
    education: tr
      ? [
          { title: "Serbest Veri Bilimci", place: "E-ticaret analitiği: RFM, FP-Growth sepet analizi, ürün kârlılığı", period: "Mar — Haz 2026", circled: true },
          { title: "İstatistik ve Bilgisayar Bilimleri, Lisans", place: "Bilecik Şeyh Edebali Üniversitesi · bölüm ikincisi · GANO 3.40", period: "2022 — 26", circled: true },
          { title: "Veri Bilimi Eğitim Programı · Mezun", place: "Yapay Zeka ve Teknoloji Akademisi", period: "2025 — 26" },
          { title: "TÜBİTAK 2209-A · Proje Yürütücüsü", place: "ARIMA, LSTM ve YSA ile iklim değişikliği için tahmin" },
          { title: "Google Advanced Data Analytics Sertifikası", place: "Google · Coursera", period: "2026" },
          { title: "Uygulamalı Microsoft Power BI", place: "BTK Akademi", period: "2026" },
        ]
      : [
          { title: "Freelance Data Scientist", place: "E-commerce analytics: RFM, FP-Growth basket analysis, product profitability", period: "Mar — Jun 2026", circled: true },
          { title: "BSc, Statistics and Computer Science", place: "Bilecik Şeyh Edebali University · ranked 2nd · GPA 3.40", period: "2022 — 26", circled: true },
          { title: "Data Science Training Programme · Graduate", place: "AI and Technology Academy", period: "2025 — 26" },
          { title: "TÜBİTAK 2209-A · Project Lead", place: "Climate change forecasting with ARIMA, LSTM and ANN" },
          { title: "Google Advanced Data Analytics Certificate", place: "Google · Coursera", period: "2026" },
          { title: "Applied Microsoft Power BI", place: "BTK Academy", period: "2026" },
        ],
    cvUrl: LINKEDIN,
    cvNote: tr ? "LinkedIn profilim, 17 sertifikamın hepsi orada" : "my LinkedIn, with all 17 certificates",
    languages: tr
      ? [
          { name: "Türkçe", level: "ana dil", value: 1 },
          { name: "İngilizce", level: "B1", value: 0.5 },
        ]
      : [
          { name: "Turkish", level: "native", value: 1 },
          { name: "English", level: "B1", value: 0.5 },
        ],
    tools: [
      { name: "SQL", mark: "SQL", bg: "#336791", fg: "#ffffff", note: tr ? "CTE'ler ve pencere fonksiyonlarıyla iş soruları" : "business questions with CTEs and window functions" },
      { name: "Python", mark: "Py", bg: "#3776ab", fg: "#ffd43b", note: tr ? "pandas ile temizlik, scikit-learn ile model" : "pandas for cleaning, scikit-learn for models" },
      { name: "Power BI", mark: "BI", bg: "#f2c811", fg: "#1b1b1b", note: tr ? "yıldız şema, DAX ölçüleri, yönetici raporları" : "star schemas, DAX measures, executive reports" },
      { name: "Excel", mark: "X", bg: "#217346", fg: "#ffffff", note: tr ? "pivot tablolar ve hızlı kontroller" : "pivot tables and quick checks" },
      { name: "R", mark: "R", bg: "#276dc3", fg: "#ffffff", note: tr ? "istatistiksel modeller ve testler" : "statistical models and tests" },
      { name: "Claude Code", mark: "✳", bg: "#d97757", fg: "#ffffff", note: tr ? "analizi ve geliştirmeyi hızlandıran asistanım" : "the assistant that speeds up my analysis and builds" },
      { name: "n8n", mark: "n8n", bg: "#ea4b71", fg: "#ffffff", note: tr ? "LLM'leri iş süreçlerine bağlayan otomasyonlar" : "automations that plug LLMs into business processes" },
    ],
    toolNote: tr ? "bir araca dokun" : "hover a tool",
    skillsIntro: tr
      ? "Her analize bir iş sorusuyla başlarım ve her modeli basit bir referans yönteme karşı test ederim. Sonucu, teknik olmayan birinin de okuyabileceği bir panoya ve birkaç net öneriye dönüştürürüm."
      : "I start every analysis with a business question and test every model against a simple baseline. Then I turn the result into a dashboard a non-technical reader can follow, plus a few clear recommendations.",
    skills: tr
      ? ["Veri temizleme", "SQL (CTE, pencere fonksiyonları)", "Power BI ve DAX", "Keşifsel veri analizi", "Regresyon ve sınıflandırma", "Zaman serisi tahmini", "RFM segmentasyonu", "Sepet analizi (FP-Growth)", "Doğal dil işleme", "LLM entegrasyonu", "Streamlit uygulamaları", "Git, GitHub, Docker"]
      : ["Data cleaning", "SQL (CTEs, window functions)", "Power BI and DAX", "Exploratory data analysis", "Regression and classification", "Time-series forecasting", "RFM segmentation", "Basket analysis (FP-Growth)", "Natural language processing", "LLM integration", "Streamlit apps", "Git, GitHub, Docker"],
    books: [
      { title: "TÜBİTAK 2209-A", color: "#c9473b" },
      { title: "BTK · POWER BI", color: "#f2c811" },
      { title: tr ? "YZ VE TEKNOLOJİ AKADEMİSİ" : "AI & TECH ACADEMY", color: "#2b2b2e" },
      { title: tr ? "GOOGLE VERİ ANALİTİĞİ" : "GOOGLE DATA ANALYTICS", color: "#34a853" },
      { title: "GOOGLE ADV. DATA ANALYTICS", color: "#4285f4" },
    ],
    booksNote: tr ? "17 sertifikamdan birkaçı" : "a few of my 17 certificates",
    projectsNote: tr ? "teknik becerilerimin hepsi burada" : "hard skills? you'll find them all in here",
    projectsMore: { label: tr ? "diğer projelerim GitHub'da" : "more projects on GitHub", href: GITHUB + "?tab=repositories" },
    projects: projects(l),
    factsNote: tr ? "özgeçmişe sığmayanlar" : "the things that never fit on a CV",
    facts: tr
      ? [
          { doodle: "plane", text: "Telegram mesajıyla stok güncelleyen bir bot kurdum" },
          { doodle: "book", text: "144 şiiri metin madenciliğiyle okudum" },
          { doodle: "globe", text: "TÜBİTAK projemde iklim verisiyle tahmin yaptım" },
          { doodle: "pencil", text: "Bölümümden ikinci olarak mezun oldum" },
          { doodle: "plant", text: "17 sertifika, liste hâlâ büyüyor" },
          { doodle: "heart", text: "Kişisel veriyi yapay zekâya göndermeden maskeleyen bir uygulama yaptım" },
        ]
      : [
          { doodle: "plane", text: "I built a bot that updates stock from a Telegram message" },
          { doodle: "book", text: "I read 144 poems with text mining" },
          { doodle: "globe", text: "My TÜBİTAK project forecast climate data" },
          { doodle: "pencil", text: "I graduated 2nd in my department" },
          { doodle: "plant", text: "17 certificates, and the list keeps growing" },
          { doodle: "heart", text: "I built an app that masks personal data before any AI sees it" },
        ],
    thanks: tr ? "Teşekkürler" : "Thank you",
    email: EMAIL,
    links: [
      { label: tr ? "E-posta gönder" : "Send an email", href: "mailto:" + EMAIL },
      { label: "LinkedIn", href: LINKEDIN },
      { label: "GitHub", href: GITHUB },
      { label: "Kaggle", href: KAGGLE },
    ],
    letter: tr
      ? "Buraya kadar okuduğunuz için teşekkür ederim.\n\nVeriyle çalışmayı, karmaşık bir tabloyu herkesin anlayabileceği bir karara dönüştürdüğü için seviyorum. Junior bir analist olarak öğrenmeye açığım ve her projede bir öncekinden daha iyisini yapmaya çalışıyorum.\n\nEkibinizde veriden karar çıkaracak birine ihtiyacınız varsa konuşmaktan memnuniyet duyarım."
      : "Thank you for reading this far.\n\nI love working with data because it turns a messy table into a decision anyone can understand. As a junior analyst I'm eager to learn, and I try to do each project better than the last.\n\nIf your team needs someone to turn data into decisions, I'd be glad to talk.",
    signature: "Sena",
  }
}
