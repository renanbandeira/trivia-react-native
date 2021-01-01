import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Header = () => (
 <View style={{ flexDirection: "row" }}>
   <Text style={[styles.header, { color: "#E64C3C" }]}>t</Text>
   <Text style={[styles.header, { color: "#E57E31" }]}>r</Text>
   <Text style={[styles.header, { color: "#F1C431" }]}>i</Text>
   <Text style={[styles.header, { color: "#68CC73" }]}>v</Text>
   <Text style={[styles.header, { color: "#3998DB" }]}>i</Text>
   <Text style={[styles.header, { color: "#CD0FDB" }]}>a</Text>
 </View>
);

const styles = StyleSheet.create({
 header: {
   fontSize: 50,
   fontFamily: "kindergarten"
 }
});

export { Header };
