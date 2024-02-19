const http = require('http')

// 1. 创建一个server服务器
const server = http.createServer((req, res) => {
    // res: response对象 -> Writable可写流
    // 1. 响应数据方式一: write 最后也得调用一下end
    res.write("Hello World")
    res.write("哈哈哈")

    // 2. 响应数据方式二: end
    res.end("本次写出已经结束了")
})

// 2. 开启server服务器
server.listen(8000, () => {
    console.log('服务器开启成功~')
})