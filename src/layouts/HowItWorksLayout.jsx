import { Helmet } from "react-helmet-async";

export default function HowItWorksLayout({ children }) {
  return (
    <>
      <Helmet>
        <title>Six steps from ICP to compounding pipeline</title>

        <meta
          name="description"
          content="Learn how PravRaha''s operational flow turns your ideal customer profile into a self-improving pipeline system. Six steps from ICP to compounding pipeline."
        />

        {/* Open Graph */}
        <meta property="og:title" content="Six steps from ICP to compounding pipeline" />
        <meta
          property="og:description"
          content="Learn how PravRaha''s operational flow turns your ideal customer profile into a self-improving pipeline system. Six steps from ICP to compounding pipeline."
        />
        <meta property="og:image" content="/og-how-it-works.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Six steps from ICP to compounding pipeline"
        />
        <meta
          name="twitter:description"
          content="Learn how PravRaha''s operational flow turns your ideal customer profile into a self-improving pipeline system. Six steps from ICP to compounding pipeline."
        />
        <meta name="twitter:image" content="/og-how-it-works.png" />
      </Helmet>

      {children}
    </>
  );
}
