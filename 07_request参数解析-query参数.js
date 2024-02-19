const http = require('http')
const url = require('url')
const qs = require('querystring')

// 1. 创建一个server服务器
const server = http.createServer((req, res) => {
    // 1. 参数一: query类型参数
    // 1.1 解析url
    const urlString = req.url
    const urlInfo = url.parse(urlString)
    console.log(urlInfo.query, urlInfo.pathname)

    // 1.2 解析query
    const queryString = urlInfo.query
    const queryInfo = qs.parse(queryString)
    console.log(queryInfo)
    console.log(queryInfo.niuma)

    res.end('hello world aaa')
})

// 2. 开启server服务器
server.listen(8000, () => {
    console.log('服务器开启成功~')
})