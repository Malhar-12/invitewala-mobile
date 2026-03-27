import React from "react";
import LuxeCard from "./cards/LuxeCard";
import ModernCard from "./cards/ModernCard";
import FloralCard from "./cards/FloralCard";
import VibrantCard from "./cards/VibrantCard";

// Unified card switcher — pass this to ViewShot for image export
export default function InviteCard({ occ, form, generatedText, templateId }) {
  const props = { occ, form, generatedText };
  switch (templateId) {
    case "modern":  return <ModernCard {...props} />;
    case "floral":  return <FloralCard {...props} />;
    case "vibrant": return <VibrantCard {...props} />;
    default:        return <LuxeCard {...props} />;
  }
}
