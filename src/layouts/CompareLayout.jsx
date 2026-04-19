import { useEffect } from "react";

export default function CompareLayout({ children }) {
  useEffect(() => {
    // Basic SEO meta tags
    document.title = "What Makes This Infrastructure. Not Another Tool.";

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

    // Description
    setMetaTag(
      "description",
      "PravRaha vs Apollo, ZoomInfo, Outreach, Salesloft, 11x, Artisan, Clay, and lead-gen agencies — compared across data freshness, signal orchestration, execution model, feedback loops, and what you actually buy."
    );

    // Open Graph
    setPropertyTag("og:title", "What Makes This Infrastructure. Not Another Tool.");
    setPropertyTag(
      "og:description",
      "PravRaha vs Apollo, ZoomInfo, Outreach, Salesloft, 11x, Artisan, Clay, and lead-gen agencies — compared across data freshness, signal orchestration, execution model, feedback loops, and what you actually buy."
    );
    setPropertyTag("og:image", "/og-compare.png");

    // Twitter
    setMetaTag("twitter:card", "summary_large_image");
    setMetaTag("twitter:title", "What Makes This Infrastructure. Not Another Tool.");
    setMetaTag(
      "twitter:description",
      "PravRaha vs Apollo, ZoomInfo, Outreach, Salesloft, 11x, Artisan, Clay, and lead-gen agencies — compared across data freshness, signal orchestration, execution model, feedback loops, and what you actually buy."
    );
    setMetaTag("twitter:image", "/og-compare.png");

  }, []);

  return <>{children}</>;
}