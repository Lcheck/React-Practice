import React,{useState}  from 'react';
import {useDispatch} from 'react-redux';
import {ADD_POST} from '../reducers/index';
function Postform() {

    const dispatch = useDispatch();

    const [text,setText] = useState();

    const onChangeText = (e) =>{
        e.preventDefault();
        setText(e.target.value);
    }
    //사용자의 키입력도 setText로 상태변화 시켜서 렌더링

    const onSubmitForm = (e) => {
        e.preventDefault();
        dispatch({type:ADD_POST,data:text});
        setText('');
    };
    //제출시 addpost타입과 text를 액션 객체에 담아 보냄
    
    return (
<>
<form action='' onSubmit={onSubmitForm}>
<input type='text' value={text} onChange={onChangeText}/>
<button type='submit'>입력</button>
</form>
</>

      
      );
  }

  export default Postform;