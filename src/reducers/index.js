import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'

const addPost = createAsyncThunk('counterSlice/addPost',async(text)=>{
//1항은 액션명, 2항엔 비동기 처리문이 들어있는 콜백함수를 넣어준다. 콜백의 인자로 data를 전달 받을 수 있음

const resp=await fetch('https://api.countapi.xyz/hit/opesaljkdfslkjfsadf.com/visits')
//매번 요청할때마다 1씩 증가하는 숫자를 반환하는 api

const data=await resp.json();
//json 형태로 변환

return `Num:${data.value} Text:${text}`;
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


