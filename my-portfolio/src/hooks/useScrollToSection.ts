import { useCallback } from "react";

export function useScrollToSection(offset = 0) {
  return useCallback(
    (id: string) => {
      const section = document.getElementById(id);
      if (!section) {
        return;
      }
      const top = section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    },
    [offset],
  );
}
