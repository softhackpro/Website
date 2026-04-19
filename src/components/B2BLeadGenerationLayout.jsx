import { Helmet } from "react-helmet-async";

export default function B2BLeadGenerationLayout({ children }) {
  return (
    <>
      <Helmet>
        <title>B2B Lead Generation Services</title>

        <meta
          name="description"
          content="Book a free strategy call with PravRaha. We combine proprietary B2B contact data, buyer intent signals, account intelligence, and SDR-led outreach to fill your pipeline with qualified meetings."
        />

        {/* Open Graph */}
        <meta property="og:title" content="B2B Lead Generation Services" />
        <meta
          property="og:description"
          content="Book a free strategy call with PravRaha. We combine proprietary B2B contact data, buyer intent signals, account intelligence, and SDR-led outreach to fill your pipeline with qualified meetings."
        />
        <meta property="og:image" content="/serv.jpeg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="B2B Lead Generation Services"
        />
        <meta
          name="twitter:description"
          content="Book a free strategy call with PravRaha. We combine proprietary B2B contact data, buyer intent signals, account intelligence, and SDR-led outreach to fill your pipeline with qualified meetings."
        />
        <meta name="twitter:image" content="/serv.jpeg" />
      </Helmet>

      {children}
    </>
  );
}