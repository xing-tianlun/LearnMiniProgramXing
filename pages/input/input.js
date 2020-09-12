// pages/input/input.js
Page({
  data: {

  },
  handleInput(event) {
    console.log('用户输入内容', event)
  },
  bindFocus(event) {
    console.log('input获取焦点', event)
  },
  bindBlur(event) {
    console.log('input失去焦点', event)
  }
})