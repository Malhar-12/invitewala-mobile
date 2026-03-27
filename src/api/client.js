import AsyncStorage from "@react-native-async-storage/async-storage";

// ── Change this to your server URL when deploying ──
// For local development with Expo on a device/emulator:
//   Android emulator → http://10.0.2.2:3001
//   iOS simulator    → http://localhost:3001
//   Real device      → http://<your-lan-ip>:3001
const BASE_URL = "http://172.24.208.1:3001";

async function getToken() {
  return AsyncStorage.getItem("@invitewala_token");
}

async function request(path, options = {}) {
  const token = await getToken();
  const headers = {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...options.headers,
  };
  const res = await fetch(`${BASE_URL}${path}`, { ...options, headers });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || "Request failed");
  return data;
}

// ── Auth ──────────────────────────────────────────────
export async function apiRegister(name, email, password) {
  const data = await request("/auth/register", {
    method: "POST",
    body: JSON.stringify({ name, email, password }),
  });
  if (data.token) await AsyncStorage.setItem("@invitewala_token", data.token);
  return data;
}

export async function apiLogin(email, password) {
  const data = await request("/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
  if (data.token) await AsyncStorage.setItem("@invitewala_token", data.token);
  return data;
}

export async function apiLogout() {
  await AsyncStorage.removeItem("@invitewala_token");
}

export async function apiGetMe() {
  return request("/auth/me");
}

// ── Generate ─────────────────────────────────────────
export async function apiGenerate(payload) {
  return request("/generate", { method: "POST", body: JSON.stringify(payload) });
}

// ── Invites ──────────────────────────────────────────
export async function apiGetInvites() {
  return request("/invites");
}

export async function apiSaveInvite(payload) {
  return request("/invites", { method: "POST", body: JSON.stringify(payload) });
}

export async function apiDeleteInvite(id) {
  return request(`/invites/${id}`, { method: "DELETE" });
}
