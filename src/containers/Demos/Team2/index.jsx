/*
 * @Author: guangwei.bao 
 * @Date: 2018-09-18 22:32:27 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-12-20 10:51:16
 * @Describe:  新增reselect中间件  redux用'@'的写法 实现一个sagas异步取消实例
 */
import React from 'react';
import { connect } from 'react-redux';
import * as log from 'loglevel';

import utils from '../../../utils';

export default class Team2 extends React.Component {
	constructor(props) {
		super(props);
		utils.burry('Team2');
	}

	render() {
		return <div>Team2</div>;
	}
}
