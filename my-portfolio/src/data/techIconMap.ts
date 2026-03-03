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
  html:            { slug: "html5" },

  // State / Libs
  zustand:         { slug: "redux" },
  i18next:         { slug: "i18next" },
  "next-auth":     { slug: "nextauth" },
  "nextauth.js":   { slug: "nextauth" },
  "nextauth":      { slug: "nextauth" },

  // Databases
  postgresql:      { slug: "postgresql" },
  mysql:           { slug: "mysql" },
  mongodb:         { slug: "mongodb" },
  sqlite3:         { slug: "sqlite" },

  // Backend
  spring:          { slug: "spring" },
  "spring boot":   { slug: "springboot" },
  "spring framework": { slug: "spring" },
  mybatis:         { slug: "apache" },
  django:          { slug: "django" },
  "django rest framework": { slug: "djangorestframework" },
  geoserver:       { slug: "geoserver" },

  // Infra / DevOps
  docker:          { slug: "docker" },
  jenkins:         { slug: "jenkins" },
  nginx:           { slug: "nginx" },
  apache:          { slug: "apache" },
  git:             { slug: "git" },
  notion:          { slug: "notion" },
  npm:             { slug: "npm" },
  netlify:         { slug: "netlify" },
  vercel:          { slug: "vercel" },
  "aws (ec2, rds)": { slug: "amazonaws" },
  "aws (ec2)":     { slug: "amazonaws" },
  "aws (elastic beanstalk)": { slug: "amazonaws" },

  // Data Viz
  "apache echarts":{ slug: "apacheecharts" },
  "d3.js":         { slug: "d3" },
  "deck.gl":       { slug: "mapbox" },
  openlayers:      { slug: "openlayers" },
  webpack:         { slug: "webpack" },
  apexcharts:      { slug: "apexcharts" },

  // Server pages
  jsp:             { slug: "openjdk" },

  // Misc
  jquery:          { slug: "jquery" },
  redux:           { slug: "redux" },
  "redux saga":    { slug: "reduxsaga" },
  "redux thunk":   { slug: "redux" },
  "vanilla js":    { slug: "javascript" },
};

export function getTechIcon(name: string): TechIconEntry | null {
  return map[name.toLowerCase()] ?? null;
}
