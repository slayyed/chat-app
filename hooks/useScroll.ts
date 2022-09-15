import { DependencyList, useEffect } from "react";

export const useScroll = (scrollHandler: (e: Event) => void, deps: any[]) => {
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler, true);
    };
  }, [scrollHandler, ...deps]);
};
