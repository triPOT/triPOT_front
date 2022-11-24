/* eslint-disable react/react-in-jsx-scope */
import {TouchableOpacity, Image} from 'react-native';

const BackBtn = props => {
  return (
    <TouchableOpacity style={props.style} onPress={props.onPress}>
      <Image source={'../img/backbtn.png'} />
    </TouchableOpacity>
  );
};

export default BackBtn;
