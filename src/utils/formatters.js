const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

export function formatDate(dateStr) {
  if (!dateStr) return "";
  const [y, m, d] = dateStr.split("-");
  return `${+d} ${MONTHS[+m - 1]} ${y}`;
}

export function formatTime(timeStr) {
  if (!timeStr) return "";
  const [h, m] = timeStr.split(":");
  const hr = +h;
  return `${hr % 12 || 12}:${m} ${hr >= 12 ? "PM" : "AM"}`;
}

export function buildWhatsAppMessage(occ, form, text) {
  const body = text || `You are warmly invited to celebrate ${occ.name} with ${form.senderName}.`;
  return `${occ.icons[0]}✨ *${occ.name.toUpperCase()} INVITATION* ✨${occ.icons[0]}\n\n${body}\n\n📅 *${formatDate(form.date)}* • ⏰ *${formatTime(form.time)}*\n📍 *${form.location}*\n\n— ${form.senderName}\n_InviteWala_ ✨`;
}

export function fallbackText(occ, form) {
  return `Dear ${form.recipName || "Friend"},\n\nYou are warmly invited to celebrate ${occ.name} with ${form.senderName}. It would be a joy to have your presence with us on this special occasion. We look forward to a wonderful celebration together!\n\n— ${form.senderName}`;
}
