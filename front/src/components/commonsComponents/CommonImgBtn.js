import { TouchableOpacity, Image } from "react-native";

const CommonImgBtn = (props) => {
    return(
        <TouchableOpacity
            style = {props.style}
            onPress = {props.onPress}
        >
            <Image
                style = {props.imgStyle}
                source = {require(props.source)}
            />
        </TouchableOpacity>
    )
}

export default CommonImgBtn;