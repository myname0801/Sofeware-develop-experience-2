import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css'

function History (){
    const [orderH, SetOrderH] = useState([])
    const url = 'http://localhost:1000/history'
    
    useEffect(() => {
    
        const Data = async () => {
          try {
            const response = await axios.get(url);
            console.log("Response Data:", response.data);
            SetOrderH(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        Data();
      }, []);
      
    return(
        <div>
            {orderH.map((orderH, index) =>(
                <h4 key={index}>
                  주문날짜: {orderH.주문날짜} <br /> 
                  메뉴: {orderH.메뉴이름} <br /> 
                  단가: {orderH.가격}원 <br /> 
                  수량: {orderH.수량}개 <br /> 
                  합계: {orderH.총구매금액}원</h4>
            ))}
        </div>
    )
}

export default History