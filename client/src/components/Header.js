"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const MOBILE_MENU_QUERY = "(max-width: 991.98px)";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(MOBILE_MENU_QUERY);

    function sync() {
      const mobile = media.matches;
      setIsMobile(mobile);
      if (!mobile) setOpen(false);
    }

    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!open) return undefined;

    function onPointerDown(event) {
      if (!event.target.closest(".site-header")) setOpen(false);
    }

    function onKeyDown(event) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  function closeMenu() {
    setOpen(false);
  }

  const menuHidden = isMobile && !open;

  return (
    <header className="site-header">
      <nav
        className="navbar navbar-expand-lg navbar-light bg-white border-bottom"
        data-bs-theme="light"
      >
        <div className="container">
          <div className="site-header-bar">
            <Link href="/" className="navbar-brand py-2 m-0" onClick={closeMenu}>
              <img
                src="/images/4-tomorror-logo.png"
                alt="4tomorrow"
                className="brand-logo"
              />
            </Link>
            <button
              type="button"
              className={`navbar-toggler ms-auto${open ? " is-open" : ""}`}
              aria-controls="primaryNav"
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((current) => !current)}
            >
              <span className="menu-icon" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
            </button>
          </div>
          <div id="primaryNav" className={`site-nav${open ? " is-open" : ""}`}>
            <div
              className="site-nav-panel"
              {...(menuHidden ? { inert: "" } : {})}
            >
              <Link
                href="/login"
                className="nav-login mt-3 mb-2 mt-lg-0 mb-lg-0"
                tabIndex={menuHidden ? -1 : undefined}
                onClick={closeMenu}
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
