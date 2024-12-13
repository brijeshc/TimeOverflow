import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import AnalogClock from "@/app/components/AnalogClock/AnalogClock";
import { useFonts } from 'expo-font';
import styles from "./style";

export default function HomeScreen() {
  const [fontsLoaded] = useFonts({
    'Poppins-Bold': require('@/assets/fonts/Poppins-BoldItalic.ttf'),
    'Quicksand-Medium': require('@/assets/fonts/Quicksand-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.clockContainer}>
        <AnalogClock />
      </ThemedView>
      <ThemedView style={styles.dashboardContainer}>
        <ThemedText style={{ fontFamily: 'Poppins-Bold', fontSize: 32 }} type="title">
          TimeOverflow
        </ThemedText>
        <ThemedText style={{ fontFamily: 'Quicksand-Medium', fontSize: 18 }} type="subtitle">
          Your Time Management Dashboard
        </ThemedText>
      </ThemedView>
    </ThemedView>
  );
}
