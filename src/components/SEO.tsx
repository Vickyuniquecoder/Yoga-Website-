import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  url: string;
  image?: string;
  schema?: Record<string, any>;
}

export default function SEO({ 
  title, 
  description, 
  keywords = "Yoga Classes in Ahmedabad, Home Yoga Classes, Meditation Classes, Yoga Wellness, Yoga Trainer Ahmedabad",
  url,
  image = "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop",
  schema
}: SEOProps) {
  const siteName = "Lotus Yoga & Wellness";
  const fullTitle = `${title} | ${siteName}`;

  return (
    <Helmet>
      {/* Google Site Verification */}
      <meta name="google-site-verification" content="GxqS48AJnwjOcY1cpn7ARSV6WP1kg_I5atI8pcDr4vo" />

      {/* Basic HTML Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={`https://yogwellness.netlify.app${url}`} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`https://yogwellness.netlify.app${url}`} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={`https://yogwellness.netlify.app${url}`} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
