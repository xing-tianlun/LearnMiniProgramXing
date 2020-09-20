// components/my-event/my-event.js
Component({
  /**
   * 组件的方法列表
   */
  methods: {
    handleIncrement() {
      this.triggerEvent('increment', {name: "xing", age: 23}, {})
    }
  }
})
