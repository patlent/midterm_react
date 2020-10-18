import React from 'react'
import data from "./Data";
import Box from "./Box";
import {Link} from "react-router-dom";




function Wrapper(){


    // const [data1, setData1] = React.useState([data]);
    // const [submit] = React.useState(false);

    // const reset = () =>{
    //     setImage([]);
    //     setName([]);
    //     setCategory([]);
    //     setValue([]);
    // }


    


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
