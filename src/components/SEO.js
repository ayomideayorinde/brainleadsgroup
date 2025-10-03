
import React from "react";
import { Helmet } from "react-helmet-async";

export default function SEO({
  title = "BrainLeads Marketing Firm",
  description = "AI-powered digital marketing and advertising solutions, creating scalable campaigns for business growth across North America and beyond.",
  url = "https://brainleadsgroup.com/",
  image = "/og-image.jpg", 
  jsonLd = null // pass object for structured data
}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <meta name="google-site-verification" content="vkAzhWG4ZC7mlpnQ45M6vADtvC_R8nMH9wp_tA5YNqI" />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data (JSON-LD) */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
}
