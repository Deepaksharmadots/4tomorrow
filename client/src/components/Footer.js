export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer footer py-4 bg-white border-top mt-auto">
      <div className="container d-flex flex-column flex-sm-row align-items-center justify-content-sm-between gap-2 gap-sm-3 text-center text-sm-start">
        <p className="mb-0 small text-secondary">
          &copy; {year} 4tomorrow. All rights reserved.
        </p>
        <ul className="nav justify-content-center flex-wrap gap-3">
          <li className="nav-item">
            <a className="nav-link p-0 small" href="#">
              Terms of Service
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link p-0 small" href="#">
              Privacy Policy
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
