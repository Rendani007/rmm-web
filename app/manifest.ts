import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "RMM — Precision At Scale",
    short_name: "RMM",
    description:
      "Industrial ERP platform engineered for precision at scale. Multi-schema vault architecture, modular core, optimized for African operations.",
    start_url: "/",
    display: "standalone",
    background_color: "#0B0E14",
    theme_color: "#00F2FF",
    orientation: "portrait-primary",
    categories: ["business", "productivity"],
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
