const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

export function formatDate(dateStr) {
  if (!dateStr) return "";
  // Handle both DD-MM-YYYY and YYYY-MM-DD formats
  const parts = dateStr.split("-");
  if (parts.length !== 3) return dateStr; // return as-is if not valid

  let d, m, y;
  if (parts[0].length === 4) {
    // YYYY-MM-DD
    [y, m, d] = parts;
  } else {
    // DD-MM-YYYY
    [d, m, y] = parts;
  }

  const monthName = MONTHS[+m - 1];
  if (!monthName) return dateStr;

  // Show short year if 4 digits
  const shortYear = y && y.length === 4 ? y.slice(2) : y;
  return `${+d} ${monthName} ${shortYear}`;
}

export function formatTime(timeStr) {
  if (!timeStr) return "";
  const parts = timeStr.split(":");
  if (parts.length !== 2) return timeStr; // return as-is if not HH:MM

  const [h, m] = parts;
  const hr = parseInt(h, 10);
  const min = m || "00";

  if (isNaN(hr)) return timeStr;

  const displayHr = hr % 12 || 12;
  const period = hr >= 12 ? "PM" : "AM";
  return `${displayHr}:${min.padStart(2, "0")} ${period}`;
}

export function buildWhatsAppMessage(occ, form, text) {
  const body = text || `You are warmly invited to celebrate ${occ.name} with ${form.senderName}.`;
  return `${occ.icons[0]}✨ *${occ.name.toUpperCase()} INVITATION* ✨${occ.icons[0]}\n\n${body}\n\n📅 *${formatDate(form.date)}* • ⏰ *${formatTime(form.time)}*\n📍 *${form.location}*\n\n— ${form.senderName}\n_InviteWala_ ✨`;
}

export function fallbackText(occ, form) {
  return `Dear ${form.recipName || "Friend"},\n\nYou are warmly invited to celebrate ${occ.name} with ${form.senderName}. It would be a joy to have your presence with us on this special occasion. We look forward to a wonderful celebration together!\n\n— ${form.senderName}`;
}
