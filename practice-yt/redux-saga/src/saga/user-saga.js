import { take, call, put } from "redux-saga/effects";
function* userSaga() {
  yield take("GET_USER");
  console.log("hi ");
  const data = yield call(fetchData);
  console.log(data);
  yield put({ type: "SET_USER", payload: data });
}

async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return data;
}

export default userSaga;
