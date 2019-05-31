import React from 'react';
import { Animated, FlatList, Text, TouchableOpacity } from "react-native";

const KeyboardView = ({
  keyboardOnPress,
  pinLength,
  pinSize,
  onComplete,
  bgColor,
  returnType,
  textColor,
  animatedDeleteButton,
  deleteText,
  animatedDeleteButtonOnPress,
  styles
}) => {
  const data = ["1", "2", "3", "4", "5", "6", "7", "8", "9", deleteText, "0"];
  const renderItem = ({ item, index }) => {
    let style;
    let onPressActive;
    let icon_Size = pinSize * 1.9 ;
    console.log('pinSize: ',pinSize)
    if (item === deleteText) {
      onPressActive = animatedDeleteButtonOnPress;
      style = [styles[0], {
        opacity: animatedDeleteButton
      }]
    } else {
      onPressActive = false;
      style = [styles[0]]
    }
    return (
      <TouchableOpacity activeOpacity={0.85}
        onPress={() => keyboardOnPress(item, returnType, pinLength, onComplete)}
        disabled={onPressActive}>
        <Animated.View style={[style, {
          backgroundColor: bgColor,
          borderColor: '#f1f1f1',
          borderWidth: 1,
          width: icon_Size,
          height: icon_Size
        }]}>
          <Text style={[styles[1], {
            color: textColor,
            opacity: 1,
            fontSize: pinSize
          }]}>{item}</Text>
        </Animated.View>
      </TouchableOpacity>
    )
  };
  return (
    <FlatList
      scrollEnabled={false}
      horizontal={false}
      vertical={true}
      numColumns={3}
      renderItem={renderItem}
      data={data}
      keyExtractor={(val, index) => "pinViewItem-" + index}
    />
  )
};
export default KeyboardView
