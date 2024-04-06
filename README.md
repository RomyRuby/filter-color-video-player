# yhfy-ai1

## Project setup
```
0. 安装依赖
npm install
```

### Compiles and hot-reloads for development
```
1. 代理服务配置
# vite.config.js
Proxy.target = 'http://172.20.102.97:8080'

2. 开发环境地址变量
# .env.development
VITE_BASE_URL='http://172.20.102.97:8080'

3. 生产环境地址变量
# .env.production
VITE_BASE_URL='http://101.133.130.23:8091'

4. 启动
npm run dev
```

### Compiles and minifies for production
```
6.打包

npm run build 
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
