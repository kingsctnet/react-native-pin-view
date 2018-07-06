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
    backgroundColor: '#FFFFFF',
  },
  passwordInputViewItemActive: {
    alignItems     : 'center',
    justifyContent : 'center',
    height         : 35,
    width          : 35,
    margin         : 5,
    borderRadius   : 35 / 2,
    backgroundColor: '#FFFFFF',
  },
  // KeyboardView
  keyboardView               : {
    alignItems: 'center',
    marginTop : 15
  },
  keyboardViewItem           : {
    alignItems      : 'center',
    justifyContent  : 'center',
    height          : 75,
    width           : 75,
    marginHorizontal: 20,
    marginVertical  : 5,
    borderRadius    : 75 / 2,
    backgroundColor : 'rgba(255,255,255,0.05)',
  },
  keyboardViewItemText       : {
    fontSize  : 22,
    fontWeight: '900',
    color     : 'rgba(255,255,255,0.5)'
  },
})