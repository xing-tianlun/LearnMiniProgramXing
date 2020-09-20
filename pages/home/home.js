// pages/home/home.js
Page({
  data: {
    counter: 0,
    isShow: true
  },
  handleIncrement(event) {
    console.log(event); // 传过来的数据就在event.detail里
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handleTabClick(event) {
    console.log(event.detail);
  },
  handleIncrementCpn() {
    // 最终目的：修改my-sel中的counter
    // 1.获取组件对象
    const my_sel = this.selectComponent('#sel-id');
    console.log(my_sel);
    // 2.通过setData修改组件中的data数据(不合理，不符合开发的规范)
    // my_sel.setData({
    //   counter: my_sel.data.counter + 20
    // })
    // 3.通过方法对组件中的data数据进行修改
    my_sel.incrementCounter(10);
  },
  handleChangeShow() {
    this.setData({
      isShow: !this.data.isShow
    })
  }
})