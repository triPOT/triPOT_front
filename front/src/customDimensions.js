import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {useWindowDimensions} from 'react-native';

const {height, width} = useWindowDimensions();

const FIGMA_WINDOW_WIDTH = 428;
const FIGMA_WINDOW_HEIGHT = 926;

export function widthPercentage(size) {
  const percentage = (size / FIGMA_WINDOW_WIDTH) * 100;

  return responsiveScreenWidth(percentage);
}

export function heightPercentage(size) {
  const percentage = (size / FIGMA_WINDOW_HEIGHT) * 100;

  return responsiveScreenHeight(percentage);
}

export function fontPercentage(size) {
  // const percentage = size*0.135;
  //이건 알맞은 fonsize 비율을 찾아야 함.

  // return responsiveScreenFontSize(percentage);
  return (size / FIGMA_WINDOW_WIDTH) * width;
}

export function autoSetBorderRadius(size) {
  return (size / FIGMA_WINDOW_WIDTH) * width;
}
