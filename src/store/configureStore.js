import rootReducer from '../reducers/index';
//reducer 불러오기

import {createStore} from 'redux';
//리듀서와 각종 세팅 객체들을 합성해 store를 반환해주는 모듈


const configureStore = () =>{

  const store=createStore(rootReducer);

  return store;

}

export default configureStore;