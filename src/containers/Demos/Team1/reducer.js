/*
 * @Author: guangwei.bao 
 * @Date: 2018-09-11 15:24:42 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-10-31 10:15:09
 */
import { createAction, handleActions, Action } from 'redux-actions';

// 最外层constants 统一命名
import { RN_TEAM1 } from '../../../store/constants';
//组件的 constants
import { INCREMENT, DECREMENT, INITMENT, REQUESTDATASUCCESS, REQUESTDATAERROR } from './constants';

export const name = RN_TEAM1;

export const team1Reducer = handleActions(
	{
		//计数器方法+
		[INCREMENT]: (state, action) => {
			return Object.assign({}, state, {
				count: state.count + action.payload
			});
		},
		//计数器方法-
		[DECREMENT]: (state, action) => {
			return Object.assign({}, state, {
				count: state.count - action.payload
			});
		},
		//初始化计时器
		[INITMENT]: (state, action) => {
			return Object.assign({}, state, {
				count: action.payload
			});
		},

		//获取数据方法
		[REQUESTDATASUCCESS]: (state, action) => {
			return Object.assign({}, state, {
				getData: action.payload
			});
		},
		[REQUESTDATAERROR]: (state, action) => {
			return Object.assign({}, state, {});
		}
	},
	{
		getData: {},
		count: 0
	}
);
