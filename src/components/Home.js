import React from 'react'
import styled from 'styled-components'
import Nav from './Nav'
import flutterImg from '../images/Flutter.png'
import javaImg from '../images/Java.png'
import nodeImg from '../images/NodeJs.png'
import { Button } from '../styles/Shares'

const FlexDiv = styled.div`
    background-color : ${(props) => props.theme.colors.primary};
    display : flex;
    align-items : center;
    padding : 0 20px;
`

const Flex = styled.div`
    flex : 1;
    display : flex;
    flex-direction : column;
    padding : 20px;
    justify-content : center;
    align-items : center;
`



function Home() {
  return (
    <>
        <Nav />

        <FlexDiv>
            <Flex>
                <h1>Brighter Myanmar</h1>
                <h4 style={{marginTop:"10px"}}>Professional compoter programming class</h4>
                <Button>Download Apk</Button>
            </Flex>

            <Flex>
                <img src={flutterImg} width="80%" alt="..." />
            </Flex>
        </FlexDiv>

        <FlexDiv>
            <Flex>
                <img src={javaImg} width="80%" alt="..." />
            </Flex>

            <Flex>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia repellendus, perspiciatis laboriosam ut vitae doloribus. Aperiam blanditiis fugit delectus exercitationem. Laudantium ab dolor voluptates sit nostrum ratione harum a sed?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia repellendus, perspiciatis laboriosam ut vitae doloribus. Aperiam blanditiis fugit delectus exercitationem. 
                </p>
            </Flex>
        </FlexDiv>

        <FlexDiv>
            <Flex>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia repellendus, perspiciatis laboriosam ut vitae doloribus. Aperiam blanditiis fugit delectus exercitationem. Laudantium ab dolor voluptates sit nostrum ratione harum a sed?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia repellendus, perspiciatis laboriosam ut vitae doloribus. Aperiam blanditiis fugit delectus exercitationem. 
                </p>
            </Flex>

            <Flex>
                <img src={nodeImg} width="80%" alt="..." />
            </Flex>
        </FlexDiv>


    </>
  )
}

export default Home