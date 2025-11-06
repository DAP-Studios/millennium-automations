// Mapping and helpers for product images.
// Keep imports as static so Vite bundles the images.
import ME300_M from "@/assets/images/vfd/ME300_M.jpg";
import REG2000_M from "@/assets/images/vfd/REG2000_M.jpg";
import CP2000_M from "@/assets/images/vfd/CP2000_M.jpg";
import VFD_EL_W from "@/assets/images/vfd/VFD-EL-W_M.jpg";
import VFD_GENERIC from "@/assets/images/vfd/VFD.jpg";
import SMPS_JPG from "@/assets/images/smps/smps.jpg";
import INDUSTRIAL_POWER from "@/assets/images/smps/INDUSTRIAL_POWER_M.jpg";

// HMI images
import HMI1 from "@/assets/images/hmi/hmi1.jpg";
import HMI2 from "@/assets/images/hmi/hmi2.jpg";

// PLC images (DVP / AS series)
import PLC_AS from "@/assets/images/plc/dvp/AS_SERIES_M.jpg";
import PLC_DVP from "@/assets/images/plc/dvp/DVP50MC_M.jpg";

// Servo / Sarvo system images (folder name includes space: "sarvo system")
import SERVO_A2 from "@/assets/images/sarvo system/ASDA-A2_M.jpg";
import SERVO_A3 from "@/assets/images/sarvo system/ASDA-A3_M.jpg";
import SERVO_B2 from "@/assets/images/sarvo system/ASDA-B2_M.jpg";

export const productImages = {
  drives_ME300: ME300_M,
  drives_REG2000: REG2000_M,
  drives_CP2000: CP2000_M,
  drives_VFD_EL_W: VFD_EL_W,
  vfd_generic: VFD_GENERIC,
  smps: SMPS_JPG,
  industrial_power: INDUSTRIAL_POWER,
  hmi_1: HMI1,
  hmi_2: HMI2,
  plc_as: PLC_AS,
  plc_dvp: PLC_DVP,
  servo_a2: SERVO_A2,
  servo_a3: SERVO_A3,
  servo_b2: SERVO_B2,
};

/**
 * Pick a reasonable image for a product category.
 * Falls back to a generic VFD image if nothing matches.
 */
export function pickImageForCategory(category: string | undefined, idx = 0) {
  if (!category) return productImages.vfd_generic;

  const cat = category.toLowerCase();

  // VFD / drives
  if (cat === "vfd" || cat === "drives") {
    const variants = [productImages.drives_ME300, productImages.drives_REG2000, productImages.drives_CP2000, productImages.drives_VFD_EL_W];
    return variants[idx % variants.length] || productImages.vfd_generic;
  }

  // HMI
  if (cat === "hmi" || cat === "interface") {
    const variants = [productImages.hmi_1, productImages.hmi_2];
    return variants[idx % variants.length] || productImages.vfd_generic;
  }

  // PLC
  if (cat === "plc") {
    const variants = [productImages.plc_dvp, productImages.plc_as];
    return variants[idx % variants.length] || productImages.vfd_generic;
  }

  // Servo systems (accept servo or sarvo spellings)
  if (cat === "servo" || cat === "sarvo" || cat === "sarvo system") {
    const variants = [productImages.servo_a2, productImages.servo_a3, productImages.servo_b2];
    return variants[idx % variants.length] || productImages.vfd_generic;
  }

  // SMPS / power components
  if (cat === "smps" || cat === "power") return productImages.smps || productImages.vfd_generic;

  // default fallback
  return productImages.vfd_generic;
}

export default productImages;
