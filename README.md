# 对websocket进行简单封装

### 下载
```
npm install @sven0706/websocket -S
```

### 使用
```

// 在main.js或需要使用的地方引入并建立连接
import { createSocket } from '@sven0706/websocket'
createSocket('wss://api.baidu.com')


// 发送消息
import { sendWSPush } from '@sven0706/websocket'
sendWSPush(data)

// 接收消息
window.addEventListener('onmessageWS', getsocketData) // 注册监听事件
const getsocketData = e => { // 创建接收消息函数
  const data = e && e.detail.data
  console.log(data)
}
// 在需要的时候卸载监听事件，比如离开页面
window.removeEventListener('onmessageWS', getsocketData)

```

### API
```
仅三个api, 且一般只需要用到`createSocket`, `sendWSPush`

/**
 * 建立websocket连接
 * @param {string} url ws地址
 */
createSocket(url)

/**
 * 发送数据
 * @param {any} message 需要发送的数据
 */
 sendWSPush(message)

/**发送心跳
 * @param {number} time 心跳间隔毫秒 默认5000
 * @param {string} ping 心跳名称 默认字符串ping
 */
 sendPing()
```