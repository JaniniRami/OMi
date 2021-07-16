import React from 'react';
import styled from 'styled-components';

const Above = styled.div`
    height: 25px;
    min-height: 10px;
`;

const OuterDiv = styled.div`
    margin: 0 auto;
    height: 50px;
    max-height:50px;
    width: 85%;
    border-radius: 10px;
    background: white;
    margin-bottom: 100px;
`;

const SpLeft = styled.span`
    float: left;
    text-align: left;
    padding: 4px;
    padding-left: 10px;
    color: black;
    font-size: 35px;
    width: 200px;
    height: 100%;
    font-weight: bolder;

`;

const Sp = styled.button`
    float: center;
    text-align: center;
    margin-left: 60px;
    font-size: 18px;
    font-weight: bold;
    width: 200px;
    height: 100%;
    padding-top: 4px;
    border: none;
    background: white;
`;


const SpRight = styled.span`
    float: Right;
    text-align: center;
    width: 200px;
    height: 80%;
`;

class Bar extends React.Component {

    
    scroll3 = () => {
        window.scrollTo({
            top: window.innerHeight*3,
            left: 0,
            behavior: 'smooth'
        });
    }
    scroll4 = () => {
        window.scrollTo({
            top: window.innerHeight*4,
            left: 0,
            behavior: 'smooth'
        });
    }
    scroll5 = () => {
        window.scrollTo({
            top: window.innerHeight*5,
            left: 0,
            behavior: 'smooth'
        });
    }
    
    al = () => {
        alert("Coming soon!");
    }

    render(){

        return <section>
        <Above />
        <OuterDiv>

            <SpLeft>OMi</SpLeft>

            <Sp onClick = {this.scroll4}>About</Sp>
            <Sp onClick = {this.al}>Doctors</Sp>
            <Sp type="button"
            onClick={(e) => {
                e.preventDefault();
                window.location.href='https://github.com/kevin200617/OMi';
            }}>GitHub</Sp>

            <SpRight></SpRight>

        </OuterDiv>
        </section>
    }
}

export default Bar;