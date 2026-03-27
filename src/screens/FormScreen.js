import React from "react";
import {
  View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity,
  SafeAreaView, StatusBar, KeyboardAvoidingView, Platform,
} from "react-native";
import { findOccasion } from "../constants/occasions";
import { useInviteStore } from "../store/inviteStore";
import ProgressDots from "../components/ProgressDots";
import BigButton from "../components/BigButton";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function FormScreen({ navigation }) {
  const occId  = useInviteStore(s => s.occasionId);
  const form   = useInviteStore(s => s.form);
  const setForm = useInviteStore(s => s.setForm);
  const occ    = findOccasion(occId);
  const [g1]   = occ.gradient;

  const [showDate, setShowDate] = React.useState(false);
  const [showTime, setShowTime] = React.useState(false);

  function validate() {
    if (!form.senderName.trim()) { alert("Please enter your name!"); return false; }
    if (!form.date)              { alert("Please pick a date!");       return false; }
    if (!form.time)              { alert("Please pick a time!");       return false; }
    if (!form.location.trim())   { alert("Please enter a venue!");     return false; }
    return true;
  }

  const dateObj = form.date ? new Date(form.date) : new Date();
  const timeObj = form.time
    ? (() => { const d = new Date(); const [h, m] = form.time.split(":"); d.setHours(+h, +m); return d; })()
    : new Date();

  const inputStyle = [styles.input, { borderColor: g1 + "33" }];
  const labelStyle = [styles.label, { color: g1 }];

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor="#0C0C14" />
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : undefined} style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">

          {/* Header */}
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
            <Text style={styles.backTxt}>← Back</Text>
          </TouchableOpacity>
          <View style={styles.headCenter}>
            <Text style={styles.occIcon}>{occ.icons[0]}</Text>
            <Text style={styles.occName}>{occ.name}</Text>
            <Text style={styles.sub}>Fill in the details</Text>
            <ProgressDots step={1} total={5} color={g1} />
          </View>

          {/* Form card */}
          <View style={styles.card}>
            <Text style={labelStyle}>YOUR NAME *</Text>
            <TextInput
              style={inputStyle} value={form.senderName} placeholderTextColor="rgba(255,255,255,0.25)"
              onChangeText={v => setForm({ senderName: v })} placeholder="e.g. Priya Sharma"
            />

            <Text style={[labelStyle, { marginTop: 14 }]}>GUEST NAME <Text style={styles.optional}>(optional)</Text></Text>
            <TextInput
              style={inputStyle} value={form.recipName} placeholderTextColor="rgba(255,255,255,0.25)"
              onChangeText={v => setForm({ recipName: v })} placeholder="e.g. All Friends / Rahul"
            />

            {/* Date & Time row */}
            <View style={styles.row}>
              <View style={{ flex: 1 }}>
                <Text style={[labelStyle, { marginTop: 14 }]}>DATE *</Text>
                <TouchableOpacity style={inputStyle} onPress={() => setShowDate(true)}>
                  <Text style={{ color: form.date ? "#fff" : "rgba(255,255,255,0.25)", fontFamily: "Poppins_400Regular", fontSize: 13 }}>
                    {form.date || "Pick date"}
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={[labelStyle, { marginTop: 14 }]}>TIME *</Text>
                <TouchableOpacity style={inputStyle} onPress={() => setShowTime(true)}>
                  <Text style={{ color: form.time ? "#fff" : "rgba(255,255,255,0.25)", fontFamily: "Poppins_400Regular", fontSize: 13 }}>
                    {form.time || "Pick time"}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {showDate && (
              <DateTimePicker
                value={dateObj} mode="date" display="default"
                onChange={(e, d) => {
                  setShowDate(false);
                  if (d) setForm({ date: d.toISOString().split("T")[0] });
                }}
              />
            )}
            {showTime && (
              <DateTimePicker
                value={timeObj} mode="time" display="default" is24Hour={false}
                onChange={(e, d) => {
                  setShowTime(false);
                  if (d) setForm({ time: `${String(d.getHours()).padStart(2,"0")}:${String(d.getMinutes()).padStart(2,"0")}` });
                }}
              />
            )}

            <Text style={[labelStyle, { marginTop: 14 }]}>VENUE *</Text>
            <TextInput
              style={inputStyle} value={form.location} placeholderTextColor="rgba(255,255,255,0.25)"
              onChangeText={v => setForm({ location: v })} placeholder="e.g. Community Hall, Pune"
            />

            <Text style={[labelStyle, { marginTop: 14 }]}>SPECIAL NOTE <Text style={styles.optional}>(optional)</Text></Text>
            <TextInput
              style={[inputStyle, { height: 64, textAlignVertical: "top" }]}
              value={form.note} placeholderTextColor="rgba(255,255,255,0.25)"
              onChangeText={v => setForm({ note: v })} placeholder="e.g. Please bring sweets! Dress traditionally."
              multiline
            />

            <View style={{ marginTop: 18 }}>
              <BigButton gradient={[occ.gradient[0], occ.gradient[1]]} onPress={() => validate() && navigation.navigate("Templates")}>
                Choose Template →
              </BigButton>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe:   { flex: 1, backgroundColor: "#0C0C14" },
  scroll: { padding: 16, paddingBottom: 40 },
  backBtn: { paddingVertical: 6, paddingHorizontal: 12, borderRadius: 16, borderWidth: 1.5, borderColor: "rgba(255,255,255,0.12)", alignSelf: "flex-start", marginBottom: 14 },
  backTxt: { fontFamily: "Poppins_400Regular", color: "rgba(255,255,255,0.45)", fontSize: 11 },
  headCenter: { alignItems: "center", marginBottom: 16 },
  occIcon: { fontSize: 30, marginBottom: 4 },
  occName: { fontFamily: "PlayfairDisplay_700Bold", fontSize: 18, color: "#fff" },
  sub:     { fontFamily: "Poppins_400Regular", color: "rgba(255,255,255,0.3)", fontSize: 11, marginTop: 2 },
  card:    { backgroundColor: "rgba(255,255,255,0.04)", borderWidth: 1, borderColor: "rgba(255,255,255,0.08)", borderRadius: 20, padding: 18 },
  label:   { fontFamily: "Poppins_700Bold", fontSize: 10, letterSpacing: 1.5, marginBottom: 6 },
  optional:{ color: "rgba(255,255,255,0.25)", fontSize: 9, fontFamily: "Poppins_400Regular" },
  input:   { backgroundColor: "rgba(255,255,255,0.08)", borderWidth: 1.5, borderRadius: 10, padding: 12, color: "#fff", fontSize: 13, fontFamily: "Poppins_400Regular", justifyContent: "center" },
  row:     { flexDirection: "row", gap: 10 },
});
