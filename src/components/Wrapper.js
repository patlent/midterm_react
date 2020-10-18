import React from 'react'
import data from "./Data";
import Box from "./Box";
import {Link} from "react-router-dom";




function Wrapper(props){

    const [setName]=React.useState(props.name);
    const [setCategory] = React.useState(data.category);
    const [setValue] = React.useState(props.value);
    const [setImage] = React.useState(props.img);
    // const [data1, setData1] = React.useState([data]);
    // const [submit] = React.useState(false);

    // const reset = () =>{
    //     setImage([]);
    //     setName([]);
    //     setCategory([]);
    //     setValue([]);
    // }



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


    const dateEles = data.map((bx, idx)=>

        <Box name={bx.name} category={bx.category} value={bx.value} img={bx.img} id = {bx.id} key={idx} />

    );


    return(

        <div>
            <button><Link to={"/dataPage/games"}>Games</Link></button>
            <button><Link to={"/dataPage/television"}>Television</Link></button>
            <button><Link to={"/dataPage/animation"}>Animation</Link></button>
            <button><Link to={"/"}>Funko</Link></button>

            {dateEles}

        </div>



    )
}




export default Wrapper;
