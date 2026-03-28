import React, { useRef, useState } from "react";
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity,
  SafeAreaView, StatusBar, TextInput, Share, Linking, Alert, Platform,
} from "react-native";
import { findOccasion } from "../constants/occasions";
import { findTemplate } from "../constants/templates";
import { findLanguage } from "../constants/languages";
import { buildWhatsAppMessage } from "../utils/formatters";
import { apiSaveInvite } from "../api/client";
import { useInviteStore } from "../store/inviteStore";
import InviteCard from "../components/InviteCard";
import BigButton from "../components/BigButton";

export default function PreviewScreen({ navigation }) {
  const occId        = useInviteStore(s => s.occasionId);
  const tmplId       = useInviteStore(s => s.templateId);
  const langCode     = useInviteStore(s => s.langCode);
  const form         = useInviteStore(s => s.form);
  const genText      = useInviteStore(s => s.generatedText);
  const setForm      = useInviteStore(s => s.setForm);
  const resetFlow    = useInviteStore(s => s.resetFlow);

  const occ  = findOccasion(occId);
  const tmpl = findTemplate(tmplId);
  const lang = findLanguage(langCode);
  const [g1, g2] = occ.gradient;

  const shotRef  = useRef(null);
  const [saving,   setSaving]   = useState(false);
  const [saved,    setSaved]    = useState(false);
  const [sharing,  setSharing]  = useState(false);

  const [waSent,   setWaSent]   = useState(false);
  const [copied,   setCopied]   = useState(false);
  const [dbSaved,  setDbSaved]  = useState(false);

  async function handleShare() {
    try {
      setSharing(true);
      const msg = buildWhatsAppMessage(occ, form, genText);
      await Share.share({ title: `${occ.name} Invitation`, message: msg });
    } catch (e) {
      if (e?.message !== "User did not share") Alert.alert("Share failed", "Please try WhatsApp instead.");
    } finally {
      setSharing(false);
    }
  }

  async function handleDownload() {
    Alert.alert("Screenshot", "Please take a screenshot of the card to save it to your gallery.");
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  }

  function handleWhatsApp() {
    const msg = buildWhatsAppMessage(occ, form, genText);
    const ph  = form.whatsapp.replace(/\D/g, "");
    const url = ph ? `https://wa.me/${ph}?text=${encodeURIComponent(msg)}` : `https://wa.me/?text=${encodeURIComponent(msg)}`;
    Linking.openURL(url).catch(() => Alert.alert("WhatsApp not installed"));
    setWaSent(true);
  }

  async function handleSaveToHistory() {
    try {
      await apiSaveInvite({
        occasionId: occ.id, occasionName: occ.name,
        senderName: form.senderName, recipName: form.recipName,
        eventDate: form.date, eventTime: form.time,
        location: form.location, note: form.note,
        language: langCode, templateId: tmplId,
        generatedText: genText,
      });
      setDbSaved(true);
      setTimeout(() => setDbSaved(false), 3000);
    } catch {
      Alert.alert("Not logged in", "Log in to save invites to your history.");
    }
  }

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor="#0C0C14" />
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>

        {/* Top bar */}
        <View style={styles.topBar}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
            <Text style={styles.backTxt}>← Back</Text>
          </TouchableOpacity>
          <Text style={styles.topInfo}>{occ.name} · {tmpl.name} · {lang.english}</Text>
        </View>

        {/* Card preview */}
        <View style={[styles.cardWrap, { borderColor: g1 + "44", shadowColor: g1 }]}>
          <View ref={shotRef} style={styles.cardShot}>
            <InviteCard occ={occ} form={form} generatedText={genText} templateId={tmplId} />
          </View>
        </View>

        {/* Action buttons */}
        <View style={styles.actions}>

          {/* Primary Share */}
          <BigButton gradient={[g1, g2]} onPress={handleShare} loading={sharing} style={styles.shadow}>
            📤  Share → WhatsApp / Instagram / Any App
          </BigButton>

          {/* WhatsApp text section */}
          <View style={styles.waBox}>
            <Text style={styles.waTitle}>💬 SEND TEXT ON WHATSAPP</Text>
            <View style={styles.waRow}>
              <View style={styles.countryCode}><Text style={styles.countryTxt}>+91</Text></View>
              <TextInput
                style={styles.waInput} value={form.whatsapp} placeholderTextColor="rgba(255,255,255,0.25)"
                onChangeText={v => setForm({ whatsapp: v.replace(/[^\d+\s]/g, "") })}
                placeholder="Number (optional)" keyboardType="phone-pad" maxLength={15}
              />
            </View>
            <TouchableOpacity style={styles.waSendBtn} onPress={handleWhatsApp} activeOpacity={0.85}>
              <Text style={styles.waSendTxt}>💬  Send Invite Text on WhatsApp</Text>
            </TouchableOpacity>
            {waSent && <Text style={styles.successMsg}>✅ WhatsApp opened!</Text>}
          </View>

          {/* Download */}
          <TouchableOpacity
            style={[styles.outlineBtn, { borderColor: saved ? "#22c55e" : g1 + "44" }]}
            onPress={handleDownload} disabled={saving} activeOpacity={0.8}
          >
            <Text style={[styles.outlineTxt, { color: saved ? "#22c55e" : g1 }]}>
              {saving ? "Generating PNG..." : saved ? "✅ Saved to Gallery!" : "📥  Download as PNG"}
            </Text>
          </TouchableOpacity>

          {/* Save to history */}
          <TouchableOpacity
            style={styles.ghostBtn} onPress={handleSaveToHistory} activeOpacity={0.8}
          >
            <Text style={[styles.ghostTxt, { color: dbSaved ? "#4ADE80" : "rgba(255,255,255,0.38)" }]}>
              {dbSaved ? "✅ Saved to History!" : "🗂️  Save to My Invites"}
            </Text>
          </TouchableOpacity>

          {/* Create another */}
          <TouchableOpacity
            style={styles.ghostBtn}
            onPress={() => { resetFlow(); navigation.navigate("Home"); }}
            activeOpacity={0.8}
          >
            <Text style={styles.ghostTxt}>＋  Create Another Invite</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.footer}>InviteWala · Made with ❤️ for India 🇮🇳</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe:   { flex: 1, backgroundColor: "#0C0C14" },
  scroll: { padding: 16, paddingBottom: 50 },
  topBar: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 14 },
  backBtn: { paddingVertical: 6, paddingHorizontal: 12, borderRadius: 16, borderWidth: 1.5, borderColor: "rgba(255,255,255,0.12)" },
  backTxt: { fontFamily: "Poppins_400Regular", color: "rgba(255,255,255,0.45)", fontSize: 11 },
  topInfo: { fontFamily: "Poppins_400Regular", color: "rgba(255,255,255,0.22)", fontSize: 10 },
  cardWrap: { borderRadius: 16, overflow: "hidden", borderWidth: 2, marginBottom: 18, shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.4, shadowRadius: 16, elevation: 12 },
  cardShot: { borderRadius: 14, overflow: "hidden" },
  actions: { gap: 10 },
  shadow:  { shadowOpacity: 0.4, shadowRadius: 16, elevation: 8 },
  waBox: { backgroundColor: "rgba(37,211,102,0.06)", borderWidth: 1.5, borderColor: "rgba(37,211,102,0.18)", borderRadius: 14, padding: 13 },
  waTitle: { fontFamily: "Poppins_700Bold", fontSize: 10, color: "#25D366", letterSpacing: 1.2, marginBottom: 9 },
  waRow:   { flexDirection: "row", gap: 8, marginBottom: 9 },
  countryCode: { backgroundColor: "rgba(255,255,255,0.07)", borderRadius: 8, paddingHorizontal: 12, justifyContent: "center", borderWidth: 1, borderColor: "rgba(255,255,255,0.1)" },
  countryTxt:  { fontFamily: "Poppins_400Regular", color: "rgba(255,255,255,0.38)", fontSize: 13 },
  waInput: { flex: 1, backgroundColor: "rgba(255,255,255,0.08)", borderWidth: 1.5, borderColor: "rgba(255,255,255,0.14)", borderRadius: 10, paddingHorizontal: 12, paddingVertical: 10, color: "#fff", fontSize: 13, fontFamily: "Poppins_400Regular" },
  waSendBtn: { borderRadius: 12, paddingVertical: 12, backgroundColor: "#25D366", alignItems: "center" },
  waSendTxt: { fontFamily: "Poppins_700Bold", fontSize: 13, color: "#fff" },
  successMsg:{ textAlign: "center", color: "#4ADE80", fontSize: 11, fontFamily: "Poppins_400Regular", marginTop: 6 },
  outlineBtn: { borderWidth: 1.5, borderRadius: 12, paddingVertical: 12, alignItems: "center" },
  outlineTxt: { fontFamily: "Poppins_700Bold", fontSize: 13 },
  ghostBtn:   { borderWidth: 1.5, borderRadius: 12, borderColor: "rgba(255,255,255,0.08)", paddingVertical: 11, alignItems: "center", backgroundColor: "rgba(255,255,255,0.04)" },
  ghostTxt:   { fontFamily: "Poppins_600SemiBold", fontSize: 12, color: "rgba(255,255,255,0.3)" },
  footer:     { textAlign: "center", marginTop: 16, color: "rgba(255,255,255,0.08)", fontSize: 9, fontFamily: "Poppins_400Regular" },
});
