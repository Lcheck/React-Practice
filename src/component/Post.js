import React from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {deletePost} from '../reducers/index'

function Post(props) {

 const {post}=props

 const dispatch = useDispatch();

 const onClickDeleteButton =()=>{

  dispatch(deletePost(post.id))

 }

    return (
      <>
      <div style={{'display':'inline-block','color':'red','width':'200px','height':'20px','border':'solid 2px black','margin':'2px'}}>
        {post.text}
        
        </div>
        <button onClick={onClickDeleteButton}>삭제</button>
       </>

      );
  }

  export default Post;