import React,{ useState } from "react";
import Menu from './메뉴/커피/Menu'
function Food(){
    const [text, setText] = useState("")

    function Clickid(e){
        console.log(e)
        setText(e.target.name)
    }
    return(
        <div>
            <br/>
            <button name="Scorn"onClick={Clickid}>스콘</button><br/>
            {text === "Scorn" && <Menu text ={"Scorn"}/>}
            <button name="Sandwich"onClick={Clickid}>샌드위치</button><br/>
            {text === "Sandwich" && <Menu text ={"Sandwich"}/>}
            <button name="Cake"onClick={Clickid}>케이크</button><br/>
            {text === "Cake" && <Menu text ={"Cake"}/>}
            <br/>
        </div>
    )
}
export default Food