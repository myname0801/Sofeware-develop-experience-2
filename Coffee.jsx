import React,{ useState } from "react";
import Menu from './메뉴/커피/Menu'
function Coffee(){
    const [text, setText] = useState("")

    function Clickid(e){
        console.log(e)
        setText(e.target.name)
    }
    return(
        <div>
            <br/>
            <button name="에스프레소"onClick={Clickid}>에스프레소</button><br/>
            {text === "에스프레소" && <Menu text ={"Espresso"}/>}
            <button name="아메리카노"onClick={Clickid}>아메리카노</button><br/>
            {text === "아메리카노" && <Menu text ={"Americano"}/>}
            <button name="라떼"onClick={Clickid}>라떼</button><br/>
            {text === "라떼" && <Menu text ={"Latte"}/>}
            <button name="더치커피"onClick={Clickid}>더치커피</button><br/>
            {text === "더치커피" && <Menu text ={"Dutch"}/>}
            <button name="카푸치노"onClick={Clickid}>카푸치노</button><br/>
            {text === "카푸치노" && <Menu text ={"Cappuccino"}/>}
            <br/>
        </div>
    )
    }
export default Coffee