"use client";

import { useEffect, useState } from "react";

export type Section = {
  id: string;
  number: string;
  title: string;
  subtitle: string;
};

export const sections: Section[] = [
  {
    id: "intro",
    number: "01",
    title: "Аквариум",
    subtitle: "Зохиолын тухай",
  },
  {
    id: "author",
    number: "02",
    title: "Л. Өлзийтөгс",
    subtitle: "Зохиолч",
  },
  {
    id: "story",
    number: "03",
    title: "Үйл явдал",
    subtitle: "Зохиолын агуулга",
  },
  {
    id: "characters",
    number: "04",
    title: "Дүрүүд",
    subtitle: "Гол дүрүүд",
  },
  {
    id: "themes",
    number: "05",
    title: "Гол санаа",
    subtitle: "Бэлгэдэл ба сэдэв",
  },
  {
    id: "ending",
    number: "06",
    title: "Дүгнэлт",
    subtitle: "Эргэцүүлэл",
  },
];

type HeaderProps = {
  active: string;
  onNavigate: (id: string) => void;
};

function FullscreenButton() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const updateFullscreenState = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };

    document.addEventListener("fullscreenchange", updateFullscreenState);

    return () => {
      document.removeEventListener("fullscreenchange", updateFullscreenState);
    };
  }, []);

  const toggleFullscreen = async () => {
    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
      } else {
        await document.documentElement.requestFullscreen();
      }
    } catch {
      // Full-screen mode can be blocked by browser or device settings.
    }
  };

  return (
    <button
      type="button"
      onClick={toggleFullscreen}
      aria-label={
        isFullscreen ? "Exit presentation mode" : "Enter presentation mode"
      }
      title={
        isFullscreen ? "Exit presentation mode" : "Enter presentation mode"
      }
      className="flex items-center gap-2 rounded-full border border-cyan-200/20 bg-cyan-200/10 px-3 py-2 text-[10px] tracking-[0.16em] text-cyan-100 backdrop-blur-xl transition hover:bg-cyan-200/20"
    >
      <span className="text-base leading-none">{isFullscreen ? "×" : "⛶"}</span>
      <span className="hidden sm:inline">{isFullscreen ? "EXIT" : "FULL"}</span>
    </button>
  );
}

const Header = ({ active, onNavigate }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const goTo = (id: string) => {
    onNavigate(id);
    setMenuOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 isolate w-full">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-28 border-b border-white/10 bg-gradient-to-b from-[#031827]/90 via-[#031827]/70 to-[#031827]/15 shadow-[0_14px_30px_rgba(0,0,0,0.18)] backdrop-blur-2xl"
      />

      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
        <button
          onClick={() => goTo("intro")}
          className="group flex items-center gap-3"
        >
          <div className="grid h-10 w-10 place-items-center rounded-full border border-cyan-300/20 bg-cyan-300/10 backdrop-blur-md transition group-hover:bg-cyan-300/20">
            <span className="text-lg">◌</span>
          </div>

          <div className="text-left">
            <p className="text-sm font-semibold tracking-[0.3em] text-cyan-100">
              АКВАРИУМ
            </p>

            <p className="text-[10px] uppercase tracking-[0.25em] text-white/40">
              Л. Өлзийтөгс
            </p>
          </div>
        </button>

        <nav
          aria-label="Slide navigation"
          className="hidden rounded-full border border-white/10 bg-black/20 px-2 py-2 backdrop-blur-xl md:flex"
        >
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => goTo(section.id)}
              aria-current={active === section.id ? "page" : undefined}
              aria-label={`${section.number}: ${section.title}`}
              className={`rounded-full px-4 py-2 text-xs transition ${
                active === section.id
                  ? "bg-white/10 text-cyan-100"
                  : "text-white/45 hover:text-white"
              }`}
            >
              {section.number}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <FullscreenButton />

          <button
            onClick={() => setMenuOpen((isOpen) => !isOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-slide-navigation"
            className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs backdrop-blur-xl md:hidden"
          >
            {menuOpen ? "CLOSE" : "MENU"}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-slide-navigation"
          aria-label="Slide navigation"
          className="mx-4 mt-1 rounded-3xl border border-white/10 bg-[#061d2d]/95 p-3 shadow-2xl backdrop-blur-2xl md:hidden"
        >
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => goTo(section.id)}
              className={`flex w-full items-center justify-between rounded-2xl px-4 py-4 text-left text-sm transition hover:bg-white/10 hover:text-white ${
                active === section.id
                  ? "bg-white/10 text-cyan-100"
                  : "text-white/70"
              }`}
            >
              <span>{section.title}</span>

              <span className="text-xs text-cyan-300/50">{section.number}</span>
            </button>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
