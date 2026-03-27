import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { formatDate, formatTime } from "../../utils/formatters";

export default function LuxeCard({ occ, form, generatedText }) {
  const gold = "#C9A84C";
  const goldFade = "rgba(201,168,76,0.55)";

  return (
    <View style={styles.root}>
      {/* Corner decorations */}
      <Text style={[styles.corner, { top: 14, left: 14 }]}>✦</Text>
      <Text style={[styles.corner, { top: 14, right: 14 }]}>✦</Text>
      <Text style={[styles.corner, { bottom: 14, left: 14 }]}>✦</Text>
      <Text style={[styles.corner, { bottom: 14, right: 14 }]}>✦</Text>

      {/* Emoji strip header */}
      <Text style={styles.emojiRow}>{occ.icons.slice(0, 5).join(" ")}</Text>

      {/* Title */}
      <LinearGradient colors={[gold, "#F0D080", gold]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.titleGrad}>
        <Text style={styles.title}>{occ.name.toUpperCase()}</Text>
      </LinearGradient>

      <Text style={[styles.subtitle, { color: goldFade }]}>— Invitation —</Text>

      <View style={styles.divider} />

      {/* Host */}
      <Text style={[styles.hostLabel, { color: goldFade }]}>HOST</Text>
      <Text style={styles.hostName}>{form.senderName || "Your Name"}</Text>

      {form.recipName ? (
        <Text style={[styles.recipText, { color: "rgba(201,168,76,0.7)" }]}>
          invites  •  {form.recipName}
        </Text>
      ) : null}

      {/* Body text */}
      <Text style={styles.bodyText}>{generatedText || ""}</Text>

      {/* Details box */}
      <View style={styles.detailsBox}>
        <View style={styles.detailItem}>
          <Text style={styles.detailEmoji}>📅</Text>
          <Text style={[styles.detailLabel, { color: goldFade }]}>DATE</Text>
          <Text style={styles.detailValue}>{formatDate(form.date) || "—"}</Text>
        </View>
        <View style={styles.detailDivider} />
        <View style={styles.detailItem}>
          <Text style={styles.detailEmoji}>⏰</Text>
          <Text style={[styles.detailLabel, { color: goldFade }]}>TIME</Text>
          <Text style={styles.detailValue}>{formatTime(form.time) || "—"}</Text>
        </View>
        <View style={[styles.detailDivider, { width: "90%" }]} />
        <View style={styles.detailItem}>
          <Text style={styles.detailEmoji}>📍</Text>
          <Text style={[styles.detailLabel, { color: goldFade }]}>VENUE</Text>
          <Text style={styles.detailValue}>{form.location || "—"}</Text>
        </View>
      </View>

      {form.note ? (
        <Text style={[styles.noteText, { color: goldFade }]}>"{form.note}"</Text>
      ) : null}

      {/* Footer emojis */}
      <Text style={styles.emojiRow}>{occ.icons.join(" ")}</Text>

      {/* Footer */}
      <LinearGradient colors={["#0D0D0D", gold, gold, "#0D0D0D"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.footer}>
        <Text style={styles.footerText}>✦  InviteWala  ✦</Text>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#0D0D0D",
    borderWidth: 2,
    borderColor: "#C9A84C",
    borderRadius: 16,
    padding: 20,
    alignItems: "center",
    position: "relative",
  },
  corner: {
    position: "absolute",
    color: "#C9A84C",
    fontSize: 16,
    fontWeight: "700",
  },
  emojiRow: { fontSize: 22, marginVertical: 8, textAlign: "center" },
  titleGrad: { borderRadius: 4, paddingHorizontal: 8, marginBottom: 4 },
  title: {
    fontFamily: "PlayfairDisplay_900Black",
    fontSize: 26,
    color: "#C9A84C",
    textAlign: "center",
    letterSpacing: 1,
  },
  subtitle: {
    fontFamily: "Poppins_700Bold_Italic",
    fontSize: 13,
    marginBottom: 8,
    fontStyle: "italic",
  },
  divider: {
    width: "80%",
    height: 1,
    backgroundColor: "rgba(201,168,76,0.4)",
    marginVertical: 8,
  },
  hostLabel: {
    fontFamily: "Poppins_500Medium",
    fontSize: 10,
    letterSpacing: 2,
    marginTop: 4,
  },
  hostName: {
    fontFamily: "PlayfairDisplay_900Black",
    fontSize: 28,
    color: "#fff",
    textAlign: "center",
    marginBottom: 4,
  },
  recipText: {
    fontFamily: "Poppins_500Medium",
    fontSize: 13,
    marginBottom: 10,
  },
  bodyText: {
    fontFamily: "Poppins_500Medium",
    fontSize: 13,
    color: "#E0D5C5",
    textAlign: "center",
    lineHeight: 22,
    marginVertical: 12,
    paddingHorizontal: 8,
  },
  detailsBox: {
    width: "100%",
    backgroundColor: "rgba(201,168,76,0.07)",
    borderWidth: 1,
    borderColor: "rgba(201,168,76,0.28)",
    borderRadius: 12,
    padding: 12,
    alignItems: "center",
    marginVertical: 10,
    gap: 6,
  },
  detailItem: { alignItems: "center" },
  detailEmoji: { fontSize: 18 },
  detailLabel: {
    fontFamily: "Poppins_700Bold",
    fontSize: 9,
    letterSpacing: 1.5,
    marginTop: 2,
  },
  detailValue: {
    fontFamily: "Poppins_700Bold",
    fontSize: 13,
    color: "#fff",
    textAlign: "center",
  },
  detailDivider: {
    width: "60%",
    height: 1,
    backgroundColor: "rgba(201,168,76,0.2)",
    marginVertical: 4,
  },
  noteText: {
    fontFamily: "Poppins_500Medium",
    fontSize: 12,
    fontStyle: "italic",
    textAlign: "center",
    marginVertical: 6,
  },
  footer: {
    width: "110%",
    paddingVertical: 10,
    alignItems: "center",
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
    marginTop: 10,
    marginBottom: -20,
  },
  footerText: {
    fontFamily: "Poppins_700Bold",
    fontSize: 11,
    color: "#0D0D0D",
  },
});
