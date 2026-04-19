import { useEffect } from "react";

export default function ContactLayout({ children }) {
  useEffect(() => {
    document.title = "Book a Pipeline Review. Not a Demo-an Architecture Audit.";

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
      "45 minutes. We map your current tools and data sources. We assess which buying signals you track and how fast you act. We blueprint your outbound as unified infrastructure. No slides. No generic demo. One working map of your pipeline system.";

    // Basic meta
    setMetaTag("description", "45 minutes. We map your current tools and data sources. We assess which buying signals you track and how fast you act. We blueprint your outbound as unified infrastructure. No slides. No generic demo. One working map of your pipeline system.");

    // Open Graph
    setPropertyTag("og:title", "Book a Pipeline Review. Not a Demo-an Architecture Audit.");
    setPropertyTag("og:description", "45 minutes. We map your current tools and data sources. We assess which buying signals you track and how fast you act. We blueprint your outbound as unified infrastructure. No slides. No generic demo. One working map of your pipeline system.");
    setPropertyTag("og:image", "/og-book.png");

    // Twitter
    setMetaTag("twitter:card", "summary_large_image");
    setMetaTag("twitter:title", "Book a Pipeline Review. Not a Demo-an Architecture Audit.");
    setMetaTag("twitter:description", "45 minutes. We map your current tools and data sources. We assess which buying signals you track and how fast you act. We blueprint your outbound as unified infrastructure. No slides. No generic demo. One working map of your pipeline system.");
    setMetaTag("twitter:image", "/og-book.png");

  }, []);

  return <>{children}</>;
}