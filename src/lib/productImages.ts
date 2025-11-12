// Mapping and helpers for product images.
// Keep imports as static so Vite bundles the images.

// VFD images
import ME300_M from "@/assets/images/vfd/ME300_M.jpg";
import REG2000_M from "@/assets/images/vfd/REG2000_M.jpg";
import CP2000_M from "@/assets/images/vfd/CP2000_M.jpg";
import VFD_EL_W from "@/assets/images/vfd/VFD-EL-W_M.jpg";
import VFD_cover from "@/assets/images/vfd/vfd2.jpg";
import C2000_HS from "@/assets/images/vfd/C 2000-HS.jpg";


// SMPS images
import SMPS_JPG from "@/assets/images/smps/smps.jpg";
import INDUSTRIAL_POWER from "@/assets/images/smps/INDUSTRIAL_POWER_M.jpg";
import SMPS_cover from "@/assets/images/smps/smps.png";

// HMI images
import HMI1 from "@/assets/images/hmi/hmi1.jpg";
import HMI2 from "@/assets/images/hmi/hmi2.jpg";
import HMI3 from "@/assets/images/hmi/hmi3.jpg";  
import HMI4 from "@/assets/images/hmi/hmi4.jpg";
import HMI5 from "@/assets/images/hmi/hmi6.jpg";
import HMI6 from "@/assets/images/hmi/hmi7.jpg";
import HMI7 from "@/assets/images/hmi/hmi9.jpg";
import HMI_cover from "@/assets/images/hmi/HMI.png";

// PLC images (DVP / AS series)
import PLC_AS from "@/assets/images/plc/AS_SERIES_M.jpg";
import PLC_DVP from "@/assets/images/plc/DVP50MC_M.jpg";
import PLC_cover from "@/assets/images/plc/PLC.png";

// Servo / Sarvo system images (folder name includes space: "sarvo system")
import SERVO_A2 from "@/assets/images/sarvo system/ASDA-A2_M.jpg";
import SERVO_A3 from "@/assets/images/sarvo system/ASDA-A3_M.jpg";
import SERVO_B2 from "@/assets/images/sarvo system/ASDA-B2_M.jpg";
import SERVO_cover from "@/assets/images/sarvo system/servo.png";

// Cover images per category
const coverImages = {
  vfd_cover: VFD_cover,
  hmi_cover: HMI_cover,
  plc_cover: PLC_cover,
  servo_cover: SERVO_cover,
  smps_cover: SMPS_cover,
};

// All variant images organized by category
const categoryVariants = {
  vfd: [ME300_M, REG2000_M, CP2000_M, VFD_EL_W],
  hmi: [HMI1, HMI2, HMI3, HMI4, HMI5, HMI6, HMI7],
  plc: [PLC_DVP, PLC_AS],
  servo: [SERVO_A2, SERVO_A3, SERVO_B2],
  smps: [SMPS_JPG, INDUSTRIAL_POWER],
};

export const productImages = {
  // VFD images
  drives_ME300: ME300_M,
  drives_REG2000: REG2000_M,
  drives_CP2000: CP2000_M,
  drives_VFD_EL_W: VFD_EL_W,
  vfd_cover: VFD_cover,

  // SMPS images
  smps: SMPS_JPG,
  industrial_power: INDUSTRIAL_POWER,
  smps_cover: SMPS_JPG,

  // HMI images
  hmi_1: HMI1,
  hmi_2: HMI2,
  hmi_3: HMI3,
  hmi_4: HMI4,
  hmi_5: HMI5,
  hmi_6: HMI6,
  hmi_7: HMI7,
  hmi_cover: HMI1,

  // PLC images
  plc_as: PLC_AS,
  plc_dvp: PLC_DVP,
  plc_cover: PLC_DVP,

  // Servo images
  servo_a2: SERVO_A2,
  servo_a3: SERVO_A3,
  servo_b2: SERVO_B2,
  servo_cover: SERVO_A2,
};

/**
 * Get the cover image for a specific product category.
 * Used for the main product display in the grid.
 */
export function getCoverImageForCategory(category: string | undefined): string {
  if (!category) return coverImages.vfd_cover;

  const cat = category.toLowerCase();

  if (cat === "vfd" || cat === "drives") return coverImages.vfd_cover;
  if (cat === "hmi" || cat === "interface") return coverImages.hmi_cover;
  if (cat === "plc") return coverImages.plc_cover;
  if (cat === "servo" || cat === "sarvo" || cat === "sarvo system") return coverImages.servo_cover;
  if (cat === "smps" || cat === "power") return coverImages.smps_cover;

  return coverImages.vfd_cover;
}

/**
 * Pick a reasonable image for a product category based on index.
 * Used for carousel/gallery views to show different images.
 * Falls back to cover image if nothing matches.
 */
export function pickImageForCategory(category: string | undefined, idx = 0): string {
  if (!category) return coverImages.vfd_cover;

  const cat = category.toLowerCase();

  // Get variants for category
  if (cat === "vfd" || cat === "drives") {
    const variants = categoryVariants.vfd;
    return variants[idx % variants.length] || coverImages.vfd_cover;
  }

  if (cat === "hmi" || cat === "interface") {
    const variants = categoryVariants.hmi;
    return variants[idx % variants.length] || coverImages.hmi_cover;
  }

  if (cat === "plc") {
    const variants = categoryVariants.plc;
    return variants[idx % variants.length] || coverImages.plc_cover;
  }

  if (cat === "servo" || cat === "sarvo" || cat === "sarvo system") {
    const variants = categoryVariants.servo;
    return variants[idx % variants.length] || coverImages.servo_cover;
  }

  if (cat === "smps" || cat === "power") {
    const variants = categoryVariants.smps;
    return variants[idx % variants.length] || coverImages.smps_cover;
  }

  // default fallback
  return coverImages.vfd_cover;
}

export default productImages;
