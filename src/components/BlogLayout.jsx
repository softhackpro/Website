import { Helmet } from "react-helmet-async";

export default function BlogLayout({ children }) {
  return (
    <>
      <Helmet>
        <title>
          Autonomous Revenue Infrastructure for B2B Sales Teams.
        </title>

        <meta
          name="description"
          content="The platform detects buying signals, researches target accounts, identifies decision-makers, and executes personalized outreach campaigns that convert into qualified sales meetings."
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Autonomous Revenue Infrastructure for B2B Sales Teams."
        />
        <meta
          property="og:description"
          content="The platform detects buying signals, researches target accounts, identifies decision-makers, and executes personalized outreach campaigns that convert into qualified sales meetings."
        />
        <meta property="og:image" content="/prod.jpeg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Autonomous Revenue Infrastructure for B2B Sales Teams."
        />
        <meta
          name="twitter:description"
          content="The platform detects buying signals, researches target accounts, identifies decision-makers, and executes personalized outreach campaigns that convert into qualified sales meetings."
        />
        <meta name="twitter:image" content="/prod.jpeg" />
      </Helmet>

      {children}
    </>
  );
}