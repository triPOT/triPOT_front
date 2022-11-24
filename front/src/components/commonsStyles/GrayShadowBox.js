import { StyleSheet } from "react-native";
// import { autoSetBorderRadius } from "../../customDimensions";

const GrayShadowBox = StyleSheet.create({
  grayshadowbox: {
    backgroundColor: "#fff",
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowRadius: 8,
        shadowOffset: {
          width: 0,
          height: 0,
        },
      },
      android: {
        elevation: 5,
      },
    }),
  },
});

export default GrayShadowBox;