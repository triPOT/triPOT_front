import { TouchableOpacity } from "react-native";

const CommonTextBtn = (props) => {
    return(
        <TouchableOpacity
            style = {props.style}
            onPress = {props.onPress}
        >
            <Text style = {props.textStyle}>
                {props.content}
            </Text>
        </TouchableOpacity>
    )
}

// props explain
// style = 버튼 전체의 스타일 (textstyle을 따로 적용할 필요가 없는 경우 이것만 써도 괜찮음)
// onPress = 버튼 눌렀을 때 기능
// textStyle = textstyle이 따로 필요한 경우 적용
// content = 버튼 이름 적용

export default CommonTextBtn;