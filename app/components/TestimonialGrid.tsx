import { contact, type Language } from "../site-data";
import { getTestimonials } from "../authority-data";

type TestimonialGridProps = {
  ids: string[];
  language: Language;
};

export function TestimonialGrid({ ids, language }: TestimonialGridProps) {
  const items = getTestimonials(ids);
  const isGerman = language === "de";
  const sourceUrl = `${contact.linkedin}/details/recommendations/`;

  return (
    <div className="testimonial-grid">
      {items.map((item) => (
        <figure className="testimonial-card" key={item.id}>
          <blockquote>“{item.quote[language]}”</blockquote>
          <figcaption>
            <strong>{item.author}</strong>
            <span>{item.role}</span>
            <a href={sourceUrl} target="_blank" rel="noreferrer">
              {isGerman
                ? "Öffentliche LinkedIn-Empfehlung"
                : "Public LinkedIn recommendation"}{" "}
              ↗
            </a>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
