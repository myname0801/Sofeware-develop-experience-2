import React,{ useState } from "react";
import Coffeemenu from "./Coffee";
import Food from "./Food";
import NCoffee from "./NCoffee";
import Sold from "./Sold";

function Homemenu(){
    const [text, setText] = useState("")

    function Clickid(e){
        console.log(e)
        setText(e.target.name)
    }

    return(
        <div>
            <Sold/>
            <h2>대표메뉴</h2>
            <button name="Coffee" onClick={Clickid}>Coffee</button> <nbsp/>
            <button name="NCoffee" onClick={Clickid}>Non-Coffee</button> <nbsp/>
            <button name="Food" onClick={Clickid}>Food</button> <nbsp/> 
            {text === "Coffee" && <Coffeemenu/>}
            {text === "NCoffee" && <NCoffee/>}
            {text === "Food" && <Food/>}


        </div>
    )

}

export default Homemenu