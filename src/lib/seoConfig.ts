/**
 * SEO Configuration and Constants
 * Centralized SEO metadata for Millennium Automation System
 */

export const SITE_CONFIG = {
  name: "Millennium Automation System",
  shortName: "MAS",
  url: "https://millenniumautomationsystem.com",
  description: "Authorized Delta Electronics distributor in Vapi, Gujarat. Expert industrial automation solutions: VFD, PLC, HMI, Servo Systems, Control Panels. 24/7 support.",
  location: {
    city: "Vapi",
    state: "Gujarat",
    country: "India",
    fullAddress: "6A, 1st Floor, Globe Chamber, Opp. Sardar Bhiladwala Bank, Near V.I.A Char Rasta, G.I.D.C., Vapi, Gujarat 396195"
  },
  contact: {
    phone: "+91-9904003445",
    email: "millenniumautomationsystem@gmail.com"
  },
  social: {
    // Add social media links when available
    linkedin: "",
    facebook: "",
    twitter: ""
  }
} as const;

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: "website" | "article" | "product";
  noindex?: boolean;
  structuredData?: object;
}

/**
 * Generate full page title with site name
 */
export const generateTitle = (pageTitle?: string): string => {
  if (!pageTitle) {
    return `${SITE_CONFIG.name} | Industrial Automation Solutions in Vapi, Gujarat`;
  }
  return `${pageTitle} | ${SITE_CONFIG.name}`;
};

/**
 * Generate canonical URL
 */
export const generateCanonical = (path: string = ""): string => {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_CONFIG.url}${cleanPath}`;
};

/**
 * Generate Open Graph image URL
 */
export const generateOGImage = (imagePath?: string): string => {
  if (imagePath) {
    return imagePath.startsWith("http") 
      ? imagePath 
      : `${SITE_CONFIG.url}${imagePath}`;
  }
  return `${SITE_CONFIG.url}/og-image.svg`;
};

/**
 * Default SEO metadata for homepage
 */
export const defaultSEO: SEOProps = {
  title: "Industrial Automation Solutions Vapi | Delta Electronics Partner",
  description: SITE_CONFIG.description,
  keywords: "industrial automation Vapi, Delta Electronics distributor Gujarat, VFD drive supplier, PLC programming services, HMI touchscreen panels, servo motor systems, control panel manufacturer, automation solutions Gujarat, Delta VFD Vapi, Delta PLC supplier, industrial automation services India, SMPS power supply, system integration services, factory automation Vapi",
  canonical: SITE_CONFIG.url,
  ogImage: generateOGImage(),
  ogType: "website",
  noindex: false
};

/**
 * Product category SEO configurations
 */
export const productCategorySEO: Record<string, SEOProps> = {
  vfd: {
    title: "Variable Frequency Drives (VFD) | Delta Electronics VFD Supplier in Vapi",
    description: "Authorized Delta Electronics VFD supplier in Vapi, Gujarat. ME300, REG2000, CP2000 series. Energy-efficient motor speed control solutions for industrial automation. Get quote now.",
    keywords: "Delta VFD, variable frequency drives Vapi, VFD drive supplier Gujarat, Delta ME300 VFD, industrial motor control, VFD supplier near me, Delta Electronics VFD distributor, energy efficient VFD",
    canonical: generateCanonical("/product-list?category=vfd"),
    ogType: "product"
  },
  plc: {
    title: "Programmable Logic Controllers (PLC) | Delta PLC Supplier Vapi",
    description: "Delta Electronics PLC controllers in Vapi, Gujarat. DVP-SE, DVP-SS2, AS200, AH500 series. Reliable automation control solutions with comprehensive technical support.",
    keywords: "Delta PLC, programmable logic controllers Vapi, PLC supplier Gujarat, Delta DVP PLC, automation controllers, PLC programming services, Delta PLC distributor, industrial PLC solutions",
    canonical: generateCanonical("/product-list?category=plc"),
    ogType: "product"
  },
  hmi: {
    title: "Human Machine Interface (HMI) Panels | Delta HMI Supplier Vapi",
    description: "Delta Electronics HMI touchscreen panels in Vapi, Gujarat. DOP series with multi-touch displays for industrial automation monitoring and control. Expert installation support.",
    keywords: "Delta HMI, human machine interface Vapi, HMI panels Gujarat, touchscreen HMI, Delta DOP HMI, industrial HMI panels, HMI supplier near me, automation monitoring systems",
    canonical: generateCanonical("/product-list?category=hmi"),
    ogType: "product"
  },
  servo: {
    title: "Servo Motor Systems | Delta Servo Drives Supplier Vapi",
    description: "Delta Electronics servo motor systems in Vapi, Gujarat. ASDA-A2, ASDA-A3, ASDA-B2 series for high-precision motion control. Expert automation solutions.",
    keywords: "Delta servo motors, servo drive systems Vapi, servo motors Gujarat, Delta ASDA servo, precision motion control, servo systems supplier, automation servo drives, Delta servo distributor",
    canonical: generateCanonical("/product-list?category=servo"),
    ogType: "product"
  },
  smps: {
    title: "Power Supplies & SMPS | Industrial Power Supply Supplier Vapi",
    description: "Industrial SMPS and power supply solutions in Vapi, Gujarat. Delta Electronics power supplies for reliable automation systems. Wide range of voltage options available.",
    keywords: "industrial SMPS Vapi, power supply Gujarat, Delta power supplies, industrial power supply, SMPS supplier, automation power supply, reliable power solutions, Delta power supply distributor",
    canonical: generateCanonical("/product-list?category=smps"),
    ogType: "product"
  }
};

/**
 * Service page SEO configurations
 */
export const serviceSEO: Record<string, SEOProps> = {
  "custom-control-panels": {
    title: "Custom Control Panel Manufacturer in Vapi | IEC Standards",
    description: "Expert custom control panel design and manufacturing in Vapi, Gujarat. IEC standards compliant, UL listed, full documentation. Contact Millennium Automation for quote.",
    keywords: "custom control panels Vapi, control panel manufacturer Gujarat, IEC control panels, industrial control panel design, control panel fabrication, automation control panels",
    canonical: generateCanonical("/services/custom-control-panels")
  },
  "system-integration": {
    title: "Industrial Automation System Integration Services Vapi",
    description: "Seamless integration of PLCs, VFDs, HMIs, and robotics into efficient automation systems. SCADA integration, IoT connectivity, real-time monitoring in Vapi, Gujarat.",
    keywords: "system integration Vapi, automation integration services, PLC VFD HMI integration, SCADA integration, industrial automation integration, automation system integrator",
    canonical: generateCanonical("/services/system-integration")
  },
  "technical-support": {
    title: "24/7 Industrial Automation Technical Support | Vapi, Gujarat",
    description: "Round-the-clock technical support for industrial automation systems in Vapi. Emergency response, remote diagnostics, on-site service, preventive maintenance.",
    keywords: "automation technical support Vapi, 24/7 automation support, industrial automation service, Delta Electronics support, automation maintenance, emergency automation service",
    canonical: generateCanonical("/services/technical-support")
  }
};

