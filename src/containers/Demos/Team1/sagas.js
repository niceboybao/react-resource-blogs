/*
 * @Author: guangwei.bao 
 * @Date: 2018-09-11 15:25:16 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-10-31 15:39:13
 */

// redux-saga https://juejin.im/post/5ad83a70f265da503825b2b4
import {
	take, // 指示 middleware 等待 Store 上指定的 action。 Generator 会暂停，直到一个与 pattern 匹配的 action 被发起。
	call, // fork 的同胞兄弟，不过fork是非阻塞，call是阻塞，阻塞的意思就是到这块就停下来了
	fork, // 指示 middleware 以 无阻塞调用 方式执行 fn。
	put, // 作用跟 dispatch 一毛一样，可以就理解为dispatch(put是saga对Redux中dispatch方法的一个封装)
	/*
    在发起的 action 与 pattern 匹配时派生指定的 saga。
    每次发起一个 action 到 Store，并且这个 action 与 pattern 相匹配，那么 takeEvery 将会在后台启动一个新的 saga 任务。
    */
	takeEvery,
	/*
    在发起的 action 与 pattern 匹配时派生指定的 saga。并且自动取消之前启动的所有 saga 任务（如果在执行中）。
    */
	takeLatest
} from 'redux-saga/effects';
// 用于Node和Browserify的同构WHATWG Fetch API
import fetch from 'isomorphic-fetch';
import * as log from 'loglevel';

import config from '../../../config.js';
import { REQUESTDATA } from './constants';
import { requestDataSuccess, requestDataError } from './actions';

function* fetchData(action) {
	try {
		const response = yield call(fetch, config.FETCH_BASE_PATH + 'mock/test.json');
		if (response.ok) {
			const json = yield response.json();
			log.debug(' team1 requestDataSuccess');
			// put是saga对Redux中dispatch方法的一个封装
			yield put(requestDataSuccess(json));
		} else {
			log.debug('team1 requestDataError');
			yield put(requestDataError(response.status));
		}
	} catch (e) {
		log.debug('team1 requestDataFaild');
		yield put(requestDataError(e.message));
	}
}

export default function* saga() {
	yield takeEvery(REQUESTDATA, fetchData);
}

/*
takeLatest 的源码
const takeLatest = (patternOrChannel, saga, ...args) => fork(function*() {
  let lastTask
  while (true) {
    const action = yield take(patternOrChannel)
    if (lastTask) {
      yield cancel(lastTask) // cancel is no-op if the task has already terminated
    }
    lastTask = yield fork(saga, ...args.concat(action))
  }
})
*/

/*
takeEvery 源码
takeEvery 是一个高阶 API，使用 take 和 fork 构建。
function* takeEvery(pattern, saga, ...args) {
  while(true) {
    const action = yield take(pattern)
    yield fork(saga, ...args.concat(action))
  }
}
*/
