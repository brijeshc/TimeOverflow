import { View } from "react-native";
import styles from "./style";
import { useState, useEffect } from "react";

const AnalogClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours() % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const hourDegrees = (hours + minutes / 60) * 30;
  const minuteDegrees = (minutes + seconds / 60) * 6;
  const secondDegrees = seconds * 6;

  return (
    <View style={styles.clock}>
      {[...Array(12)].map((_, i) => (
        <View
          key={i}
          style={[
            styles.hourMark,
            {
              transform: [{ rotate: `${i * 30}deg` }, { translateY: -90 }],
            },
          ]}
        />
      ))}

      <View style={[styles.hourHand, { transform: [{ rotate: `${hourDegrees}deg` }] }]} />
      <View style={[styles.minuteHand, { transform: [{ rotate: `${minuteDegrees}deg` }] }]} />
      <View style={[styles.secondHand, { transform: [{ rotate: `${secondDegrees}deg` }] }]} />
      <View style={styles.centerPoint} />
    </View>
  );
};

export default AnalogClock;