import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { SITE_CONFIG, generateCanonical, generateOGImage } from "@/lib/seoConfig";
import { generateOrganizationSchema, generateFAQSchema } from "@/lib/structuredData";

const PAGE = {
  path: "/delta-dealer-vapi",
  title: "Delta Dealer & Distributor in Vapi, Gujarat | VFD, PLC, HMI, Servo",
  description:
    "Authorized Delta Electronics dealer and distributor in Vapi, Gujarat. Buy Delta VFD, PLC, HMI, Servo, SMPS with fast delivery, competitive price, and support in Vapi GIDC.",
  keywords: [
    // Core targets
    "Delta dealer Vapi",
    "Delta distributor Vapi",
    "Delta VFD dealer Vapi",
    "Delta PLC dealer Vapi",
    "Delta HMI dealer Vapi",
    "Delta Servo drive Vapi",
    "Delta SMPS dealer Vapi",
    "Buy Delta VFD Vapi",
    "Delta VFD price Vapi",
    // Gujarat scope
    "Delta Electronics Gujarat",
    "Authorized Delta distributor Gujarat",
    "Delta drives and PLC supplier Gujarat",
    // Near-me + support
    "vfd near me",
    "plc near me",
    "hmi near me",
    "Vfd delta support near me",
    "Plc programming support near me",
    "Hmi programming support near me",
    "Vfd programming support near me",
    // Branded short forms
    "Delta VFD dist. Vapi",
    "Delta AC drv dealer Vapi",
    "Delta HMI sup. Vapi",
    "Delta PSU supplier Vapi",
    "Delta temp controller Vapi",
    "Delta TC dealer Vapi",
    // Company tags
    "Industrial automation company Vapi GIDC",
    "Delta supplier near Vapi GIDC",
    "mas vapi",
    "mas gujarat",
  ].join(", "),
};

const DeltaVapi = () => {
  const faq = generateFAQSchema([
    {
      question: "Where can I buy Delta VFD in Vapi?",
      answer:
        "Millennium Automation System is an authorized Delta dealer in Vapi. We stock ME300, MS300, C2000, CP2000, and more with quick delivery across Vapi GIDC.",
    },
    {
      question: "Do you provide PLC/HMI/Drive programming support near me?",
      answer:
        "Yes. Our engineers provide on-site and remote programming for Delta PLC, HMI, and VFD in and around Vapi, Daman, Silvasa, and Gujarat.",
    },
    {
      question: "Are you an authorized Delta distributor in Gujarat?",
      answer:
        "Yes. We are an authorized Delta Electronics channel partner for Gujarat with genuine products, warranty, and technical support.",
    },
    {
      question: "What Delta products do you supply in Vapi?",
      answer:
        "VFD drives, PLC controllers, HMI panels, servo drives and motors, SMPS/PSU, encoders, and control panel solutions.",
    },
  ]);

  const structured = [generateOrganizationSchema(), faq];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={PAGE.title}
        description={PAGE.description}
        keywords={PAGE.keywords}
        canonical={generateCanonical(PAGE.path)}
        ogImage={generateOGImage("/og-image.svg")}
        ogType="website"
        structuredData={structured}
      />

      <section className="container mx-auto px-4 sm:px-6 py-10 sm:py-14 md:py-16">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
          Delta Dealer & Authorized Distributor in Vapi, Gujarat
        </h1>
        <p className="mt-4 text-gray-700 max-w-3xl">
          Millennium Automation System supplies Delta Electronics products in Vapi and across Gujarat —
          VFD drives, PLC, HMI, servo systems, and SMPS. Fast quotes, competitive pricing, and
          on-site commissioning and programming support in Vapi GIDC.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Link to="/product-list?category=vfd" className="border rounded-lg p-4 hover:shadow-md">
            <h2 className="font-semibold">Delta VFD Drives (ME300, MS300, C2000, CP2000)</h2>
            <p className="text-sm text-gray-600 mt-1">Buy Delta AC drives in Vapi with sizing help and commissioning support.</p>
          </Link>
          <Link to="/product-list?category=plc" className="border rounded-lg p-4 hover:shadow-md">
            <h2 className="font-semibold">Delta PLC (DVP-ES3/SV2/SE)</h2>
            <p className="text-sm text-gray-600 mt-1">Programmable controllers with I/O expansion, motion, and networking.</p>
          </Link>
          <Link to="/product-list?category=hmi" className="border rounded-lg p-4 hover:shadow-md">
            <h2 className="font-semibold">Delta HMI (TP/DOP Series)</h2>
            <p className="text-sm text-gray-600 mt-1">Touch panels with templates, recipes, and trending for production.</p>
          </Link>
          <Link to="/product-list?category=servo" className="border rounded-lg p-4 hover:shadow-md">
            <h2 className="font-semibold">Delta Servo (ASDA Series)</h2>
            <p className="text-sm text-gray-600 mt-1">Drives and motors for precise, high-speed motion applications.</p>
          </Link>
          <Link to="/product-list?category=smps" className="border rounded-lg p-4 hover:shadow-md">
            <h2 className="font-semibold">Delta SMPS / PSU (CliQ, Force-GT)</h2>
            <p className="text-sm text-gray-600 mt-1">Industrial power supplies with diagnostics and certifications.</p>
          </Link>
          <Link to="/product-list?category=encoders" className="border rounded-lg p-4 hover:shadow-md">
            <h2 className="font-semibold">Delta Encoders</h2>
            <p className="text-sm text-gray-600 mt-1">Incremental and absolute encoders for motion feedback.</p>
          </Link>
        </div>

        <div className="mt-10">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">Why choose us in Vapi?</h2>
          <ul className="mt-3 list-disc list-inside text-gray-700 space-y-1">
            <li>Authorized Delta distributor for Gujarat with Vapi-based stock and service</li>
            <li>Quick quotes and transparent pricing for Delta VFD/PLC/HMI/Servo</li>
            <li>On-site programming and commissioning support near Vapi GIDC</li>
            <li>Genuine products with warranty and post-sales assistance</li>
          </ul>
        </div>

        <div className="mt-10">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">Contact</h2>
          <p className="mt-2 text-gray-700">
            Call <a href="tel:+919904003445" className="text-blue-700 font-semibold">+91 99040 03445</a> or
            email <a href="mailto:millenniumautomationsystem@gmail.com" className="text-blue-700 font-semibold">millenniumautomationsystem@gmail.com</a>.
          </p>
          <p className="mt-1 text-gray-600">Address: {SITE_CONFIG.location.fullAddress}</p>
        </div>

        <div className="sr-only" aria-hidden="false">
          <p>
            Delta VFD price in Gujarat, Delta stockist Gujarat, Delta control panel Gujarat, VFD dealer Vapi,
            PLC supplier Vapi, HMI dealer Vapi, AC drive supplier Gujarat, Servo drive dist. Gujarat,
            Ind. automation dealer Vapi, Automation products Gujarat, Elec. automation Vapi, Industrial control supplier Vapi,
            Drive & PLC dealer Gujarat, Best Delta VFD dealer in Vapi Gujarat, Delta PLC supplier near me,
            Authorized Delta distributor Gujarat, Industrial automation company Vapi GIDC, Delta supplier near Vapi GIDC,
            mas vapi, mas gujarat, vfd near me, plc near me, hmi near me, Vfd delta support near me,
            Plc programming support near me, Hmi programming support near me, Vfd programming support near me,
            Industrial automation work near me.
          </p>
        </div>
      </section>
    </div>
  );
};

export default DeltaVapi;
