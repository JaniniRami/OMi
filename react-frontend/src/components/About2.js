import React from 'react';
import styled from 'styled-components';
import rami from "../img/rami.png";
import adam from "../img/adam.png";
import kev from "../img/kevin.png";
import bj from "../img/bj.jpg";

const TitleDiv = styled.div`
    margin: 0 auto;
    padding-top: 40px;
    margin-bottom: 60px;
`;
const Text1 = styled.div`
    font-size: 30px;
    text-align: center;
`;
const Title = styled.div`
    font-size: 75px;
    text-align: center;
    font-weight: bold;
    margin: 0 auto;
`;

const Wrapper = styled.div`
    overflow: hidden;
    display: inline-block;
    width: 75%;
    max-width: 75%;
    font-family: Arial;
    
`;
//min-width: 895px;

const CardL = styled.div`
    width: 445px;
    min-width: 443px;
    height: 180px;
    background: white;
    border-radius: 100px;
    overflow: hidden;
    float: left;
    margin: 10px;
    padding-left: 10px;
`;

const ImgDivL = styled.div`
    width: 160px;
    height: 160px;
    float: left;
`;

const InfoL = styled.div`
    overflow: hidden;
    padding-right: 35px;
    margin-top: 10px;
`;

const Img = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 100px;
    margin-top: 10px;
`;

const CardR = styled.div`
    width: 445px;
    min-width: 445px;
    height: 180px;
    min-height: 180px;
    max-height: 180px;
    background: white;
    border-radius: 100px;
    overflow: hidden;
    float: right;
    margin: 10px;
    padding-right: 10px;
`;

const ImgDivR = styled.div`
    width: 160px;
    height: 160px;
    float: right;
`;

const InfoR = styled.div`
    overflow: hidden;
    padding-left: 35px;
    margin-top: 10px;
`;

const Name = styled.div`
    font-size: 28px;
    font-weight: bold;
    text-align: center;
    margin: 15px 0 10px 0;
`;

const Abt = styled.div`
    font-size: 22px;
    text-align: center;
`;

const From = styled.div`
    font-size: 22px;
    text-align: center;
    margin-top: 7px;
`;

const Row = styled.div`
    margin-bottom: 40px;
    max-height: 360px;
`;


class About extends React.Component {

    render(){
        return <div>

            <TitleDiv>
                <Title>About us</Title>
                <Text1>the developers</Text1>
            </TitleDiv>

            <Row>
                <Wrapper>
                    <CardL>
                        <ImgDivL><Img src = {rami}></Img></ImgDivL>
                        <InfoL>
                            <Name>Rami Janini</Name>
                            <Abt>Backend Developer</Abt>
                            <Abt>Data Scientist</Abt>
                            <From>from Jordan</From>
                        </InfoL>
                    </CardL>
                    <CardR>
                        <ImgDivR><Img src = {adam}></Img></ImgDivR>
                        <InfoR>
                            <Name>Adam Isenberg</Name>
                            <Abt>Fullstack Developer</Abt>
                            <Abt>Computer Scientist</Abt>
                            <From>from South Africa</From>
                        </InfoR>
                    </CardR>
                </Wrapper>
            </Row>
            <div>
                <Wrapper>
                    <CardL>
                        <ImgDivL><Img src = {kev}></Img></ImgDivL>
                        <InfoL>
                            <Name>Kevin Yang</Name>
                            <Abt>Backend Developer</Abt>
                            <Abt>Editor</Abt>
                            <From>from America</From>
                        </InfoL>
                    </CardL>
                    <CardR>
                        <ImgDivR><Img src = {bj}></Img></ImgDivR>
                        <InfoR>
                            <Name>Byeongjun Moon</Name>
                            <Abt>Product Designer</Abt>
                            <Abt>UI/UX Designer</Abt>
                            <From>from Canada</From>
                        </InfoR>
                    </CardR>
                </Wrapper>
            </div>

        </div>;
    }

}

export default About;