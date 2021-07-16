import React from 'react';
import styled from 'styled-components';
import Search from './Search';
import Sym from './Sym';
import Disease from './Disease';
import Ask from './Ask';
import BtnNext from './BtnNext';
import User from './User';
import ToControl from './ToControl';

const OuterWrap = styled.div`

    height: 100%;

`;

const CardWrap = styled.div`
    height: 40%;
    width: 50%;
    min-width: 650px;
    padding: 0px;
    margin: 0 auto;
    margin-top: 40px;
`;
const DWrap = styled.div`
    height: 78%;
    width: 80%;
    min-width: 630px;
    padding: 0px;
    margin: 0 auto;
`;

class Controls extends React.Component{

    state = {
        isLoaded: false,
        symptomBranch: ["Headache", "Cough", "Clammy Skin", "Throat Sore"],
        firstTime: true,
        firstTime2: true,
        searchItems: [],
        control: 0,
        diseased: false,
        dname: "unset",
        ddesc: "unset",
        blacklist: [],
        final: 0,
        constSI: []
    }
    

    componentDidMount() {  

        User.setId(Math.random().toString().substr(2, 9) + Math.random().toString().substr(2, 3));
        console.log(User.getId());

        fetch("http://localhost:8080/fsymptoms/m/a")
          .then(res => res.json())
              .then(
                  (result) => {
                          this.state.constSI = [...result.data.symptoms];
                          let set = [...result.data.symptoms];
                          this.setState({searchItems: set});

                  }
              )  

        
    }

    render() {

        let display = [];
        let c = 0;
        //for (let i = 0; i < this.state.symptomBranch.length; i++) {
        let keepgoing = true;

        let bln = [];

        if (this.state.firstTime){
            display = [...this.state.symptomBranch];
        } else
        while (keepgoing){
            
            let i = Math.floor(Math.random() * this.state.symptomBranch.length);  
            while (bln.includes(i) && this.state.symptomBranch.length >= 4){
                i = Math.floor(Math.random() * this.state.symptomBranch.length); 
                console.log("dupe checked - Len:"+this.state.symptomBranch.length);
                
            }
            bln.push(i);

            //Math.floor(Math.random() * 11);   

            let inBL = false;
            if (this.state.blacklist[0] !== undefined)
            if (this.state.symptomBranch.length > 0)
            for (let z = 0; z < this.state.blacklist.length; z++) {
   
                    console.log("to lower: " + this.state.symptomBranch[i]);
                    if (this.state.symptomBranch[i].toLowerCase() === this.state.blacklist[z].toLowerCase()){
                        inBL = true;
                        console.log("was hre");
                    }
                 
            }

            if (inBL) continue;

            c++;
            display.push(this.state.symptomBranch[i]);
            if (display.length >= 4) keepgoing = false;
            console.log(display.length);
            //console.log("render log: " + display[i]);

 
        }
        let a = <section> </section>; 
        let g = <section> </section>;
        let e = <section> </section>;
        let r = <DWrap>
         <Disease name = {this.state.dname} desc = {this.state.ddesc} click = {this.resetCtrls}/>
        </DWrap>

        if (this.state.diseased !== true) {

            
            a = <Ask />;
            r = <CardWrap>{

                display.map(s => (
                <Sym click = {this.remove} type = {s} key = {s} />

                
            ))} </CardWrap>;
            e = <BtnNext click = {this.nextSet}/>
            g = <Search 
            found = {this.remove} 
            items = {this.state.searchItems}
            ></Search>; 
        } else {
            console.log("##" + this.state.ddesc);
        }

        if (this.state.firstTime){ 
            
        }
        

        return <OuterWrap>
            {a}
            {g}
            {r}
            <div>{e}</div>
        </OuterWrap>;

    }

    resetCtrls = () => {
        this.setState({
            isLoaded: false,
            symptomBranch: ["Headache", "Cough", "Clammy Skin", "Throat Sore"],
            firstTime: true,
            firstTime2: true,
            control: 0,
            diseased: false,
            dname: "unset",
            ddesc: "unset",
            searchItems: this.state.constSI,
            blacklist: [],
            final: 0
        });
        console.log("reset complete");

        window.scrollTo(0, window.innerHeight);
        
    }

    nextSet = () => {

        if (this.state.firstTime){
            fetch("http://localhost:8080/fsymptoms" + "/m/m")
            .then(res => res.json())
                .then(
                    (result) => {
                            this.setState({symptomBranch: result.data.symptoms, firstTime2: false, firstTime: false}); // you are here
                    }
                )  
        } else {
            this.forceUpdate();
        }

    }

    remove = (type) => {


        let pq = [...this.state.blacklist];
        pq.push(type);

        type = type.replace(" ", "%20");
        let ddname = "";
        let dddesc = "";
        let ddd = false;
    
        let temp = ["", "", "", ""];
        
        type = type.toLowerCase();
        console.log(" --- " + type)


        fetch("http://localhost:8080/disease/"+ type + "/u/" + User.getId())
            .then(res => res.json())
                .then(
                    (result) => {

                            console.log("SENT: " + type);
                            console.log("RECEIVED: " + JSON.stringify(result.data));
                            console.log("disease: " + result.data.disease)

                            if (result.data.disease != undefined){

                                temp = [];
                                console.log("found disease: init");
                                ddname = result.data.disease[0].disease_name;
                                //dddesc =  result.data.description;
                                ddd = true;
                                console.log("found disease: set name");
                                
                                //this.setState({final: true});
                                setTimeout(() => {
                                    this.setState({diseased: ddd, dname: ddname, ddesc: dddesc, blacklist: pq});
                                }, 800);
                                

                            } else {


                                temp = [];

                                console.log(result.data);

                                if (result.data.symptoms != undefined) {
                                    for (let z = 0; z < result.data.symptoms.length; z++) {
                                    
                                        temp.push(result.data.symptoms[z]);
                                    }

                                } else
                                for (let z = 0; z < result.data.length; z++) {
                                    
                                    temp.push(result.data[z]);
                                }

                                

                            }
                    }
                )   
            
        

        
        setTimeout(() => {
            console.log("ddd: " + ddd);

            fetch("http://localhost:8080/symptoms" + "/u/" + User.getId() + "/m/a")
            .then(res => res.json())
                .then(
                    (result) => {
                        let si = [...result.data.symptoms];
                        this.setState({symptomBranch: temp, diseased: ddd, dname: ddname, ddesc: dddesc, blacklist: pq, firstTime: false, searchItems: si});
                    }
                )
        }, 1000);

        

    }


}

export default Controls;