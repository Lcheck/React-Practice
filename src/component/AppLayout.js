import styled from 'styled-components';

const AppCss = styled.div`

.contaner{
display:flex;
flex-direction:column;
border:1px solid grey;
}

header{

    border:1px solid grey;
    }
nav{

    border:1px solid grey;
    }
main{
    display:flex;
    flex-direction:column;
    border:1px solid grey;
    }
footer{

    border:1px solid grey;
    }

`;

const AppLayout = ({children}) =>{



return(<>

<AppCss>
<div calss='contaner'>
<header>
<h1>LEH World</h1>
</header>
<nav>navigator</nav>
<main>
{children}
</main>
<footer>footer</footer>
</div>
</AppCss>

</>)

}

export default AppLayout;