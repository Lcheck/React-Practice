import React from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { useState,useCallback } from 'react';
import {deletePost,updatePost} from '../reducers/index'



// 수정 버튼을 누르면 수정 모드가 된다
// 한번더 누르면 모드가 꺼진다.
// 수정 모드 시에는 게시글 컨텐츠가 텍스트 에디터로 변하고 (기존의 내용이 입력되어 있다)
// 등록 버튼이 생긴다.




function Post(props) {

  const {post}=props
  const [text,setText] = useState();
  const [updateMode,setUpdateMode]=useState(false);


 const dispatch = useDispatch();

 const onChangeText = (e) =>{
  e.preventDefault();
  setText(e.target.value);
}

//postForm을 재사용하려 했으나, 각종 분기처리를 해야해서 그냥 여기서 에딧폼을 만들기로 했다.
 const onClickDeleteButton =()=>{

  dispatch(deletePost(post.id))

 }
 const onClickUpdateToggleButton =()=>{

  if (!updateMode){ //업데이트 모드라면 현재 text를 해당 게시글의 텍스트로 바꿔준다
    //setState는 렌더링 된 후 반영되기 때문에 false일때 실행하도록한다.
    setText(post.text)
  }
  setUpdateMode(!updateMode)


  

}

//액션에 1개 이상의 인자를 넘겨 줄 때에는 객체로 넘겨주어야한다! 액션 함수의 1항에만 전달값을 넣어줄수있기때문
    return (
      <>
      <div style={{
                    'display':'flex',
                   'width':'220px',
                   'flex-direction':'column',
                   'justify-content':'center',
                   'align-items':'center',
                   'margin-top':'5px',}}>
      {updateMode?
      
(<form action='' onSubmit={(e)=>{e.preventDefault(); dispatch(updatePost({id:post.id,text:text})); setUpdateMode(false)}}>
<input type='text' value={text} onChange={onChangeText}/>
<button type='submit'>입력</button>
</form>):

<div style={{'display':'inline-block',
                      'background':'cadetblue',
                      'color':'white',
                      'width':'200px',
                      'border-radius':'5px',
                      'margin':'2px',
                      'padding':'5px'}}>
        
        {post.text}
        
        </div>}
        <div style={{  'display':'flex',
                      'justify-content':'center',
                      'background':'green',
                      'color':'white',
                      'width':'200px',
                      'border-radius':'5px',
                      'margin':'2px',
                      'margin-top':'0px',
                      'padding':'5px'}}>
        <button>좋아요</button>
        <button onClick={onClickUpdateToggleButton}>{updateMode?'수정취소':'수정'}</button>
        <button onClick={onClickDeleteButton}>삭제</button>
        <button>신고</button>
        </div>


        </div>
       </>

      );
  }

  export default Post;