module.export = {
  plugins: {
    'postcss-pxtorem': {

      rootValue: 37.5, // 根节点的font-size值

      propList: ['*'] // 要处理的属性列表
    }
  }
}

// 375px = 10rem
// 37.5px = 1rem
// 1px = 1/37.5rem
// 12px = 12/37.5rem = 0.32rem
