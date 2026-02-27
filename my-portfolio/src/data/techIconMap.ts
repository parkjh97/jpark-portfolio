/**
 * tech 이름(소문자) → Simple Icons CDN slug 매핑
 * slug 없으면 텍스트 pill로 fallback
 *
 * CDN URL (라이트 배경용 - 기본 브랜드 컬러):
 *   https://cdn.simpleicons.org/{slug}
 */

export interface TechIconEntry {
  slug: string;
}

const map: Record<string, TechIconEntry> = {
  // Languages
  typescript:      { slug: "typescript" },
  javascript:      { slug: "javascript" },
  java:            { slug: "openjdk" },
  "java 11":       { slug: "openjdk" },
  "java11":        { slug: "openjdk" },

  // Frontend frameworks
  react:           { slug: "react" },
  "react.js":      { slug: "react" },
  "next.js":       { slug: "nextdotjs" },
  vite:            { slug: "vite" },

  // Styling
  "tailwind css":  { slug: "tailwindcss" },
  "tailwind":      { slug: "tailwindcss" },
  scss:            { slug: "sass" },
  sass:            { slug: "sass" },
  css:             { slug: "css3" },

  // State / Libs
  zustand:         { slug: "zustand" },
  i18next:         { slug: "i18next" },
  "next-auth":     { slug: "nextauth" },
  "nextauth.js":   { slug: "nextauth" },
  "nextauth":      { slug: "nextauth" },

  // Databases
  postgresql:      { slug: "postgresql" },
  mysql:           { slug: "mysql" },
  mongodb:         { slug: "mongodb" },

  // Backend
  spring:          { slug: "spring" },
  "spring boot":   { slug: "springboot" },
  "spring framework": { slug: "spring" },

  // Infra / DevOps
  docker:          { slug: "docker" },
  jenkins:         { slug: "jenkins" },
  nginx:           { slug: "nginx" },
  apache:          { slug: "apache" },
  git:             { slug: "git" },
  notion:          { slug: "notion" },

  // Data Viz
  "apache echarts":{ slug: "apacheecharts" },
  "d3.js":         { slug: "d3dotjs" },
};

export function getTechIcon(name: string): TechIconEntry | null {
  return map[name.toLowerCase()] ?? null;
}
