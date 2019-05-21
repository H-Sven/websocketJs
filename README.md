### 对websocket进行封装

##### 调用
```
import { createSocket, sendWSPush } from './api/websocket'

createSocket() //创建
sendWSPush(11111) //发送数据

//监听ws数据响应
window.addEventListener('onmessageWS', e => {
  console.log(e.detail.data)
})
```