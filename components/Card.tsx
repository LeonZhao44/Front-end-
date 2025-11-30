import { View, StyleSheet } from "react-native";
import { theme } from "../config/theme";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

export function Card({ children }: CardProps) {
  return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.cream,
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: theme.colors.ink60,
  },
});

