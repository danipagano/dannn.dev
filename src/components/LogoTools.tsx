import { useEffect, useRef, useState } from "react";

type Placement = "top-left" | "sidebar";

function getTheme(): "light" | "dark" {
  return document.documentElement.classList.contains("light") ? "light" : "dark";
}
function setTheme(t: "light" | "dark") {
  if (t === "light") document.documentElement.classList.add("light");
  else document.documentElement.classList.remove("light");
  localStorage.setItem("theme", t);
}

export default function LogoTools({ placement = "top-left" }: { placement?: Placement }) {
  const [open, setOpen] = useState(false);
  const [theme, setThemeState] = useState<"light" | "dark">(getTheme());
  const rootRef = useRef<HTMLDivElement>(null);

  // init from localStorage once
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") setTheme(saved);
    setThemeState(getTheme());
  }, []);

  // click-outside to close
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (!open) return;
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  const apply = (t: "light" | "dark") => {
    setTheme(t);
    setThemeState(t);
  };

  return (
    <div ref={rootRef} className={`tool-root ${placement}`}>
      <button
        className="tool-trigger"
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => setOpen(v => !v)}
        title="Site tools"
      >
        {/* small spiral favicon */}
        <img src="/public/images/black_spiral.gif" alt="black spiral" />
      </button>

      {open && (
        <div className="tool-popover" role="dialog" aria-label="Site tools">
          <div className="tool-group">
            <div className="tool-title">Theme</div>

            <label className="radio">
              <input
                type="radio"
                name="theme"
                checked={theme === "dark"}
                onChange={() => apply("dark")}
              />
              <span>dark</span>
            </label>

            <label className="radio">
              <input
                type="radio"
                name="theme"
                checked={theme === "light"}
                onChange={() => apply("light")}
              />
              <span>light</span>
            </label>
          </div>
        </div>
      )}
    </div>
  );
}
