import React from 'react';
import load from "../img/loader.gif";
import styled from 'styled-components';
import ToControl from './ToControl';

const Above = styled.div`
    height: 40%;
`;
const Above2 = styled.div`
    height: 12%;
`;

const Wrapp = styled.div`

    width: 100%;
    height: 100%;
    color: white;
    `;

const Title = styled.p`
    margin: 0;
    font-size: 45px;
    text-align: center;
    `;

    const Title2 = styled.p`
    margin: 0;
    font-size: 45px;
    text-align: center;
    font-weight: bold;
    `;

const Para = styled.p`
    margin: 10px 0 0 0;
    font-size 60px;
    font-weight: bold;
    `;


const Exit = styled.button`
    width: 150px;
    height: 50px;
    background: #0d1117;
    color: white;
    border-radius: 3px;
    border: none;
    font-size: 30px;
    font-weight: bold;

    &:hover{
        background: White;
        color: Black;
    }   
`;

const Next = styled.button`
    width: 150px;
    height: 50px;
    background: #0d1117;
    color: white;
    border-radius: 3px;
    border: none;
    font-size: 30px;
    font-weight: bold;

    &:hover{
        background: White;
        color: Black;
    }
`;
const Wiki = styled.button`
    width: 150px;
    height: 50px;
    background: #0d1117;
    color: white;
    border-radius: 3px;
    border: none;
    font-size: 30px;
    font-weight: bold;

    &:hover{
        background: White;
        color: Black;
    }
`;

const Loading = styled.button`
    width: 150px;
    height: 50px;
    background: #0d1117;
    border: none;
    font-size: 30px;
    font-weight: bold;
    outline: none;
`;

const Btns = styled.div`
    height: 50px;
    margin-top: 200px;
`;

const Container = styled.div`
    height: 70%;
`;

const WikiWrap = styled.div`
    margin-top: 30px;
    height: 100%;
    width: 90%;
    min-width: 675px;
    max-width: 1400px;
    border: 4px solid white;
    border-radius: 10px;
    overflow: hidden;
    
`;
const Summary = styled.div`
    width: 59%;
    height: 88%;
    float:left;
    padding: 25px 10px 30px 30px;
    text-align: left;
    font-size: 23px;
    line-height: 1.5;
    overflow-y: auto;
    border: none;
    border-right: 3px solid white;

    &::-webkit-scrollbar-track
    {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background-color: #0d1117;
    }

    &::-webkit-scrollbar
    {
    width: 6px;
    background-color: #0d1117;
    }

    &::-webkit-scrollbar-thumb
    {
    background-color: #FFFFFF;
    }
`;

const InfoBox = styled.div`
    width: 32%;
    height: 88%;
    float: right;
    padding: 25px 15px 25px 0;
    overflow-y: auto;
    line-height: 1.2;
    font-size: 24px;

    &::-webkit-scrollbar-track
    {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background-color: #0d1117;
    }

    &::-webkit-scrollbar
    {
    width: 6px;
    background-color: #0d1117;
    }

    &::-webkit-scrollbar-thumb
    {
    background-color: #FFFFFF;
    }
    
`;

const H = styled.div`
    font-size: 23px;
    font-weight: bold;
    text-align:left;
`;

const Sub = styled.div`
    font-size: 20px;    
    text-align: left;
    margin-bottom: 12px;
`;

class Disease extends React.Component {

    
    state = {
        i: <Loading><img src={load}></img></Loading>,
        content: <Container><Above /><Title>We think you might have</Title><Para>{this.props.name}</Para><ToControl></ToControl></Container>,
        wiki: 0
    }
    
    constructor(props){
        super(props);
        fetch("http://localhost:8080/description/" + props.name)
            .then(res => res.json())
                .then(
                    (result) => {
                            this.setState({i: <Next onClick = {this.info}>Info</Next>, wiki: result.data}); // you are here
                            console.log(this.state.wiki);
                    }
                )
    }
    
    info = () => {

        let isItems = false;
        let info = [];
        if (this.state.wiki.info_box != ""){
            let items = this.state.wiki.info_box;
            isItems = true;
            for (var key in items){
                if (items.hasOwnProperty(key)){
                    info.push(<section><H>{key}</H><Sub>{items[key]}</Sub></section>);
                }
            }
        }
        let newContent;
        if (isItems){
            newContent = (
                <Container>
                    <Above2 />
                    <Title2>{this.props.name}</Title2>
                    <WikiWrap>
                        <Summary>{this.state.wiki.summary}</Summary>
                        <InfoBox>{info.map((it) => <section>{it}</section>)}</InfoBox>
                    </WikiWrap>
                </Container>
            );
        } else {
            newContent = (
                <Container>
                    <Above2 />
                    <Title2>{this.props.name}</Title2>
                    <WikiWrap>
                        <Summary>{this.state.wiki.summary}</Summary>
                        <InfoBox>No additional info available.</InfoBox>
                    </WikiWrap>
                </Container>
            );
        }

        let wikibutton = <Wiki onClick = {() => alert("Not available.")}>Wikipedia</Wiki>;
        if (this.state.wiki.url != ""){
            wikibutton = <Wiki  type="button"
            onClick={(e) => {
                e.preventDefault();
                window.location.href=this.state.wiki.url;
            }}>Wikipedia</Wiki>;
        }

        this.setState({i: wikibutton, content: newContent})
    }

    render() {

        

        return <Wrapp>
            
                {this.state.content}
                
            <Btns>
                <Exit onClick = {() => this.props.click()}>Back</Exit>
                {this.state.i}
            </Btns>
        </Wrapp>;
    }

}

export default Disease;