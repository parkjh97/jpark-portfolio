import type { PropsWithChildren } from "react";

import { Footer } from "./Footer";
import { Header } from "./Header";

import "./SiteLayout.css";

export function SiteLayout({ children }: PropsWithChildren) {
  return (
    <div className="site-layout">
      <Header />
      <main className="site-main">{children}</main>
      <Footer />
    </div>
  );
}
