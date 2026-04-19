import { useEffect } from "react";

export default function AboutLayout({ children }) {
  useEffect(() => {
    // Basic SEO meta tags
    document.title = "Autonomous Revenue Infrastructure.";

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
      "PravRaha helps B2B Companies generate pipeline by detecting buying signals, researching accounts, identifying decision makers and executing personalized outreach campaigns."
    );

    // Open Graph
    setPropertyTag("og:title", "Autonomous Revenue Infrastructure.");
    setPropertyTag(
      "og:description",
      "PravRaha helps B2B Companies generate pipeline by detecting buying signals, researching accounts, identifying decision makers and executing personalized outreach campaigns."
    );
    setPropertyTag("og:image", "/ab_logo.jpeg");

    // Twitter
    setMetaTag("twitter:card", "summary_large_image");
    setMetaTag("twitter:title", "Autonomous Revenue Infrastructure.");
    setMetaTag(
      "twitter:description",
      "PravRaha helps B2B Companies generate pipeline by detecting buying signals, researching accounts, identifying decision makers and executing personalized outreach campaigns."
    );
    setMetaTag("twitter:image", "/ab_logo.jpeg");

  }, []);

  return <>{children}</>;
}