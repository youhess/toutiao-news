import axios from 'axios'

// 调用axios创建实例对象
const instance = axios.create({
  // 设置请求的根路进
  baseURL: 'http://www.liulongbin.top:8000'
})

export default instance
