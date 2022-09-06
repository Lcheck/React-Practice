import React from 'react';
import Post from './Post.js'
import Postform from './Postform.js';

import { useSelector } from 'react-redux';

const App = () =>{

    const posts = useSelector(state=>state.posts);
            //useSelector로 posts state 끌어다쓰기
    const state = useSelector(state=>state.state);
            //각 포스팅 요청시 작업의 진행상태를 나타냄
    return(
    
    <>
    {state}
    <Postform/>
    {posts.map((item,index)=><Post content={item}/>)}
    </>);
}


export default App;