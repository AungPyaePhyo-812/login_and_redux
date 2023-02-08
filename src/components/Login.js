import React, { useRef } from 'react'
import styled from 'styled-components'
import Nav from './Nav'
import { Button } from '../styles/Shares'
import { useLoginContext } from '../store/LoginContextApi'
import { useNavigate } from 'react-router-dom' 

const SectionDiv = styled.div`
  background-color : ${(props) => props.theme.colors.primary};
  display : flex;
  flex-direction : column;
  width : 500px;
  margin : 0 auto;
  align-items : center;
  margin-top : 20px;
  padding : 20px;
`

const H1Styled = styled.h1`
  margin : 20px 0;
  color : #ff8800;
`

const InputStyle = styled.input`
  display : block;
  width : 250px;
  padding : 10px 10px;
  margin-bottom : 20px;

  border : none;

  &:focus { 
    outline : 1px solid #ddd;
  }
`

function Login() {
  const navigate = useNavigate();

  const { loggedIn, setLoggedIn } = useLoginContext();

  const phoneRef = useRef();
  const passwordRef = useRef();


  const login = (e) => {
    e.preventDefault();

    let user = {
        phone:phoneRef.current.value,
        password:passwordRef.current.value
    };

    phoneRef.current.value = '';
    passwordRef.current.value = '';

    setLoggedIn(true);
    navigate('/home');
  }
  return (
    <>
        <Nav />
        <SectionDiv>
            <H1Styled>Login To View Home Page</H1Styled>
            <form onSubmit={login}>
                <InputStyle type="tel" placeholder="phone"  ref={phoneRef}/>
                <InputStyle type="password" placeholder="password" ref={passwordRef} />
                <Button type="submit">Login</Button>
            </form>
        </SectionDiv>
    </>
  )
}

export default Login


