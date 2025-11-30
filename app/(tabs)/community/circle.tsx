import { Text, StyleSheet, ScrollView } from "react-native";
import { theme } from "../../../config/theme";
import { Section } from "../../../components/Section";
import { Card } from "../../../components/Card";

export default function CircleScreen() {
  return (
    <ScrollView style={styles.container}>
      <Section title="Your Pattern in Context">
        <Card>
          <Text style={styles.text}>View your pattern in context with your circle.</Text>
        </Card>
      </Section>
      <Section title="Circle Pulse">
        <Card>
          <Text style={styles.text}>See the pulse of your circle.</Text>
        </Card>
      </Section>
      <Section title="Shared Experiments">
        <Card>
          <Text style={styles.text}>Explore shared experiments from your circle.</Text>
        </Card>
      </Section>
      <Section title="Highlights">
        <Card>
          <Text style={styles.text}>Check out highlights from your circle.</Text>
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

