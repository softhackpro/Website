import { Helmet } from "react-helmet-async";

export default function PlatformLayout({ children }) {
  return (
    <>
      <Helmet>
        <title>Three Layers. One Loop. Zero Seams.</title>

        <meta
          name="description"
          content="Data that refreshes itself via 100+ sources. Six AI agents running on your behalf. The Outreach Process Engine where AI orchestrates 80% and humans close the 20% that matters. See the infrastructure underneath your pipeline."
        />

        {/* Open Graph */}
        <meta property="og:title" content="Three Layers. One Loop. Zero Seams." />
        <meta
          property="og:description"
          content="Data that refreshes itself via 100+ sources. Six AI agents running on your behalf. The Outreach Process Engine where AI orchestrates 80% and humans close the 20% that matters. See the infrastructure underneath your pipeline."
        />
        <meta property="og:image" content="/og-platform.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Three Layers. One Loop. Zero Seams."
        />
        <meta
          name="twitter:description"
          content="Data that refreshes itself via 100+ sources. Six AI agents running on your behalf. The Outreach Process Engine where AI orchestrates 80% and humans close the 20% that matters. See the infrastructure underneath your pipeline."
        />
        <meta name="twitter:image" content="/og-platform.png" />
      </Helmet>

      {children}
    </>
  );
}