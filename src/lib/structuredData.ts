/**
 * Structured Data (JSON-LD) Utility Functions
 * Helper functions to generate Schema.org structured data for SEO
 */

import { SITE_CONFIG } from './seoConfig';

/**
 * Generate BreadcrumbList structured data
 */
export interface BreadcrumbItem {
  name: string;
  url: string;
}

export const generateBreadcrumbSchema = (items: BreadcrumbItem[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
};

/**
 * Generate Product structured data
 */
export interface ProductData {
  name: string;
  description: string;
  brand?: string;
  image?: string;
  sku?: string;
  offers?: {
    availability?: string;
    price?: string;
    priceCurrency?: string;
  };
}

export const generateProductSchema = (product: ProductData) => {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
  };

  if (product.brand) {
    schema.brand = {
      "@type": "Brand",
      "name": product.brand
    };
  }

  if (product.image) {
    schema.image = product.image.startsWith("http") 
      ? product.image 
      : `${SITE_CONFIG.url}${product.image}`;
  }

  if (product.sku) {
    schema.sku = product.sku;
  }

  if (product.offers) {
    schema.offers = {
      "@type": "Offer",
      "availability": product.offers.availability || "https://schema.org/InStock",
      "priceCurrency": product.offers.priceCurrency || "INR",
      ...(product.offers.price && { "price": product.offers.price }),
      "seller": {
        "@type": "Organization",
        "name": SITE_CONFIG.name
      }
    };
  }

  return schema;
};

/**
 * Generate Service structured data
 */
export interface ServiceData {
  name: string;
  description: string;
  serviceType?: string;
  areaServed?: string[];
}

export const generateServiceSchema = (service: ServiceData) => {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.description,
    "provider": {
      "@type": "LocalBusiness",
      "name": SITE_CONFIG.name,
      "url": SITE_CONFIG.url,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": SITE_CONFIG.location.city,
        "addressRegion": SITE_CONFIG.location.state,
        "addressCountry": SITE_CONFIG.location.country
      }
    }
  };

  if (service.serviceType) {
    schema.serviceType = service.serviceType;
  }

  if (service.areaServed && service.areaServed.length > 0) {
    schema.areaServed = service.areaServed.map(area => ({
      "@type": area.includes("State") ? "State" : "City",
      "name": area
    }));
  } else {
    schema.areaServed = [
      {
        "@type": "State",
        "name": SITE_CONFIG.location.state
      }
    ];
  }

  return schema;
};

/**
 * Generate Organization structured data
 */
export const generateOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": SITE_CONFIG.name,
    "url": SITE_CONFIG.url,
    "logo": `${SITE_CONFIG.url}/nmlogo.png`,
    "image": `${SITE_CONFIG.url}/nmlogo.png`,
    "description": SITE_CONFIG.description,
    "email": SITE_CONFIG.contact.email,
    "telephone": SITE_CONFIG.contact.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": SITE_CONFIG.location.fullAddress.split(',').slice(0, -3).join(','),
      "addressLocality": SITE_CONFIG.location.city,
      "addressRegion": SITE_CONFIG.location.state,
      "postalCode": "396195",
      "addressCountry": SITE_CONFIG.location.country
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "20.371389",
      "longitude": "72.904167"
    }
  };
};

/**
 * Generate LocalBusiness structured data
 */
export const generateLocalBusinessSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": SITE_CONFIG.name,
    "url": SITE_CONFIG.url,
    "image": `${SITE_CONFIG.url}/nmlogo.png`,
    "description": "Industrial automation solutions provider specializing in VFD, PLC, HMI, Servo Systems, and control panels",
    "priceRange": "$$",
    "telephone": SITE_CONFIG.contact.phone,
    "email": SITE_CONFIG.contact.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": SITE_CONFIG.location.fullAddress.split(',').slice(0, -3).join(','),
      "addressLocality": SITE_CONFIG.location.city,
      "addressRegion": SITE_CONFIG.location.state,
      "postalCode": "396195",
      "addressCountry": SITE_CONFIG.location.country
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "20.371389",
      "longitude": "72.904167"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "areaServed": {
      "@type": "State",
      "name": SITE_CONFIG.location.state
    }
  };
};

