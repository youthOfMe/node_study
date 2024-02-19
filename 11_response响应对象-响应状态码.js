const http = require('http')

// 1. 创建一个server服务器
const server = http.createServer((req, res) => {

    // 响应状态码
    // 1. 方式1 statusCode
    // res.statusCode = 506

    // 2. 方式2
    res.writeHead(401)

    res.end('hello world')
})

// 2. 开启server服务器
server.listen(8000, () => {
    console.log('服务器开启成功~')
})