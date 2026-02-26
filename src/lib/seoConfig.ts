/**
 * SEO Configuration and Constants
 * Centralized SEO metadata for Millennium Automation System
 */

export const SITE_CONFIG = {
  name: "Millennium Automation System",
  shortName: "MAS",
  url: "https://millenniumautomationsystem.com",
<<<<<<< HEAD
  description: "Authorized Delta Electronics distributor in Vapi, Gujarat. Expert industrial automation solutions: VFD, PLC, HMI, Servo Systems, Control Panels. 24/7 support.",
=======
  description: "Delta authorized dealer in Vapi, Gujarat. Authorized Delta Electronics distributor and supplier in Vapi. VFD, PLC, HMI, Servo Systems, Control Panels. 24/7 support.",
>>>>>>> 5d8b0611ac9b1143bf3b7f8ca3ea9a3addf6f00f
  location: {
    city: "Vapi",
    state: "Gujarat",
    country: "India",
<<<<<<< HEAD
    fullAddress: "6A, first floor, Globe Chamber, Via Char Rasta Rd, opp. Sardar bhiladwala bank, Phase 2, GIDC, Vapi, Gujarat 396195"
=======
    fullAddress: "6A, 1st Floor, Globe Chamber, Opp. Sardar Bhiladwala Bank, Near V.I.A Char Rasta, G.I.D.C., Vapi, Gujarat 396195"
>>>>>>> 5d8b0611ac9b1143bf3b7f8ca3ea9a3addf6f00f
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
<<<<<<< HEAD
  structuredData?: object;
=======
  structuredData?: object | object[];
>>>>>>> 5d8b0611ac9b1143bf3b7f8ca3ea9a3addf6f00f
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
 * Comprehensive keyword list for SEO optimization
 */
export const getAllKeywords = (): string => {
  const baseKeywords = [
<<<<<<< HEAD
    // Company & Location
    "Millennium Automation System",
    "MAS Vapi",
    "industrial automation Vapi",
    "automation company Vapi Gujarat",
    "industrial automation solutions Vapi",
    
    // Delta Electronics Authorized Distributor (High Priority)
    "Authorized Delta Electronics distributor",
    "Authorized Delta Electronics distributor in Vapi",
    "Authorized Delta Electronics distributor in Gujarat",
    "Authorized Delta Electronics distributor India",
    "Delta Electronics authorized dealer Vapi",
    "Delta Electronics channel partner Gujarat",
    "Delta Electronics authorized distributor Vapi",
    "Delta Electronics dealer Vapi",
    "Delta Electronics dealer in Vapi",
    "Delta Electronics dealer in Gujarat",
    "Delta Electronics supplier Vapi Gujarat",
    "Delta dealer in Vapi",
    "Delta dealers in Vapi",
=======
    // Exact search phrases first (people searching these should find us first)
    "delta authorized dealer in vapi",
    "Delta authorised dealer in Vapi",
    "Delta authorized dealer Vapi",
    "Delta dealer in Vapi",
    "Delta dealers in Vapi",
    "Authorized Delta Electronics distributor in Vapi",
    "Delta Electronics authorized dealer Vapi",
    "Delta Electronics dealer Vapi",
    "Delta Electronics supplier Vapi Gujarat",
    "Authorized Delta Electronics distributor in Gujarat",
    "Authorized Delta Electronics distributor India",
    "Delta Electronics channel partner Gujarat",
    "Delta Electronics authorized distributor Vapi",
    "Delta Electronics dealer in Vapi",
    "Delta Electronics dealer in Gujarat",
>>>>>>> 5d8b0611ac9b1143bf3b7f8ca3ea9a3addf6f00f
    "Delta dealers near me",
    "Delta suppliers near me",
    "Delta authorized in Gujarat",
    "Delta authorised in Gujarat",
    "Delta authorized in Vapi",
    "Delta authorised in Vapi",
<<<<<<< HEAD
=======
    "Authorized Delta Electronics distributor",
    // Company & Location
    "Millennium Automation System",
    "MAS Vapi",
    "industrial automation Vapi",
    "automation company Vapi Gujarat",
    "industrial automation solutions Vapi",
>>>>>>> 5d8b0611ac9b1143bf3b7f8ca3ea9a3addf6f00f
    
    // Product Categories
    "VFD drive supplier Vapi",
    "PLC supplier Vapi Gujarat",
    "HMI supplier Vapi",
    "servo motor supplier Vapi",
    "SMPS supplier Vapi Gujarat",
    "control panel manufacturer Vapi",
    "automation solutions Vapi",
    "industrial automation services Gujarat",
    
    // Product Categories with Delta Brand - Vapi Location
    "Delta VFD drive Vapi",
    "Delta VFD Vapi",
    "VFD Delta make",
    "VFD Delta make Vapi",
    "Delta servo motor Vapi",
    "Delta servo Vapi",
    "servo Delta make",
    "servo Delta make Vapi",
    "Delta HMI Vapi",
    "Delta HMI panel Vapi",
    "HMI Delta make",
    "HMI Delta make Vapi",
    "Delta PLC Vapi",
    "Delta PLC controller Vapi",
    "PLC Delta make",
    "PLC Delta make Vapi",
    "Delta power supply Vapi",
    "Delta SMPS Vapi",
    "SMPS Delta make",
    "SMPS Delta make Vapi",
    "Delta encoder Vapi",
    "Delta motion controller Vapi",
    
    // Product Categories with Delta Brand - Gujarat Location
    "Delta VFD drive Gujarat",
    "Delta VFD Gujarat",
    "VFD Delta make Gujarat",
    "Delta servo motor Gujarat",
    "Delta servo Gujarat",
    "servo Delta make Gujarat",
    "Delta HMI Gujarat",
    "Delta HMI panel Gujarat",
    "HMI Delta make Gujarat",
    "Delta PLC Gujarat",
    "Delta PLC controller Gujarat",
    "PLC Delta make Gujarat",
    "Delta power supply Gujarat",
    "Delta SMPS Gujarat",
    "SMPS Delta make Gujarat",
    
    // Product Models - VFD
    "Delta ME300",
    "Delta ME300 VFD",
    "ME300 Series",
    "Delta MS300",
    "MS300 Series",
    "Delta MH300",
    "MH300 Series",
    "Delta C2000",
    "C2000 Series",
    "Delta CP2000",
    "CP2000 Series",
    "Delta VP3000",
    "VP3000 Series",
    
    // Product Models - PLC
    "Delta DVP-ES3",
    "DVP-ES3 PLC",
    "Delta DVP-ES2",
    "DVP-ES2 PLC",
    "Delta DVP-EX2",
    "DVP-EX2 PLC",
    "Delta DVP-SV2",
    "DVP-SV2 PLC",
    "Delta DVP-SE",
    "DVP-SE PLC",
    "Delta DVP-SS2",
    "DVP-SS2 PLC",
    
    // Product Models - HMI
    "Delta TP70P",
    "TP70P HMI",
    "Delta TP04P",
    "TP04P HMI",
    "Delta DOP-107",
    "DOP-107 HMI",
    "Delta DOP-115",
    "DOP-115 HMI",
    
    // Product Models - Servo & Motion
    "Delta ASDA-H3",
    "ASDA-H3 servo",
    "Delta DVP-15MC",
    "DVP-15MC motion controller",
    "Delta DVP-50MC",
    "DVP-50MC EtherCAT",
    "Delta DVP-PM",
    "DVP-PM pulse controller",
    "Delta ASDA-A2",
    "ASDA-A2 servo",
    "Delta ASDA-A3",
    "ASDA-A3 servo",
    "Delta ASDA-B2",
    "ASDA-B2 servo",
    
    // Product Models - Power Supplies
    "Delta CliQ M",
    "CliQ M power supply",
    "Delta CliQ VA",
    "CliQ VA power supply",
    "Delta Force-GT",
    "Force-GT power supply",
    "Delta PMT2",
    "PMT2 power supply",
    "Delta MEB",
    "MEB medical power supply",
    
    // Product Models - Encoders
    "Delta ES encoder",
    "ES Series encoder",
    "Delta EH encoder",
    "EH Series encoder",
    "Delta MH encoder",
    "MT Series encoder",
    "Delta AS encoder",
    "AH Series encoder",
    
    // Product Models - Solutions
    "Delta IED-S",
    "IED-S elevator system",
    "Delta HES-C",
    "HES-C injection molding",
    "Delta CT2000",
    "CT2000 textile drive",
    
    // Generic Search Terms
    "industrial automation services",
    "industrial automation services in Vapi",
    "industrial automation services in Gujarat",
    "automation solutions Vapi",
    "automation solutions Gujarat",
    "factory automation Vapi",
    "manufacturing automation Vapi",
    "PLC programming services Vapi",
    "VFD installation Vapi",
    "HMI installation Gujarat",
    "automation system integrator Vapi",
    "industrial control systems Vapi",
    
    // Location Variations
    "Vapi industrial automation",
    "Gujarat automation company",
    "Vapi GIDC automation",
    "automation near Vapi",
    "Delta Electronics near me",
    "VFD supplier near me",
    "PLC supplier near me",
    
    // Additional Product Variations with Locations
    "Delta VFD dealer Vapi",
    "Delta VFD dealer Gujarat",
    "Delta servo dealer Vapi",
    "Delta servo dealer Gujarat",
    "Delta HMI dealer Vapi",
    "Delta HMI dealer Gujarat",
    "Delta PLC dealer Vapi",
    "Delta PLC dealer Gujarat",
    "Delta power supply dealer Vapi",
    "Delta power supply dealer Gujarat",
    "Delta SMPS dealer Vapi",
    "Delta SMPS dealer Gujarat",
    
    // Product Type + Location Variations
    "Delta VFD drives Vapi",
    "Delta servo motors Vapi",
    "Delta HMI panels Vapi",
    "Delta PLC controllers Vapi",
    "Delta VFD drives Gujarat",
    "Delta servo motors Gujarat",
    "Delta HMI panels Gujarat",
    "Delta PLC controllers Gujarat"
  ];
  
  return baseKeywords.join(", ");
};

/**
 * Default SEO metadata for homepage
 */
export const defaultSEO: SEOProps = {
<<<<<<< HEAD
  title: "Delta Dealer in Vapi | Authorized Delta Electronics Distributor | Industrial Automation Solutions",
  description: "Delta dealer in Vapi, Gujarat. Authorized Delta Electronics distributor and supplier. ME300, MS300, DVP-ES3, ASDA-H3, TP70P series. Expert industrial automation solutions: VFD Delta make, HMI Delta make, PLC Delta make, Servo Systems. 24/7 support. Get quote now.",
=======
  title: "Delta Authorized Dealer in Vapi | Delta Dealer Vapi | Authorized Delta Electronics Distributor",
  description: "Delta authorized dealer in Vapi, Gujarat. Authorized Delta Electronics distributor and supplier in Vapi. ME300, MS300, DVP-ES3, ASDA-H3, TP70P. VFD, PLC, HMI, Servo. 24/7 support. Get quote now — millenniumautomationsystem.com",
>>>>>>> 5d8b0611ac9b1143bf3b7f8ca3ea9a3addf6f00f
  keywords: getAllKeywords(),
  canonical: SITE_CONFIG.url,
  ogImage: generateOGImage(),
  ogType: "website",
  noindex: false
};

/**
 * Product category SEO configurations with comprehensive product model keywords
 */
export const productCategorySEO: Record<string, SEOProps> = {
  vfd: {
    title: "Delta VFD Drives | ME300, MS300, MH300, C2000, CP2000, VP3000 | Authorized Distributor Vapi",
    description: "Authorized Delta Electronics VFD supplier in Vapi, Gujarat. ME300, MS300, MH300, C2000+, CP2000, VP3000 series. Variable frequency drives for industrial motor control. Energy-efficient solutions. Get quote.",
    keywords: "Delta VFD, Delta ME300, ME300 Series, Delta MS300, MS300 Series, Delta MH300, MH300 Series, Delta C2000, C2000 Series, Delta CP2000, CP2000 Series, Delta VP3000, VP3000 Series, variable frequency drives Vapi, VFD drive supplier Gujarat, Delta Electronics VFD distributor, industrial motor control Vapi, VFD supplier near me, energy efficient VFD, Delta VFD price, ME300 VFD price, authorized Delta VFD dealer",
    canonical: generateCanonical("/product-list?category=vfd"),
    ogType: "product"
  },
  plc: {
    title: "Delta PLC Controllers | DVP-ES3, DVP-ES2, DVP-SV2, DVP-SE | Supplier Vapi Gujarat",
    description: "Authorized Delta Electronics PLC supplier in Vapi, Gujarat. DVP-ES3, DVP-ES2/EX2, DVP-SV2, DVP-SE series. High-performance programmable logic controllers with motion control. Fast execution speeds. Expert support.",
    keywords: "Delta PLC, Delta DVP-ES3, DVP-ES3 PLC, Delta DVP-ES2, DVP-ES2 PLC, Delta DVP-EX2, DVP-EX2 PLC, Delta DVP-SV2, DVP-SV2 PLC, Delta DVP-SE, DVP-SE PLC, Delta DVP-SS2, DVP-SS2 PLC, programmable logic controllers Vapi, PLC supplier Gujarat, Delta PLC distributor, automation controllers Vapi, PLC programming services, Delta PLC price, DVP-ES3 price, authorized Delta PLC dealer",
    canonical: generateCanonical("/product-list?category=plc"),
    ogType: "product"
  },
  hmi: {
    title: "Delta HMI Panels | TP70P, TP04P, DOP-107, DOP-115 | Touchscreen HMI Supplier Vapi",
    description: "Authorized Delta Electronics HMI supplier in Vapi, Gujarat. TP70P, TP04P, DOP-107, DOP-115 series. Touchscreen human machine interface panels with integrated PLC. Industrial monitoring and control.",
    keywords: "Delta HMI, Delta TP70P, TP70P HMI, Delta TP04P, TP04P HMI, Delta DOP-107, DOP-107 HMI, Delta DOP-115, DOP-115 HMI, human machine interface Vapi, HMI panels Gujarat, touchscreen HMI, Delta HMI distributor, industrial HMI panels, HMI supplier near me, automation monitoring systems, Delta HMI price, TP70P price, authorized Delta HMI dealer",
    canonical: generateCanonical("/product-list?category=hmi"),
    ogType: "product"
  },
  servo: {
    title: "Delta Servo Systems | ASDA-H3, DVP-15MC, DVP-50MC, DVP-PM | Motion Control Vapi",
    description: "Authorized Delta Electronics servo supplier in Vapi, Gujarat. ASDA-H3, DVP-15MC, DVP-50MC, DVP-PM series. Precision servo drives and motion controllers for multi-axis control. High-performance automation.",
    keywords: "Delta servo, Delta ASDA-H3, ASDA-H3 servo, Delta DVP-15MC, DVP-15MC motion controller, Delta DVP-50MC, DVP-50MC EtherCAT, Delta DVP-PM, DVP-PM pulse controller, Delta ASDA-A2, ASDA-A2 servo, Delta ASDA-A3, ASDA-A3 servo, Delta ASDA-B2, ASDA-B2 servo, servo drive systems Vapi, servo motors Gujarat, Delta servo distributor, precision motion control, servo systems supplier, Delta servo price, ASDA-H3 price, authorized Delta servo dealer",
    canonical: generateCanonical("/product-list?category=servo"),
    ogType: "product"
  },
  smps: {
    title: "Delta Power Supplies | CliQ M, CliQ VA, Force-GT, PMT2, MEB | SMPS Supplier Vapi",
    description: "Authorized Delta Electronics power supply supplier in Vapi, Gujarat. CliQ M, CliQ VA, Force-GT, PMT2, MEB series. Industrial SMPS with diagnostics and certifications. Marine, medical, consumer safety compliant.",
    keywords: "Delta power supply, Delta CliQ M, CliQ M power supply, Delta CliQ VA, CliQ VA power supply, Delta Force-GT, Force-GT power supply, Delta PMT2, PMT2 power supply, Delta MEB, MEB medical power supply, industrial SMPS Vapi, power supply Gujarat, Delta power supplies, SMPS supplier, automation power supply, Delta SMPS price, CliQ M price, authorized Delta power supply dealer",
    canonical: generateCanonical("/product-list?category=smps"),
    ogType: "product"
  },
  encoders: {
    title: "Delta Encoders | ES, EH, MH/MT, AS/AH Series | Feedback Devices Supplier Vapi",
    description: "Delta Electronics encoders in Vapi, Gujarat. ES, EH, MH/MT, AS/AH series. Precision rotary optical encoders for closed-loop motion control. Incremental, absolute, and servo commutation.",
    keywords: "Delta encoder, ES Series encoder, EH Series encoder, MH Series encoder, MT Series encoder, AS Series encoder, AH Series encoder, rotary encoder Vapi, optical encoder Gujarat, encoder supplier, feedback device, motion control encoder, Delta encoder price",
    canonical: generateCanonical("/product-list?category=encoders"),
    ogType: "product"
  },
  solutions: {
    title: "Delta Industry Solutions | IED-S Elevator, HES-C Injection Molding, CT2000 Textile | Vapi",
    description: "Delta Electronics vertical industry solutions in Vapi, Gujarat. IED-S elevator systems, HES-C injection molding, CT2000 textile drives. Integrated automation solutions for specific industries.",
    keywords: "Delta IED-S, IED-S elevator system, Delta HES-C, HES-C injection molding, Delta CT2000, CT2000 textile drive, VP3000 fluid power, CP2000 pump control, elevator automation, injection molding automation, textile automation, industry-specific automation solutions",
    canonical: generateCanonical("/product-list?category=solutions"),
    ogType: "product"
  }
};

/**
 * Generate product-specific SEO based on product model
 */
export const generateProductSEO = (productModel: string, category: string): SEOProps => {
  const modelKeywords = productModel.toLowerCase().replace(/\s+/g, " ");
  const categoryInfo = productCategorySEO[category] || productCategorySEO.vfd;
  
  return {
    title: `${productModel} | Delta ${category.toUpperCase()} | Authorized Distributor Vapi`,
    description: `Buy ${productModel} from authorized Delta Electronics distributor in Vapi, Gujarat. ${categoryInfo.description} Competitive pricing, 24/7 support. Get quote now.`,
    keywords: `${productModel}, Delta ${productModel}, ${modelKeywords}, ${categoryInfo.keywords}, ${productModel} price, ${productModel} supplier Vapi, buy ${productModel} Gujarat, ${productModel} distributor`,
<<<<<<< HEAD
    canonical: generateCanonical(`/product-detail?model=${encodeURIComponent(productModel)}&category=${category}`),
=======
    canonical: generateCanonical(`/product-detail?category=${category}&product=${encodeURIComponent(productModel)}`),
>>>>>>> 5d8b0611ac9b1143bf3b7f8ca3ea9a3addf6f00f
    ogType: "product"
  };
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

