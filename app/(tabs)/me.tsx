import { View, Text, StyleSheet, ScrollView } from "react-native";
import { theme } from "../../config/theme";
import { Section } from "../../components/Section";
import { Card } from "../../components/Card";

export default function MeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Section title="My Profile">
        <Card>
          <Text style={styles.text}>Welcome to your profile!</Text>
        </Card>
      </Section>
      <Section title="My Health">
        <Card>
          <Text style={styles.text}>Track your health metrics here.</Text>
        </Card>
      </Section>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.cream,
  },
  text: {
    fontSize: theme.type.body,
    color: theme.colors.ink,
  },
});

