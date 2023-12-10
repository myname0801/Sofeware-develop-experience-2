import React, { useState, useEffect } from "react";
import axios from "axios";

function Bag() {
  // 상태 초기화
  const [lprice, setLprice] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
      const apiUrl = 'http://localhost:1000/bag';
  
      const fetchData = async () => {
        try {
          const response = await axios.get(apiUrl);
          console.log("Response Data:", response.data);
          // 서버 응답 구조에 따라 수정
          setItems(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);

  useEffect(() => {
    const apiUrl = 'http://localhost:1000/bag';
  
    const fetchData = async () => {
      try {
        const response = await axios.post(apiUrl);
        console.log("Response Data:", response.data);
        setLprice(response.data[0]['SUM(Price * Count)']);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);

  function Empty(){
    axios.delete("http://localhost:1000/bag").then((response) => {
    try{  
    console.log(response.data)
    } catch (error){
      console.error('Error fetching data:', error);
    }
    alert("장바구니를 비우셨습니다!")
    });
  }
  function Aempty() {
    axios.post("http://localhost:1000/bag").then((response) => {
      try{  
      console.log(response.data)
      } catch (error){
        console.error('Error fetching data:', error);
    alert("총 " + [lprice || 0] + " 원을 구매하셨습니다")
    alert("적립된 포인트는 " + ([lprice || 0] / 20) + " 포인트 입니다")
  }})}
  return (
    <div>
      <h3>장바구니</h3>
      <div>
      {items.map((item, index) => (
        <h3 key={index}>{item.Name} {item.Price}원 {item.Count}개</h3>
      ))}
      </div>
      <br />
      <button onClick={Empty}>장바구니 비우기</button>{" "}
      <button
        onClick={() => {
          Aempty();
          Empty();
        }}
      >
        구매하기
      </button>
      <h4>합계 금액: {lprice || 0}원</h4>
    </div>
  );
}
export default Bag;