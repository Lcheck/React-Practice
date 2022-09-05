import React from 'react';
import Post from '../component/Post.js'
import Postform from '../component/Postform.js';
import { useSelector } from 'react-redux';

const App = () =>{

    const posts = useSelector(state=>state.posts);
            //useSelector로 posts state 끌어다쓰기
            
    return(
    
    <>
    <Postform/>
    {posts.map((item,index)=><Post content={item}/>)}
    </>);
}


export default App;