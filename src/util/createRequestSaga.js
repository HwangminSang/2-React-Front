import { call, put } from 'redux-saga/effects';
import { startLoading, finishLoading } from './loading';
export default function createRequestSaga(type, request) {
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;

    return function*(action) {

        yield put(startLoading(type)); //로딩 시작 액션생성함수
        try {
            const response = yield call(request, action);  // 함수 호출 < 블록킹>
            if (response)  // 값이 있을경우
                yield put({    // 부수효과  put을 이용하여 action을 디스패치한다.
                    type: SUCCESS,
                    payload: response.data
                });

        } catch (e) {
            yield put({
                type: FAILURE,
                payload: e,
                error: true
            });

        }
        yield put(finishLoading(type));
    };
}
