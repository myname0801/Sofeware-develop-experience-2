import React,{ useState } from "react";
import Menu from './메뉴/커피/Menu'
function NCoffee(){
    const [text, setText] = useState("")

    function Clickid(e){
        console.log(e)
        setText(e.target.name)
    }
    return(
        <div>
            <br/>

            <button name="Icetea"onClick={Clickid}>아이스티</button><br/>
            {text === "Icetea" && <Menu text ={"Icetea"}/>}
            <button name="Blacktea"onClick={Clickid}>홍차</button><br/>
            {text === "Blacktea" && <Menu text ={"Blacktea"}/>}
            <button name="Greentea"onClick={Clickid}>녹차</button><br/>
            {text === "Greentea" && <Menu text ={"Greentea"}/>}

            <br/>
        </div>
    )
    }
export default NCoffee