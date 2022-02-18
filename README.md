
## 标题欢迎使用Fui
##### 扫码体验：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210629141027266.jpg#pic_center)

#### 使用
###### 第一步：配置基础接口和多商户数据
```javascript
根目录下config.js文件修改配置
let config = {
	baseUrl:"http://www.ai.com",//接口地址
	bloc_id:1,//公司ID
	store_id:1,//商户ID
	siteUrl:"http://www.ai.com"//h5的地址
}

export default {
	config
}
```
###### 第二步：熟悉路由配置
在原由路由配置的基础上增加了aliasPath，name和meta
```javascript
{
		"path": "pages/index/index",
		"aliasPath": "/", //对于h5端你必须在首页加上aliasPath并设置为/
		"name": "index",
		"meta": {
			"title": ""
		},
		"style": {
			// #ifdef H5
			"titleNView": false,
			// #endif
			"navigationBarTitleText": "Fire UI",
			"app-plus": {
				"bounce": "vertical"
			}
		}
	}
```
###### 第三步：安装扩展
npm install --registry=https://registry.npm.taobao.org

#### 加群连接
#### qq群：麻烦下载的朋友加下qq交流群：[662719021](https://jq.qq.com/?_wv=1027&k=x2vpj8s5)，可以获取后台管理，接口管理系统，代码开源，
##### 公众号
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210629140955393.jpg#pic_center)




#### 关于我们
店滴AI：店滴AI，AI数据的应用与挖掘，可以快速搭建基于人脸数据,软硬件交互场景业务的免费开源框架。封装了常用的表单组件、权限控制、集团化SAAS模式， 实现了模块化开发，人脸库维护、人脸智能识别。支持基于swoole的TCP,UDP等多种通信方式，可一键协程化运行。

