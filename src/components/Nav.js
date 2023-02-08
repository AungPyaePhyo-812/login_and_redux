import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import logoImg from '../images/logo.png'
import { useLoginContext } from '../store/LoginContextApi'



const FlexDiv = styled.div`
    background-color : ${(props) => props.theme.colors.primary};
    display:flex;
    height : 45px;
    padding : 0 20px;
    border-bottom : 0.3px solid rgba(0,0,0,0.3);
`
const RightDiv = styled.div`
    flex : 1;
    display : flex;
    justify-content : end;
`

const LeftDiv = styled.div`
    display : flex;
    align-items : center;
`

const UlDiv = styled.ul` 
    display : flex;
    align-items : center;
`

const H1_Style = {
    color : "#ff8800",
    marginLeft : "10px"
}

const ATAG_Style = {
    color : "hotpink"
}

const LIStyle = styled.li`
    padding : 0 10px;
    &:after{
        content : "";
        display : block;
        height : 5px;
        background-color : hotpink;
        transform : scaleX(0);
        transition : 300ms;
    }

    &:hover {
        &:after {
            transform : scaleX(1)
        }
    }

`

function Nav() {
    const   {loggedIn, setLoggedIn} = useLoginContext();
    const navigate = useNavigate();

    const login = () => {
        setLoggedIn(false);
        navigate('/');

    }
  return (
    <FlexDiv>
        <LeftDiv>
            <img src={logoImg} alt='...' width="30px" height="30px" />
            <strong style={H1_Style}>Brighter Myanmar</strong>
        </LeftDiv>
        <RightDiv>
            <UlDiv>
                <LIStyle><a href="#" style={ATAG_Style}>Download</a></LIStyle>
                <LIStyle><a href="#" style={ATAG_Style}  onClick={login} >{ loggedIn ? "Logout" : "Login"}</a></LIStyle>
            </UlDiv>
        </RightDiv>
    </FlexDiv>
  )
}

export default Nav