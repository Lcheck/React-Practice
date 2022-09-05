import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './component/App';
import store from './store/configureStore';
import {Provider} from 'react-redux';
//store를 props로 받는 컴포넌트, 이 컴포넌트로 app전체를 감싸주어야 전역 state이용 가능


const root = ReactDOM.createRoot(document.getElementById('root'));


//configuresotre이 return 값으로 store객체를 반환하므로 ()로 실행시켜줬음
root.render(
  <div>
    <Provider store={store()}>
  <App/>
  </Provider>
  </div>

);

