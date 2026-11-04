import Image from "next/image";

const links = [
  {
    href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
    title: "Docs",
    text: "Find in-depth information about Next.js features and API.",
  },
  {
    href: "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
    title: "Learn",
    text: "Learn about Next.js in an interactive course with quizzes.",
  },
  {
    href: "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
    title: "Templates",
    text: "Explore starter templates for Next.js.",
  },
  {
    href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
    title: "Deploy",
    text: "Instantly deploy your Next.js site to a shareable URL with Vercel.",
  },
];

export default function Home() {
  return (
    <main className="home-shell d-flex flex-column">
      <header className="border-bottom bg-white">
        <div className="container py-3 d-flex flex-column flex-lg-row align-items-lg-center justify-content-lg-between gap-3">
          <p className="mb-0 small">
            Get started by editing <code>src/app/page.js</code>
          </p>
          <a
            className="d-inline-flex align-items-center gap-2 text-decoration-none text-body"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </header>

      <section className="container flex-grow-1 d-flex align-items-center justify-content-center py-5">
        <Image
          className="home-mark"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </section>

      <section className="container pb-5">
        <div className="row g-3">
          {links.map((link) => (
            <div className="col-12 col-md-6 col-xl-3" key={link.title}>
              <a
                href={link.href}
                className="starter-card card h-100 text-decoration-none"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="card-body">
                  <h2 className="h5 card-title">{link.title}</h2>
                  <p className="card-text text-secondary mb-0">{link.text}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
