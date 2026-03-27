import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { formatDate, formatTime } from "../../utils/formatters";

export default function ModernCard({ occ, form, generatedText }) {
  const [g1, g2] = occ.gradient;

  return (
    <View style={styles.root}>
      {/* Side accent */}
      <LinearGradient colors={[g1, g2]} style={styles.sideBar} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} />

      {/* Header */}
      <LinearGradient colors={[g1, g2]} style={styles.header} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
        <Text style={styles.headerEmojis}>{occ.icons.slice(0, 4).join(" ")}</Text>
        <Text style={styles.headerTitle}>{occ.name.toUpperCase()}</Text>
        <Text style={styles.headerSub}>YOU'RE INVITED</Text>
      </LinearGradient>

      <View style={styles.body}>
        <Text style={styles.hostName}>{form.senderName || "Your Name"}</Text>
        {form.recipName ? (
          <Text style={[styles.recipText, { color: g1 }]}>invites  ›  {form.recipName}</Text>
        ) : null}

        <View style={[styles.accentLine, { backgroundColor: g1 }]} />

        <Text style={styles.bodyText}>{generatedText || ""}</Text>

        {/* Three detail cards */}
        <View style={styles.detailRow}>
          {[
            { emoji: "📅", label: "DATE", value: formatDate(form.date) || "—" },
            { emoji: "⏰", label: "TIME", value: formatTime(form.time) || "—" },
            { emoji: "📍", label: "VENUE", value: form.location || "—" },
          ].map((item) => (
            <View key={item.label} style={[styles.detailCard, { borderColor: g1 + "33", backgroundColor: g1 + "10" }]}>
              <Text style={styles.detailEmoji}>{item.emoji}</Text>
              <Text style={[styles.detailLabel, { color: g1 }]}>{item.label}</Text>
              <Text style={styles.detailValue} numberOfLines={2}>{item.value}</Text>
            </View>
          ))}
        </View>

        {form.note ? (
          <Text style={[styles.noteText, { color: g1 }]}>"{form.note}"</Text>
        ) : null}

        <Text style={styles.emojiStrip}>{occ.icons.join(" ")}</Text>
      </View>

      {/* Footer */}
      <LinearGradient colors={[g1, g2]} style={styles.footer} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
        <Text style={styles.footerText}>InviteWala · invitewala.in</Text>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#F5F5F5",
    borderRadius: 16,
    overflow: "hidden",
    flexDirection: "column",
  },
  sideBar: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: 10,
    zIndex: 1,
  },
  header: {
    paddingTop: 20,
    paddingBottom: 16,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  headerEmojis: { fontSize: 26, marginBottom: 4 },
  headerTitle: {
    fontFamily: "PlayfairDisplay_900Black",
    fontSize: 24,
    color: "#fff",
    textAlign: "center",
    letterSpacing: 1,
  },
  headerSub: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 11,
    color: "rgba(255,255,255,0.75)",
    letterSpacing: 2,
    marginTop: 2,
  },
  body: {
    paddingHorizontal: 22,
    paddingTop: 16,
    paddingBottom: 12,
    marginLeft: 10,
    alignItems: "center",
  },
  hostName: {
    fontFamily: "PlayfairDisplay_900Black",
    fontSize: 26,
    color: "#111",
    textAlign: "center",
  },
  recipText: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 13,
    marginTop: 4,
  },
  accentLine: {
    width: 60,
    height: 4,
    borderRadius: 2,
    marginVertical: 12,
  },
  bodyText: {
    fontFamily: "Poppins_500Medium",
    fontSize: 13,
    color: "#333",
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 14,
  },
  detailRow: {
    flexDirection: "row",
    gap: 8,
    width: "100%",
    marginBottom: 10,
  },
  detailCard: {
    flex: 1,
    borderWidth: 1.5,
    borderRadius: 10,
    padding: 8,
    alignItems: "center",
  },
  detailEmoji: { fontSize: 18, marginBottom: 2 },
  detailLabel: {
    fontFamily: "Poppins_700Bold",
    fontSize: 8,
    letterSpacing: 1.5,
  },
  detailValue: {
    fontFamily: "Poppins_700Bold",
    fontSize: 11,
    color: "#111",
    textAlign: "center",
    marginTop: 2,
  },
  noteText: {
    fontFamily: "Poppins_500Medium",
    fontSize: 12,
    fontStyle: "italic",
    textAlign: "center",
    marginBottom: 8,
  },
  emojiStrip: { fontSize: 16, textAlign: "center", marginTop: 4 },
  footer: {
    paddingVertical: 10,
    alignItems: "center",
  },
  footerText: {
    fontFamily: "Poppins_700Bold",
    fontSize: 11,
    color: "#fff",
  },
});
