import { Helmet } from 'react-helmet-async';
import { SEOProps, generateTitle, generateCanonical, generateOGImage, SITE_CONFIG, defaultSEO } from '@/lib/seoConfig';

interface SEOComponentProps extends SEOProps {
  children?: React.ReactNode;
}

/**
 * SEO Component
 * 
 * Dynamic SEO meta tags management using react-helmet-async
 * Manages title, description, keywords, Open Graph, Twitter Cards, and structured data
 */
export const SEO = ({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  ogType = "website",
  noindex = false,
  structuredData,
  children
}: SEOComponentProps) => {
  // Use provided values or fall back to defaults
  const pageTitle = title ? generateTitle(title) : generateTitle(defaultSEO.title);
  const pageDescription = description || defaultSEO.description || SITE_CONFIG.description;
  const pageKeywords = keywords || defaultSEO.keywords || "";
  const pageCanonical = canonical || generateCanonical();
  const pageOGImage = ogImage ? generateOGImage(ogImage) : generateOGImage(defaultSEO.ogImage);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      {pageKeywords && <meta name="keywords" content={pageKeywords} />}
      
      {/* Robots Meta */}
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={pageCanonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={pageCanonical} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={pageOGImage} />
      <meta property="og:image:alt" content={pageTitle} />
      <meta property="og:site_name" content={SITE_CONFIG.name} />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={pageCanonical} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageOGImage} />
      <meta name="twitter:image:alt" content={pageTitle} />
      
      {/* Structured Data (JSON-LD) */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Additional children for custom meta tags */}
      {children}
    </Helmet>
  );
};

export default SEO;

