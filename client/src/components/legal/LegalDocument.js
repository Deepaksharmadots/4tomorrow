export default function LegalDocument({ title, sections }) {
  return (
    <article className="legal-page">
      <div className="legal-document">
        <h1>{title}</h1>
        {sections.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        ))}
      </div>
    </article>
  );
}
