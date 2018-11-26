/*
 * @Author: guangwei.bao 
 * @Date: 2018-08-30 20:09:25 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-11-26 17:40:57
 * @Describe: webpack 配置文件
 */
'use strict';

// 获取开发环境变量
// console.log('工程启动环境: ' + process.env.NODE_ENV);
const NODE_ENV = process.env.NODE_ENV;
// 工程打包到的文件夹名称
// 部署到服务器上的时候，可以根据需求改变打包文件夹名称，一改全改
const PACKAGE_PATH = 'www';  //开发环境
const PACKAGE_PATH_PROD = 'react-javascript-seeds';  //生产环境

// 根据开发环境设置前缀
const getWebpackpublicPath = () => {
	const urlObj = {
		development: '/' + PACKAGE_PATH + '/',
		// development: 'https://cdn.example.com/assets/',
		production: '/' + PACKAGE_PATH_PROD + '/'
	};

	switch (NODE_ENV) {
		case 'development':
			return urlObj.development;
		case 'production':
			return urlObj.production;
		default:
			return '/';
	}
};

module.exports = {
	NODE_ENV: NODE_ENV,
	PACKAGE_PATH: PACKAGE_PATH,
	getWebpackpublicPath
};
