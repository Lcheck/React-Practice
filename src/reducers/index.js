const initialState = {posts:['default Post']};
//state 선언

export const ADD_POST ='ADD_POST';
//액션 타입 변수화

function reducer (state=initialState,action){
    
switch(action.type){
    
case ADD_POST:

return{posts:[...state.posts,action.data]};
    
default:
        return state;}
    }

    //reducer는 현재 state값과 action을 인자로 받음
    //action의 타입과 데이터에 따라 새로운 state들을 만들어내는 함수임
    //history를 남기기 위해 불변성을 지켜주어야함. immer라는 모듈을 사용하면 지키지 않아도됨
    
export default reducer;



