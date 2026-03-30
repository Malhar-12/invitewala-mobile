import React from "react";
import LuxeCard from "./cards/LuxeCard";
import ModernCard from "./cards/ModernCard";
import FloralCard from "./cards/FloralCard";
import VibrantCard from "./cards/VibrantCard";
import { getTranslation } from "../constants/translations";

// Unified card switcher
export default function InviteCard({ occ, form, generatedText, templateId, langCode = "en" }) {
  const t = getTranslation(langCode);
  const props = { occ, form, generatedText, t };
  switch (templateId) {
    case "modern":  return <ModernCard {...props} />;
    case "floral":  return <FloralCard {...props} />;
    case "vibrant": return <VibrantCard {...props} />;
    default:        return <LuxeCard {...props} />;
  }
}
