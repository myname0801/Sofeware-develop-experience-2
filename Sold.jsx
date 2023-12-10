import React,{useState, useEffect} from 'react';
import axios from "axios";

function Sold() { //최대판매
    const [items, setItems] = useState([]);
    useEffect(() => {
      const apiUrl = 'http://localhost:1000/Sold';
  
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
      return(
          <div>
            <h1>최대 누적판매!</h1>
            <h3>제품정보</h3>
            <div>
            {items.map((item, index) => (
          <h3 key={index}>{item.순위}위 {item.메뉴이름} 누적판매 {item.판매량} <br/></h3>
          ))}
            </div>
          </div>
      )
      }

export default Sold;