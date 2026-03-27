export const TEMPLATES = [
  {
    id: "luxe",
    name: "Luxe Gold",
    desc: "Dark & Elegant",
    preview: { bg: "#0D0D0D", text: "#C9A84C" },
  },
  {
    id: "modern",
    name: "Modern Bold",
    desc: "Clean & Minimal",
    preview: { bg: "#F0F0F0", text: "#111" },
  },
  {
    id: "floral",
    name: "Floral Garden",
    desc: "Soft & Pretty",
    preview: { bg: "#FDF6EE", text: "#2D1A00" },
  },
  {
    id: "vibrant",
    name: "Vibrant Fest",
    desc: "Colorful & Fun",
    preview: { bg: null, text: "#fff" }, // uses occasion gradient
  },
];

export function findTemplate(id) {
  return TEMPLATES.find(t => t.id === id) || TEMPLATES[0];
}
