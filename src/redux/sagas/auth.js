import axios from 'axios'
import { delay } from 'redux-saga'
import { put, call } from 'redux-saga/effects'
import * as actions from '../actions/index'

export function* logoutSaga(action) {
  yield call([localStorage, 'removeItem'], "token")
  yield call([localStorage, 'removeItem'], "expirationDate")
  yield call([localStorage, 'removeItem'], "userId")
  yield put(actions.logoutSucceed())
}

export function* checkAuthTimeoutSaga(action) {
  yield delay(action.expirationTime * 1000)
  yield put(actions.logout())
}

export function* authUserSaga(action) {
  yield put(actions.authStart())
  const authData = {
    email: action.email,
    password: action.password,
    returnSecureToken: true
  }

  try {
      
      const expirationDate = yield new Date(new Date().getTime() + 3600 * 1000)
      yield localStorage.setItem('token', 41)
      yield localStorage.setItem('expirationDate', expirationDate)
      yield localStorage.setItem('userId', 42)
      yield put(actions.authSuccess(41, 42))
      console.log("ok= !!!!!!!!!!!!!!!!!")
      // yield put(actions.checkAuthTimeout(response.data.expiresIn))
    } catch (error) {
      yield put(actions.authFail(error.response.data.error))
    }

  // let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBbG_1SYfYG3yi23YbJeS-6qpKiDTlXa58'
  // if (!action.isSignup) {
  //   url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBbG_1SYfYG3yi23YbJeS-6qpKiDTlXa58'
  // }

  // try {
  //   const response = yield axios.post(url, authData)
  //   const expirationDate = yield new Date(new Date().getTime() + response.data.expiresIn * 1000)
  //   yield localStorage.setItem('token', response.data.idToken)
  //   yield localStorage.setItem('expirationDate', expirationDate)
  //   yield localStorage.setItem('userId', response.data.localId)
  //   yield put(actions.authSuccess(response.data.idToken, response.data.localId))
  //   yield put(actions.checkAuthTimeout(response.data.expiresIn))
  // } catch (error) {
  //   yield put(actions.authFail(error.response.data.error))
  // }
}

export function* authCheckStateSaga(action) {
  const token = yield localStorage.getItem('token')
  if (!token) {
    yield put(actions.logout())
  } else {
    const expirationDate = yield new Date(localStorage.getItem('expirationDate'))
    if (expirationDate <= new Date()) {
      yield put(actions.logout())
    } else {
      const userId = yield localStorage.getItem('userId')
      yield put(actions.authSuccess(token, userId))
      yield put(actions.checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000 ))
    }
  }
}