import { Text, StyleSheet, ScrollView } from "react-native";
import { theme } from "../../../config/theme";
import { Section } from "../../../components/Section";
import { Card } from "../../../components/Card";

export default function EveryoneScreen() {
  return (
    <ScrollView style={styles.container}>
      <Section title="Community Patterns">
        <Card>
          <Text style={styles.text}>Discover patterns from the entire community.</Text>
        </Card>
      </Section>
      <Section title="Explore Patterns">
        <Card>
          <Text style={styles.text}>Explore and learn from community patterns.</Text>
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

