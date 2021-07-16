import React from 'react';
import styled from 'styled-components';
import rami from "../img/rami.png";
import adam from "../img/adam.png";
import kev from "../img/kevin.png";
import bj from "../img/bj.jpg";

const OuterDiv = styled.div`
    margin: 0 auto;
    padding-top: 40px;
`;

const Text1 = styled.div`
    font-size: 25px;
    width: 100%;
    text-align: center;
    margin-bottom: 60px;
`;



const Title = styled.div`
    font-size: 80px;
    text-align: center;
    font-weight: bold;
    margin-top: 0px;
    margin-bottom: 20px;
`;


const Layer = styled.div`
    text-align: center;
    height: 225px;
    margin-bottom: 50px;
`;

const CardL = styled.span`
    float: left;
    width: 600px;
    margin-left: 100px;
    padding: 10px;
    height: 225px;
    border-radius: 10px;
    background: white;
    display: inline-block;
`;
const CardR = styled.span`
    display: inline-block;
    float: right;
    margin-right: 100px;
    width: 600px;
    height: 225px;
    padding: 10px;
    border-radius: 10px;
    background: white;
`;

const ImgL = styled.img`
    border-radius:100px;
    width: 200px;
    height: 200px;
    float: left;
`;
const ImgR = styled.img`
    border-radius:100px;
    float: right;
    width: 200px;
    height: 200px;
`;

const Name = styled.p`
    font-size: 40px;
    font-weight: bold;
`;
const Desc = styled.p`
    font-size: 20px;
    margin-top: -10px;
`;
const Box = styled.div`
    margin-top: -20px;
    margin-left: 20px;
`;



class About extends React.Component {

    

    render(){

        return <section>
        <OuterDiv ref = {this.myRef}>

            <Title>About us</Title>
            <Text1>The  developers</Text1>

        </OuterDiv>

        <Layer>

            <CardL> <ImgL src={rami}></ImgL>
             <Box>
             <Name>Rami Janini</Name> 
             <Desc>Backend Developer</Desc> 
             <Desc>Data Scientist</Desc>
             <Desc>from Jordan</Desc>
             </Box>
            </CardL>
            <CardR> <ImgR src={adam}></ImgR>
            <Box>
             <Name>Adam Isenberg</Name> 
             <Desc>Fullstack Developer</Desc> 
             <Desc>Computer Scientist</Desc>
             <Desc>from South Africa</Desc>
             </Box></CardR>

        </Layer>
        <Layer>

            <CardL> <ImgL src={kev}></ImgL>
            <Box>
             <Name>Kevin Yang</Name> 
             <Desc>Backend Developer</Desc> 
             <Desc>Editor</Desc>
             <Desc>from America</Desc>
             </Box> </CardL>
            <CardR> <ImgR src={bj}></ImgR>
            <Box>
             <Name>Byeongjun Moon</Name> 
             <Desc>Product Designer</Desc> 
             <Desc>UI/UX Designer</Desc>
             <Desc>from Canada</Desc>
             </Box></CardR>
            
        </Layer>

        </section>
    }
}

export default About;