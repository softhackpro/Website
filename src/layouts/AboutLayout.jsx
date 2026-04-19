import { useEffect } from "react";

export default function AboutLayout({ children }) {
  useEffect(() => {
    // Basic SEO meta tags
    document.title = "Built by Operators Who Closed $18M ARR the Old Way.";

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
      "Pankaj Kumar closed $18M ARR as the founding sales hire at ACCELQ. Milind Kamboj built distributed systems at Verizon. Priyanka Kumari ran GTM operations at ACCELQ. Now they are building autonomous revenue infrastructure from Jharkhand for the world."
    );

    // Open Graph
    setPropertyTag("og:title", "Built by Operators Who Closed $18M ARR the Old Way.");
    setPropertyTag(
      "og:description",
      "Pankaj Kumar closed $18M ARR as the founding sales hire at ACCELQ. Milind Kamboj built distributed systems at Verizon. Priyanka Kumari ran GTM operations at ACCELQ. Now they are building autonomous revenue infrastructure from Jharkhand for the world."
    );
    setPropertyTag("og:image", "/og-about.png");

    // Twitter
    setMetaTag("twitter:card", "summary_large_image");
    setMetaTag("twitter:title", "Built by Operators Who Closed $18M ARR the Old Way.");
    setMetaTag(
      "twitter:description",
      "Pankaj Kumar closed $18M ARR as the founding sales hire at ACCELQ. Milind Kamboj built distributed systems at Verizon. Priyanka Kumari ran GTM operations at ACCELQ. Now they are building autonomous revenue infrastructure from Jharkhand for the world."
    );
    setMetaTag("twitter:image", "/og-about.png");

  }, []);

  return <>{children}</>;
}