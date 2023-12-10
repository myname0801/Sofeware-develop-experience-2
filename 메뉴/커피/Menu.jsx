import React, { useState, useEffect } from "react";
import "./image/Image.css"
import axios from "axios";

function Menu(props) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const apiUrl = `http://localhost:1000/${props.text}`;
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        console.log("Response Data:", response.data);
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [props.text]);
  function Buy(){
    alert("구매하셨습니다!")
    axios.put(`http://localhost:1000/${props.text}`)
        .then((res) => {
          console.log(res);
        });
        axios.delete(`http://localhost:1000/${props.text}`)
        .then((res) => {
          console.log(res);
        });
    }
      function Aput(){
        alert("장바구니에 담으셨습니다!")
        axios.post(`http://localhost:1000/${props.text}`)
        .then((res) => {
          console.log(res);
        });
        }
    return(
        <div>
          <h1>{props.text}</h1>
          <div className="image">
          <img src={require(`./image/${props.text}.jpeg`)} alt=""/>
          </div>
          <h3>제품정보</h3>
          <div>
          {items.map((item, index) => (
        <h3 key={index}>{item.메뉴이름} {item.가격}원  <br/></h3>
        ))}
          </div>
         <div><br/><button onClick={Buy}>구매하기</button> <nbsp/>
         <button onClick={Aput}>장바구니에 담기</button></div><br/>
        </div>
    )
    }

export default Menu;