import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
const axios = require('axios').default;

const addPost = createAsyncThunk('counterSlice/addPost',async(text)=>{
//1항은 액션명, 2항엔 비동기 처리문이 들어있는 콜백함수를 넣어준다. 콜백의 인자로 data를 전달 받을 수 있음

const result = await axios.post('http://localhost:3065/post',{text:text},{withCredentials:true})
//백엔드 서버에 post 요청을 보내 post테이블에 text가 담긴 열을 하나 생성
//데이터는 객체로 보내줘야함 객체의 프로퍼티명이 백엔드 req.body의 이름이 되기 때문에 프론트-백엔드에서 맞춰줘야함

return result.data.text;
//result는 json 객체로 반환된다.
//return 값은 action.payload에 들어감

})

export const counterSlice = createSlice({

name:'post',
//reducer이름

initialState:{state:'',posts:['default Post']},

reducers:{

// add_post:(state,action)=>{state.posts.push(action.payload)}

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
state.posts.push(action.payload);

})
builder.addCase(addPost.rejected, (state,action)=>{
    
state.state='Fail';

})

}


});

export const { add_post } = counterSlice.actions
//정의된 함수들을 내보내줘야함
export {addPost};

export default counterSlice.reducer;


