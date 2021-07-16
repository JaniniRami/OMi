import React from 'react';
import styled from 'styled-components';

const Above = styled.div`
    height: 25px;
`;

const Box = styled.div`

    margin: 0 auto;
    height: 50px;
    width: 85%;
    min-width: 600px;
    border-radius: 50px;
    background: white;

`;

const ItemsUl = styled.ul`

    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;

`;

const ILi = styled.li`
    display: inline-block;
    float: center;
    padding: 12px 20px 12px 20px;
    margin-left: 4%;
    margin-right: 4%;
    border-radius: 5px;

    &:hover {
        cursor: pointer;
    }
    font-weight:bold;
    font-size: 21px;
    
`;

const ItemA = styled.a`

    witdth: 100%;
    height: 100%;
    text-align: center;
    text-decoration: nonce;

`;

const OMi = styled.p`

    margin: 5px 0 0 0;
    float: top;
    position: absolute;
    text-align: left;
    padding-left: 10px;
    font-size: 38px;
    font-weight: bolder;

    &:hover {
        cursor: default;
    }

`;

class Bar extends React.Component {

    al = () => {
        alert("Coming soon!");
    }

    scroll4 = () => {
        window.scrollTo({
            top: window.innerHeight*2,
            left: 0,
            behavior: 'smooth'
        });
    }

    render(){



        return <section>
            <Above />
            <Box>

                <OMi>OMi</OMi>
                <ItemsUl>

                    <ILi onClick = {this.scroll4}><ItemA>About</ItemA></ILi>
                    <ILi onClick = {this.al}><ItemA>Doctors</ItemA></ILi>
                    <ILi type="button"
                        onClick={(e) => {
                            e.preventDefault();
                            window.location.href='https://github.com/kevin200617/OMi';
                        }}><ItemA>Github</ItemA></ILi>

                </ItemsUl>
    
            </Box>

        </section>


    }

}

export default Bar;