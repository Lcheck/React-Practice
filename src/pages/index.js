import React,{useEffect} from 'react';
import Post from '../component/Post.js'
import Postform from '../component/Postform.js';
import AppLayout from '../component/AppLayout.js';
import { useSelector,useDispatch } from 'react-redux';
import { loadPost } from '../reducers/index.js';
import DropDown from '../component/DropDown.js';



const Home = () =>{
    const dispatch=useDispatch()
    const posts = useSelector(state=>state.posts)
            //useSelector로 posts state 끌어다쓰기
    const state = useSelector(state=>state.state)
            //각 포스팅 요청시 작업의 진행상태를 나타냄

    useEffect(()=>{

        dispatch(loadPost());

        },[])
  //렌더링시 한번만 게시글 불러오기
  
    return(
    
    <>
    <AppLayout>
    <DropDown/>
    {state}
    <Postform/>
    {posts.map((item,index)=><Post post={item}/>)}
    </AppLayout>
    </>);
}


export default Home;