const http = require('http')

// 1. 创建一个server服务器
const server = http.createServer((req, res) => {
    // 获取参数: body参数
    req.setEncoding('utf-8')

    // request对象本质上是一个readable可读流
    let isLogin = false
    req.on('data', (data) => {
        const dataString = data
        const loginInfo = JSON.parse(dataString)
        console.log(loginInfo)
        if (loginInfo.name === 'coderwhy' && loginInfo.password === '123456') {
            isLogin = true
        } else {
            isLogin = false
        }
    })

    req.on('end', () => {
        if (isLogin) {
            res.end('登录成功, 欢迎回来')
        } else {
            res.end('账号或者密码错误, 请检查登录信息~')
        }

    })

    // res.end('hello world')
})

// 2. 开启server服务器
server.listen(8000, () => {
    console.log('服务器开启成功~')
})