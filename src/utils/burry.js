/*
 * @Author: guangwei.bao 
 * @Date: 2018-09-13 17:15:22 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-09-14 15:59:51
 * @Describe: 工程所有页面的数据埋点方法
 */
'use strict';

export const burry = function(pageName) {
	console.log('埋点成功，进入了 ' + pageName + ' 页面');
	// setting title
	// document.title = pageName + ' - 我的博客';
	document.title = pageName + ' - test';
};
