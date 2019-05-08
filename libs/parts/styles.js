import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  //passwordInputView
  passwordInputView          : {
    flexDirection: 'row',
    alignSelf    : 'center',
  },
  passwordInputViewItem      : {
    alignItems     : 'center',
    justifyContent : 'center',
    height         : 35,
    margin         : 5,
    width          : 35,
    borderRadius   : 35 / 2,
  },
  passwordInputViewItemActive: {
    alignItems     : 'center',
    justifyContent : 'center',
    height         : 35,
    width          : 35,
    margin         : 5,
    borderRadius   : 35 / 2,
  },
  // KeyboardView
  keyboardView               : {
    alignItems: 'center',
    marginTop : 35
  },
  keyboardViewItem           : {
    alignItems      : 'center',
    justifyContent  : 'center',
    height          : 55,
    width           : 55,
    marginHorizontal: 20,
    marginVertical  : 5,
    borderRadius    : 75 / 2,
  },
  keyboardViewItemText       : {
    fontSize  : 22,
    fontWeight: '900',
  },
})
