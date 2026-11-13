import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-white border-bottom"
        data-bs-theme="light"
      >
        <div className="container">
          <Link href="/" className="navbar-brand py-2 m-0">
            <img
              src="/images/4-tomorror-logo.png"
              alt="4tomorrow"
              className="brand-logo"
            />
          </Link>
          <div className="collapse navbar-collapse" id="primaryNav">
            <ul className="navbar-nav ms-lg-auto align-items-lg-center gap-lg-1 mb-2 mb-lg-0"></ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
