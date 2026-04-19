import { useEffect } from "react";

export default function ContactLayout({ children }) {
  useEffect(() => {
    document.title = "Book a free Strategy Call.";

    const setMetaTag = (name, content) => {
      let element = document.querySelector(`meta[name="${name}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute("name", name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    const setPropertyTag = (property, content) => {
      let element = document.querySelector(`meta[property="${property}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute("property", property);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    const description =
      "Our autonomous revenue system detects buying intent, researches accounts, discovers decision-makers, and executes personalized outreach that converts interest into qualified meetings.";

    // Basic meta
    setMetaTag("description", description);

    // Open Graph
    setPropertyTag("og:title", "Book a free Strategy Call.");
    setPropertyTag("og:description", description);
    setPropertyTag("og:image", "/conc.jpeg");

    // Twitter
    setMetaTag("twitter:card", "summary_large_image");
    setMetaTag("twitter:title", "Book a free Strategy Call.");
    setMetaTag("twitter:description", description);
    setMetaTag("twitter:image", "/conc.jpeg");

  }, []);

  return <>{children}</>;
}