import { StyleSheet } from "react-native";
import { autoSetBorderRadius } from "../../customDimensions";

const GrayShadowBox = StyleSheet.create({
    grayshadowbox:{
        shadowColor:"#000",
        shadowOpacity: 0.2,
        shadowRadius: 8,
        shadowOffset:{
            width:0,
            height:0
        },
        backgroundColor: "#fff",
        borderRadius: autoSetBorderRadius(15)
    }
})

export default GrayShadowBox;