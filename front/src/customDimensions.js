/* eslint-disable react-hooks/rules-of-hooks */
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {useWindowDimensions} from 'react-native';

const FIGMA_WINDOW_WIDTH = 428;
const FIGMA_WINDOW_HEIGHT = 926;

export const widthPercentage = size => {
  const percentage = (size / FIGMA_WINDOW_WIDTH) * 100;

  return responsiveScreenWidth(percentage);
}

export const heightPercentage = size => {
  const percentage = (size / FIGMA_WINDOW_HEIGHT) * 100;

  return responsiveScreenHeight(percentage);
}

export const fontPercentage = size => {
  // const percentage = size*0.135;
  //이건 알맞은 fonsize 비율을 찾아야 함.

  // return responsiveScreenFontSize(percentage);
  return (size / FIGMA_WINDOW_WIDTH) * useWindowDimensions().width;
};

export const autoSetBorderRadius = size => {
  return (size / FIGMA_WINDOW_WIDTH) * useWindowDimensions().width;
};
