/*
 * @Author: guangwei.bao 
 * @Date: 2018-09-19 18:38:56 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-09-25 15:27:25
 * @Describe: 天气组件
 */

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import utils from '../../../utils';
import style from './index.scss';

export default class Weather extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { city } = this.props;
		return (
			<div id={style.weather}>
				<div className={style.temp}>
					<img src={utils.requireImg('welcome/weather_sunshine.png')} alt="天气" />
					<span>28°</span>
				</div>

				<div className={style.local}>{city}</div>
			</div>
		);
	}
}
