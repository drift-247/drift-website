/**
 * meta.ts
 * Centralized SEO and OpenGraph configuration
 */

export interface MetaProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: "website" | "article" | "profile";
  twitterHandle?: string;
  noIndex?: boolean;
}

export const getMetadata = (props: MetaProps = {}) => {
  const {
    title = "Drift247 - Secure Ride Marketplace for Riders & Drivers",
    description = "Drift247 is a secure ride marketplace connecting riders and drivers through wallet-protected payments and transparent trip management. Launching soon in Lagos, Abuja, and Port Harcourt.",
    keywords = [
      "ride marketplace",
      "secure rides",
      "ride-hailing",
      "driver earnings",
      "transparent payments",
      "wallet protection",
      "verified drivers",
      "Lagos rides",
      "Abuja rides",
      "Port Harcourt rides",
      "Nigeria rideshare",
      "safe transportation",
    ],
    image = "https://drift247.com/og-image.png",
    url = "https://drift247.com",
    type = "website",
    twitterHandle = "@Drift247",
    noIndex = false,
  } = props;

  // Format the title
  const fullTitle = title;

  return {
    title: fullTitle,
    description,
    keywords: keywords?.join(", "),

    // OpenGraph
    openGraph: {
      title: fullTitle,
      description,
      type,
      url,
      siteName: "Drift247",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: fullTitle,
          type: "image/png",
        },
      ],
    },

    // Twitter
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      creator: twitterHandle,
      site: twitterHandle,
      images: [image],
    },

    // Robots
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
      },
    },

    // Canonical URL
    alternates: {
      canonical: url,
    },
  };
};
