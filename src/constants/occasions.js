export const CATEGORIES = [
  {
    id: "festivals",
    label: "Indian Festivals",
    emoji: "🪔",
    color: "#FF8C00",
    occasions: [
      { id: "diwali",    name: "Diwali",            gradient: ["#FF8C00","#FFD700"], icons: ["🪔","✨","🎆","🌸","🙏","💛","🎇","🌟","🏮","🌺"], bg: "#1C0800" },
      { id: "holi",      name: "Holi",              gradient: ["#F72585","#7209B7"], icons: ["🎨","🌈","💦","🌺","🥳","🎭","💜","🔴","🟡","🟢"], bg: "#150010" },
      { id: "navratri",  name: "Navratri",          gradient: ["#FF006E","#FB5607"], icons: ["💃","🪘","🌺","🔱","🎶","🌙","🧡","✨","🎊","🙏"], bg: "#1A0010" },
      { id: "ganesh",    name: "Ganesh Chaturthi",  gradient: ["#FF8C00","#FFD700"], icons: ["🙏","🌺","🍬","🌼","✨","🔱","🐘","🎊","💛","🌸"], bg: "#1A0800" },
      { id: "dussehra",  name: "Dussehra",          gradient: ["#7B2D8B","#E63946"], icons: ["🏹","🔱","🌟","🙏","⚔️","🎺","🌺","💜","✨","🎊"], bg: "#0A0015" },
      { id: "pongal",    name: "Pongal",            gradient: ["#2D9D3A","#96D35F"], icons: ["🍚","☀️","🐄","🌾","🌿","🎊","🌻","🍯","🎋","🌱"], bg: "#001200" },
      { id: "onam",      name: "Onam",              gradient: ["#F4A00B","#E8440A"], icons: ["🌸","🌺","🛶","🌾","🎊","✨","🌻","🍀","💛","🙏"], bg: "#1A0800" },
      { id: "baisakhi",  name: "Baisakhi",          gradient: ["#FFD700","#FF6B00"], icons: ["🌾","💛","🎊","🥁","🌸","☀️","🙏","✨","🌻","🎉"], bg: "#1A0800" },
      { id: "rakhi",     name: "Raksha Bandhan",    gradient: ["#FF69B4","#FFD700"], icons: ["🧡","🎀","✨","💛","🌸","🙏","💕","🌺","⭐","🎊"], bg: "#1A0010" },
      { id: "makar",     name: "Makar Sankranti",   gradient: ["#F4C430","#FF8C00"], icons: ["🪁","☀️","🌾","✨","🎊","💛","🌤️","🎋","🙏","🌸"], bg: "#1A0A00" },
    ],
  },
  {
    id: "global",
    label: "Global Celebrations",
    emoji: "🌍",
    color: "#4361EE",
    occasions: [
      { id: "eid",       name: "Eid Mubarak",      gradient: ["#0077B6","#48CAE4"], icons: ["🌙","⭐","🕌","🌹","🤲","🎁","💚","✨","🌟","🕊️"], bg: "#000D1A" },
      { id: "christmas", name: "Christmas",        gradient: ["#2D6A2D","#D62828"], icons: ["🎄","⭐","🎁","❄️","🦌","🔔","🤶","☃️","🕯️","🧧"], bg: "#001200" },
      { id: "newyear",   name: "New Year",         gradient: ["#1A1A2E","#E94560"], icons: ["🎆","🥂","🎉","✨","🎊","🌟","🍾","⏰","💫","🎇"], bg: "#050010" },
      { id: "valentine", name: "Valentine's Day",  gradient: ["#E63946","#FF8FA3"], icons: ["💕","🌹","💖","❤️","🥂","💌","💝","🌸","✨","💫"], bg: "#1A0008" },
      { id: "easter",    name: "Easter",           gradient: ["#96CEB4","#FFEAA7"], icons: ["🐣","🌸","🐰","🥚","🌷","✨","🌿","💛","🌈","🙏"], bg: "#001A0A" },
      { id: "halloween", name: "Halloween",        gradient: ["#FF6B00","#6B0000"], icons: ["🎃","👻","🕷️","🦇","🌙","💀","🕸️","🖤","🍬","⚡"], bg: "#0A0300" },
    ],
  },
  {
    id: "life",
    label: "Life Events",
    emoji: "🎂",
    color: "#FF6B9D",
    occasions: [
      { id: "birthday",    name: "Birthday",          gradient: ["#FF6B9D","#FFD93D"], icons: ["🎂","🎈","🎁","🥳","🎉","🕯️","🎀","🍰","✨","🎊"], bg: "#1A0010" },
      { id: "wedding",     name: "Wedding",           gradient: ["#C9184A","#FF8FA3"], icons: ["💍","🌹","🕊️","💒","🎊","💕","👰","🤵","🌸","💐"], bg: "#1A0008" },
      { id: "anniversary", name: "Anniversary",       gradient: ["#E63946","#FF8FA3"], icons: ["💑","🌹","💖","🥂","🎊","💍","❤️","🌸","✨","💕"], bg: "#1A0005" },
      { id: "babyshower",  name: "Baby Shower",       gradient: ["#48CAE4","#ADE8F4"], icons: ["👶","🍼","💙","🌸","⭐","🎀","🐣","🌈","💫","🎊"], bg: "#001A1A" },
      { id: "graduation",  name: "Graduation",        gradient: ["#4361EE","#7209B7"], icons: ["🎓","📜","🏆","🎉","⭐","📚","✏️","🎊","💡","🌟"], bg: "#000A1A" },
      { id: "engagement",  name: "Engagement",        gradient: ["#FFD700","#FF69B4"], icons: ["💍","💕","🥂","🌹","✨","💛","🎊","🌸","💖","⭐"], bg: "#1A1000" },
      { id: "retirement",  name: "Retirement",        gradient: ["#457B9D","#A8DADC"], icons: ["🌅","🎉","🥂","🏖️","🌟","👏","🌺","✈️","⛵","🎊"], bg: "#000A12" },
      { id: "naming",      name: "Naming Ceremony",   gradient: ["#A8DADC","#FFE0AC"], icons: ["👶","🌸","🙏","✨","💛","🌺","🎊","⭐","💕","🌼"], bg: "#001518" },
    ],
  },
  {
    id: "party",
    label: "Parties & Social",
    emoji: "🎉",
    color: "#C77DFF",
    occasions: [
      { id: "housewarming", name: "Housewarming",  gradient: ["#FF9A3C","#FF6B6B"], icons: ["🏠","🔑","🎊","🥂","✨","🌸","💛","🎉","🌟","🏡"], bg: "#1A0800" },
      { id: "kitty",        name: "Kitty Party",   gradient: ["#FF69B4","#C77DFF"], icons: ["👛","💄","🌸","🥂","✨","💅","💕","🌺","💋","🎉"], bg: "#1A0018" },
      { id: "farewell",     name: "Farewell Party",gradient: ["#6A0572","#C77DFF"], icons: ["👋","🌟","💐","🥂","✨","🎊","💕","🌸","💫","❤️"], bg: "#0A0015" },
      { id: "poolparty",    name: "Pool Party",    gradient: ["#0096C7","#90E0EF"], icons: ["🏊","🌊","☀️","🍹","🎉","👙","🏖️","💦","🌴","🎊"], bg: "#000810" },
      { id: "rooftop",      name: "Rooftop Party", gradient: ["#E94560","#1A1A2E"], icons: ["🌃","🥂","✨","🎉","🌟","🎶","💫","🍾","🌙","💃"], bg: "#05050F" },
      { id: "potluck",      name: "Potluck Party", gradient: ["#F4A261","#E76F51"], icons: ["🍲","🥘","🍽️","🎉","🥂","✨","🍜","🎊","😋","💛"], bg: "#1A0800" },
    ],
  },
  {
    id: "meetings",
    label: "Meetings & Events",
    emoji: "📋",
    color: "#2EC4B6",
    occasions: [
      { id: "society",   name: "Society Meeting",  gradient: ["#2EC4B6","#CBF3F0"], icons: ["🏢","📋","🤝","✅","📢","👥","💼","📅","🔔","✨"], bg: "#001A18" },
      { id: "school",    name: "School Meeting",   gradient: ["#4361EE","#7209B7"], icons: ["📚","🏫","✏️","👨‍👩‍👧","📋","🔔","🎒","📐","💡","⭐"], bg: "#000A1A" },
      { id: "pta",       name: "PTA Meeting",      gradient: ["#3A86FF","#8338EC"], icons: ["👨‍👩‍👧","📋","🏫","🤝","📢","✅","💡","📅","🔔","✨"], bg: "#000A1A" },
      { id: "agm",       name: "AGM / Committee",  gradient: ["#2D6A4F","#74C69D"], icons: ["🏛️","📊","🤝","📋","✅","💼","📢","👥","📅","⭐"], bg: "#001A0A" },
      { id: "corporate", name: "Corporate Event",  gradient: ["#023E8A","#48CAE4"], icons: ["💼","🤝","🏆","📊","✨","🌟","🎯","📅","🔔","⭐"], bg: "#000812" },
      { id: "seminar",   name: "Seminar/Workshop", gradient: ["#7209B7","#4361EE"], icons: ["🎤","📢","💡","📚","✨","🌟","🤝","🎯","📋","⭐"], bg: "#080015" },
    ],
  },
  {
    id: "special",
    label: "Special & More",
    emoji: "⭐",
    color: "#F4C430",
    occasions: [
      { id: "pooja",      name: "Pooja / Prayer",   gradient: ["#FF8C00","#FFD700"], icons: ["🙏","🪔","🌺","🌸","✨","💛","🌼","🔔","🕉️","⭐"], bg: "#1A0A00" },
      { id: "mehndi",     name: "Mehndi Ceremony",  gradient: ["#FF6B00","#FFD700"], icons: ["🌿","🌸","🎨","💛","✨","🌺","💕","🧡","🌼","💃"], bg: "#1A0A00" },
      { id: "mundan",     name: "Mundan Ceremony",  gradient: ["#FFD700","#FF8C00"], icons: ["✂️","🙏","🌸","💛","✨","🌺","🎊","⭐","🌼","💕"], bg: "#1A1000" },
      { id: "fundraiser", name: "Fundraiser",       gradient: ["#2D9D3A","#96D35F"], icons: ["❤️","🤝","🌟","💛","🎊","✨","💪","🌍","⭐","💕"], bg: "#001200" },
      { id: "workanniv",  name: "Work Anniversary", gradient: ["#023E8A","#48CAE4"], icons: ["🏆","💼","⭐","🎊","✨","🤝","🌟","🎯","💫","🎉"], bg: "#000812" },
      { id: "other",      name: "Custom Event",     gradient: ["#6A0572","#C77DFF"], icons: ["✨","🎊","🌟","🎈","💫","🙌","🎉","🎆","🌸","💥"], bg: "#0A0015" },
    ],
  },
];

export const ALL_OCCASIONS = CATEGORIES.flatMap(c => c.occasions);

export function findOccasion(id) {
  return ALL_OCCASIONS.find(o => o.id === id) || ALL_OCCASIONS[0];
}

export function findCategory(id) {
  return CATEGORIES.find(c => c.id === id) || CATEGORIES[0];
}
