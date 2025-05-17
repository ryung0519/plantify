import { useState, useEffect } from "react";
import Link from "next/link";
import { debounce } from "lodash";
import { cn } from "@/renderer/lib/utils";
import { ModeToggleTab } from "../tab/ModeToggleTab";

// import { Search } from "./search";
// import { ModeToggle } from "@/app/(browse)/_components/toggle-mode";

export default function MainNavbar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [prevScrollPosition, setPrevScrollPosition] = useState(0);

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     setScrollPosition(window.scrollY);
  //     setPrevScrollPosition(scrollPosition);
  //   });
  // }, [scrollPosition]);

  useEffect(() => {
    const handleScroll = debounce(() => {
      setScrollPosition(window.scrollY);
      setPrevScrollPosition(scrollPosition);
    }, 50); // Adjust the debounce delay as needed

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <header
      className={cn(
        "fixed transition-[top] flex justify-between items-center z-50 px-10 top-0 w-full h-14 bg-white/50 backdrop-blur-xl dark:bg-primary-foreground/50",
        scrollPosition === 0
          ? "shadow-none bg-transparent"
          : "transition-shadow shadow-md",
        scrollPosition > prevScrollPosition && "top-[-100px] transition-[top]",
        scrollPosition < prevScrollPosition && "transition-[top]"
      )}
    >
        <div>
          <ModeToggleTab />
        </div>
    </header>
  );
}
