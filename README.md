# Sena Gemicioğlu · Portfolyo / Portfolio

Kişisel portföy sitemin kaynak kodu. Canlı: **https://senagemici.github.io**

Source code of my personal portfolio site, live at **https://senagemici.github.io**.

## Teknolojiler / Stack

- React 18 + TypeScript, Vite
- GSAP (ScrollTrigger, ScrollToPlugin, MorphSVGPlugin) ile kaydırma animasyonları
- Türkçe / İngilizce içerik (`?lang=tr` veya `?lang=en`)

## Yapı / Structure

| Dosya | İçerik |
|---|---|
| `src/content.ts` | Tüm metinler (TR/EN), projeler ve proje verileri |
| `src/Marginalia.tsx` | Sayfa düzeni ve animasyonlar (uyarlanmış şablon) |
| `src/App.tsx` | Dil seçimi |
| `public/assets/` | Fotoğraf ve proje ekran görüntüleri |

Telefon ekranlarındaki sayılar projelerin kendi çıktılarından alınmıştır (ör. PipelineIQ kanal analizi ve geri test sonuçları).

## Çalıştırma / Run

```bash
npm install
npm run dev      # geliştirme sunucusu
npm run build    # dist/ klasörüne derler
```

Yayınlama: `dist/` içeriği [senagemici.github.io](https://github.com/SenaGemici/senagemici.github.io) deposuna kopyalanır.

## Lisans ve teşekkür / Credits

Tasarım, Kedhareswer Naidu'nun MIT lisanslı **Marginalia Portfolio Template** şablonuna dayanır
([kedhar.pages.dev](https://kedhar.pages.dev)). Şablon; Türkçe/İngilizce etiketler, veri ekranları
(SQL, pano, grafik, sohbet) ve portre yerine monogram desteğiyle uyarlanmıştır. Ayrıntılar: `LICENSE-TEMPLATE.md`.

Kişisel içerik (metinler, fotoğraf, proje görselleri) bana aittir.
