import React,{ useState, useRef } from "react";
import Menu from './메뉴/커피/Menu';

function Msearch(){
    const [text, setText] = useState("")
    const textRef = useRef("")

    const InputH = (e) => {
        textRef.current = e.target.value
    }
    const ClickH = () => {
        setText(textRef.current)
    }
return(
    <div>
        <input placeholder = "검색할메뉴를 입력하세요"onChange={InputH} type="text" />
        <button onClick={ClickH}>검색</button>
        {text === "아메리카노" && <Menu text ={"Americano"}/>}
        {text === "에스프레소" && <Menu text ={"Espresso"}/>}
        {text === "라떼" && <Menu text ={"Latte"}/>}
        {text === "더치커피" && <Menu text ={"Dutch"}/>}
        {text === "카푸치노" && <Menu text ={"Cappuccino"}/>}
        {text === "녹차" && <Menu text ={"Greentea"}/>}
        {text === "홍차" && <Menu text ={"Blacktea"}/>}
        {text === "아이스티" && <Menu text ={"Icetea"}/>}
        {text === "케이크" && <Menu text ={"Cake"}/>}
        {text === "샌드위치" && <Menu text ={"Sandwich"}/>}
        {text === "스콘" && <Menu text ={"Scorn"}/>}
    </div>
    )
}

export default Msearch
