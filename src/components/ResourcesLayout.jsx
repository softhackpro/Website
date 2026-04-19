import { Helmet } from "react-helmet-async";

export default function BlogLayout({ children }) {
  return (
    <>
      <Helmet>
        <title>B2B Lead Generation & GTM Strategy Blog.</title>

        <meta
          name="description"
          content="Outbound GTM playbooks, B2B prospecting frameworks, SDR strategies, and sales intelligence insights - from the team building PravRaha. Updated for 2026."
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="B2B Lead Generation & GTM Strategy Blog"
        />
        <meta
          property="og:description"
          content="Outbound GTM playbooks, B2B prospecting frameworks, SDR strategies, and sales intelligence insights - from the team building PravRaha. Updated for 2026."
        />
        <meta property="og:image" content="/blo.jpeg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="B2B Lead Generation & GTM Strategy Blog."
        />
        <meta
          name="twitter:description"
          content="Outbound GTM playbooks, B2B prospecting frameworks, SDR strategies, and sales intelligence insights - from the team building PravRaha. Updated for 2026."
        />
        <meta name="twitter:image" content="/blo.jpeg" />
      </Helmet>

      {children}
    </>
  );
}