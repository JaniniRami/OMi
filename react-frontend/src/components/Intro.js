import React from 'react';
import styled from 'styled-components';


const OuterDiv = styled.div`
    margin: 0 auto;
    height: 300px;
    margin-top: 75px;
    margin-bottom: 40px;
`;

const Text1 = styled.div`
    font-size: 25px;
    width: 100%;
    text-align: center;
`;
const Text2 = styled.div`
    font-size: 25px;
    font-weight:bold;
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
`;

const Title = styled.div`
    font-size: 80px;
    text-align: center;
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 20px;
`;

const Go = styled.button`
    font-size: 30px;
    font-weight:bold;
    width: 250px;
    height: 80px;
    text-align: center;
    background: white;
    border: none;
    border-radius: 10px;

    &:hover {
        background: #d5d5d5;
    }

`;


class Intro extends React.Component {


    constructor(){
        super();
        this.myRef = React.createRef();
    }

    scroll = () => {
        window.scrollTo({
            top: window.innerHeight,
            left: 0,
            behavior: 'smooth'
        });
    }

    render(){

        return <section>
        <OuterDiv ref = {this.myRef}>

            <Text1>Introducing OMi</Text1>
            <Title>Online Medical Informant</Title>
            <Text1>A service identifying a patients issue</Text1>
            <Text1>based on the symptoms that they are experiencing</Text1>

        </OuterDiv>
        <Text2>Search, Select, Indentify. It's that easy.</Text2>
        <Go onClick = {this.scroll}>Try Now</Go>
        </section>
    }
}

export default Intro;