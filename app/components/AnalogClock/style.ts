import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    clock: {
      width: 200,
      height: 200,
      borderRadius: 100,
      borderWidth: 2,
      borderColor: "#666",
      position: "relative",
      alignItems: "center",
      justifyContent: "center",
    },
    hourMark: {
      position: "absolute",
      width: 4,
      height: 15,
      backgroundColor: "#666",
      borderRadius: 2,
    },
    hourHand: {
      position: "absolute",
      width: 4,
      height: 60,
      backgroundColor: "#333",
      borderRadius: 2,
      bottom: "50%",
      transformOrigin: "bottom",
    },
    minuteHand: {
      position: "absolute",
      width: 3,
      height: 80,
      backgroundColor: "#666",
      borderRadius: 2,
      bottom: "50%",
      transformOrigin: "bottom",
    },
    secondHand: {
      position: "absolute",
      width: 2,
      height: 90,
      backgroundColor: "#ff0000",
      borderRadius: 1,
      bottom: "50%",
      transformOrigin: "bottom",
    },
    centerPoint: {
      width: 12,
      height: 12,
      borderRadius: 6,
      backgroundColor: "#666",
      position: "absolute",
    },
  });
  export default styles;