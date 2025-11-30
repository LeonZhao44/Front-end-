import { View, Text, StyleSheet } from "react-native";
import { theme } from "../config/theme";
import { ReactNode } from "react";

interface SectionProps {
  title: string;
  children: ReactNode;
}

export function Section({ title, children }: SectionProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  title: {
    fontSize: theme.type.header,
    fontWeight: "600",
    color: theme.colors.ink,
    marginBottom: 8,
  },
});

