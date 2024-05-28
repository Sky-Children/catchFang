const express = require('express');
const path = require('path');

// 创建 Express 应用
const app = express();

// 设置静态文件目录
const staticPath = path.join(__dirname, 'public');
app.use(express.static(staticPath));

// 设置一个路由和相应的处理函数（可选）
app.get('/', (req, res) => {
  res.sendFile(path.join(staticPath, 'index.html'));
});

// 定义服务器监听的端口
const PORT = process.env.PORT || 80

// 启动服务器
app.listen(PORT, () => {
  console.log(`Static server is running on port ${PORT}`);
});