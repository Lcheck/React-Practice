import React,{useState} from 'react';
import styled from 'styled-components';
import {useDispatch} from 'react-redux';
const Css = styled.div`

.contaner>form{
display:flex;
flex-direction:row;
}

.contaner div{
margin:20px;
border:1px solid black;
}
`;
const DropDown = ()=>{

const dispatch = useDispatch();

const [thema,setThema] = useState();
const [price,setPrice] = useState();
const [region,setRegion] = useState();

const onSubmitForm =(e)=>{

e.preventDefault();

// dispatch(searchPost({thema,price,region}))
// console.log(thema,price,region)
}

const selectThema =(e)=>{
    e.preventDefault();
    setThema(e.target.value)
}
const selectPrice =(e)=>{
    e.preventDefault();
    setPrice(e.target.value);
}
const selectRegion =(e)=>{
    e.preventDefault();
    setRegion(e.target.value);
}

return(

<>
<Css>
<div class='contaner'>
<form action='' onSubmit={onSubmitForm}>

<div>
<label for='thema'>테마</label>
<br/>
<select name='thema' id='thema' value={thema} onChange={selectThema}>
<option value="맛집">맛집</option>
<option value="여행">여행</option>
<option value="명소">명소</option>
</select>
</div>

<div>
<label for='price'>가격대</label>
<br/>
<select name='price' id='price' value={price} onChange={selectPrice}>
<option value="상">상</option>
<option value="중">중</option>
<option value="하">하</option>
</select>
</div>

<div>
<label for='region'>지역</label>
<br/>
<select name='region' id='region' value={region} onChange={selectRegion}>
<option value="서울">서울</option>
<option value="충북">충북</option>
<option value="경북">경북</option>
</select>
</div>
<button type='submit'>검색</button>
</form>

</div>
</Css>

</>);



}

export default DropDown;