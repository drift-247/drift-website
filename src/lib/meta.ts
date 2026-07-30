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
    title = "Drift247 - Customer-First Mobility Built for Nigeria",
    description = "Drift247 is a customer-first mobility platform built for Nigeria, designed for comfortable rides, clearer trips, verified drivers, and dependable everyday movement. Launching soon in select Nigerian cities.",
    keywords = [
      "Drift247",
      "ride-hailing Nigeria",
      "mobility platform Nigeria",
      "customer-first mobility",
      "comfortable rides",
      "reliable rides",
      "verified drivers",
      "clear pricing",
      "driver onboarding Nigeria",
      "Lagos rides",
      "Abuja rides",
      "Port Harcourt rides",
      "Nigeria ride app",
      "everyday movement Nigeria",
    ],
    image = "https://drift247.africa/og-image.png",
    url = "https://drift247.africa",
    type = "website",
    twitterHandle = "@Drift247_ng",
    noIndex = false,
  } = props;

  const fullTitle = title;

  return {
    title: fullTitle,
    description,
    keywords: keywords.join(", "),

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
          alt: "Drift247 - Drift in Comfort",
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