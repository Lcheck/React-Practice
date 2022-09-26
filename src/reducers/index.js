import { createSlice,createAsyncThunk,current } from '@reduxjs/toolkit'
//리덕스의 현재 state를 console.log로 출력시 proxy객체로 나와 확인이 어려웠다. 이럴땐 current 모듈을 사용하면 된다.

const axios = require('axios').default;
axios.defaults.baseURL='http://localhost:3065';
const addPost = createAsyncThunk('counterSlice/addPost',async(text)=>{
//1항은 액션명, 2항엔 비동기 처리문이 들어있는 콜백함수를 넣어준다. 콜백의 인자로 data를 전달 받을 수 있음

const result = await axios.post('/post',{text:text})
//백엔드 서버에 post 요청을 보내 post테이블에 text가 담긴 열을 하나 생성
//데이터는 객체로 보내줘야함 객체의 프로퍼티명이 백엔드 req.body의 이름이 되기 때문에 프론트-백엔드에서 맞춰줘야함

return result.data;
//result는 json 객체로 반환된다.
//return 값은 action.payload에 들어감

})
const deletePost = createAsyncThunk('counterSlice/deletePost',async(id)=>{


const result = await axios.delete(`/post/${id}`)

//result = {data:{id:'number'}}
return Number(result.data.id);

})

const loadPost = createAsyncThunk('counterSlice/loadPost',async()=>{
//게시글 불러오기
    
    const result = await axios.get('/posts')

  

    return result.data;

    
    })
const updatePost = createAsyncThunk('counterSlice/updatePost',async(data)=>{


    const result = await axios.post(`/post/${data.id}`,{text:data.text})

   
    return result.data;

    
    })
export const counterSlice = createSlice({

name:'post',
//reducer이름

initialState:{updateMode:false,state:'',posts:[]},

reducers:{


//다른 곳에서 디스패치할 때에는 1항은 생략하고 2항의 payload로 들어감.
//내부에 액션 크리에이터가 있어서 액션명을 생략해도됨
//기존의 reducer과는 다르게 함수형이고, immer가 내장되어 있어 불변성 지킬 필요가 없음
},

extraReducers: (builder) =>{
//비동기적인 처리가 필요한 reducer는 여기서 정의한다.


//비동기 작업시 요청,성공,실패의 상태로 나뉘게 된다.
//서버는 동기적으로 동작할 수 없고 비동기일텐데, 모든요청이 성공할 순 없기 때문이다.
//thunk에서는 pending, fulfilled, rejected 세가지로 나뉘고 각각의 상태에서 다른 state처리를 해준다.

builder.addCase(addPost.pending, (state,action)=>{

state.state='Loading';

})
builder.addCase(addPost.fulfilled, (state,action)=>{
    
state.state='Sucess';


state.posts.unshift(action.payload);

})
builder.addCase(addPost.rejected, (state,action)=>{
    
state.state='Fail';

})

builder.addCase(loadPost.pending, (state,action)=>{

state.state='Loading';

})
builder.addCase(loadPost.fulfilled, (state,action)=>{
 
state.state='Sucess';
action.payload.map((i)=>state.posts.unshift(i));
//posts에 불러온 게시글 객체대입
//unshift로 최신게시글이 앞에 오도록 채워넣는다.

})
builder.addCase(loadPost.rejected, (state,action)=>{
    
state.state='Fail';

})

builder.addCase(deletePost.pending, (state,action)=>{

    state.state='Loading';
    
    })
    builder.addCase(deletePost.fulfilled, (state,action)=>{
        
    state.state='Sucess';
    
    state.posts=state.posts.filter(i=>i.id!==action.payload)
    //삭제한 게시글 id와 다른 게시글들만 모아 배열을 다시만들어 posts에 대입한다 -> 해당 id를 가진 게시글을 삭제한다
    
    })
    builder.addCase(deletePost.rejected, (state,action)=>{
        
    state.state='Fail';
    
    })

builder.addCase(updatePost.pending, (state,action)=>{

state.state='Loading';

})
builder.addCase(updatePost.fulfilled, (state,action)=>{
    
state.state='Sucess';
let postId = state.posts.findIndex(i=>i.id===action.payload.id) //수정전  게시글의 인덱스를 찾는다.
state.posts[postId].text=action.payload.text //수정전 게시글의 text를 수정 후 text와 일치시킨다

})
builder.addCase(updatePost.rejected, (state,action)=>{
    
state.state='Fail';

})
}


});

export const { add_post } = counterSlice.actions
//정의된 함수들을 내보내줘야함
export {addPost,loadPost,deletePost,updatePost};

export default counterSlice.reducer;


