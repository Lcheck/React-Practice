import { createSlice } from '@reduxjs/toolkit'


export const counterSlice = createSlice({

name:'post',
//reducer이름

initialState:{posts:['default Post']},

reducers:{

add_post:(state,action)=>{state.posts.push(action.payload)}
//다른 곳에서 디스패치할 때에는 1항은 생략하고 2항의 payload로 들어감.

}
//기존의 reducer과는 다르게 함수형이고, immer가 내장되어 있어 불변성 지킬 필요가 없음
});

export const { add_post } = counterSlice.actions
//정의된 함수들을 내보내줘야함

export default counterSlice.reducer;



