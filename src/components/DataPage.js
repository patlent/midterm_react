import React from 'react';
import {Link} from "react-router-dom";
import data from "./Data";
import Box from "./Box";


function DataPage(props){


    let style ={
        display: "inline-block",
        verticalAlign: 'top',

        padding: "7px",
        border: 'black solid 1px',
        width: '300px',
        borderTop: 'gray solid 1px',
        margin: '20px 0',
        gridTemplateColumns:" 120px 120px 120px",
        fontSize:"10px"
    };

    let style1 = {
        textAlign:'center'
    }


    const dateEles = data.map((bx, idx)=>

        <Box name={bx.name} category={bx.category} value={bx.value} img={bx.img} id = {bx.id} key={idx} />

    );

    return(
        <div>

            <div style={style1}>
            <button><Link to={"/dataPage/games"}>Games</Link></button>
            <button><Link to={"/dataPage/television"}>Television</Link></button>
            <button><Link to={"/dataPage/animation"}>Animation</Link></button>
            <button><Link to={"/"}>Funko</Link></button>
            </div>
            {/*Use for linking to a new page to filter out funko pops by its category*/}
            {dateEles.filter(funko => funko.props.category === props.match.params.id).map(Funko => (

                <div style={style}>
                    <div>
                        <img src={Funko.props.img}/>
                        <h1>{"Name: " + Funko.props.name}</h1>
                        <h2>{"Category: " + Funko.props.category}</h2>
                        <h2>{"Value: " + Funko.props.value}</h2>

                    </div>
                </div>
            ))}

            {/*Use for linking the individual funko pop.*/}
            {dateEles.filter(funko => funko.props.name === props.match.params.id).map(Funko => (
                <div>
                    <div style={style}>
                        <img src={Funko.props.img}/>
                        <h1>{"Name: " + Funko.props.name}</h1>
                        <h2>{"Category: " + Funko.props.category}</h2>
                        <h2>{"Value: " + Funko.props.value}</h2>

                    </div>
                </div>
            ))}
        </div>
    )
}
export default DataPage;