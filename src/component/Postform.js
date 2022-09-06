import React,{useState}  from 'react';
import {useDispatch} from 'react-redux';
import {add_post} from '../reducers/index';
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
        dispatch(add_post(text));
        //이제 액션 타입을 넣어 줄 필요가 없다. 타입으로 구분하는 게 아니라 함수로 구분하기 때문
        //데이터만 넣어주면된다. 그러면 내부적으로 action.payload에 들어간다.
        setText('');
    };
  
    
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