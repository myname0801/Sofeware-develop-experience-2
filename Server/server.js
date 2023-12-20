const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 1000
const mysql = require('mysql')
const cors = require('cors');

app.use(cors());

app.use(bodyParser.json());



const db = mysql.createConnection({ //서버 구성 (mysql에서 데이터 받아오는거)
    host : 'localhost',
    user : 'root',
    password : '0000',
    database : 'coffee'
})


app.use(function(req, res, next) { //CORS 에러 해결문
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'get, post, PUT, delete');
    next();
  });
app.use(express.urlencoded({ extended: true }))

//#region 커피메뉴 서버코드
app.get('/Americano', (req, res) => {
    const sql = "select 메뉴이름, 가격 from 메뉴 where 메뉴이름 = '아메리카노';"
    db.query(sql, (err, result) => {
      if (err) {
        console.error('Error executing MySQL query:', err);
        res.status(500).send('Internal Server Error');
      } else {
        res.json(result);
      }
    });
  });

  app.get('/Espresso', (req, res) => {
    const sql = "select 메뉴이름, 가격 from 메뉴 where 메뉴이름 = '에스프레소';"
    db.query(sql, (err, result) => {
      if (err) {
        console.error('Error executing MySQL query:', err);
        res.status(500).send('Internal Server Error');
      } else {
        res.json(result);
      }
    });
  });

  app.get('/Latte', (req, res) => {
    const sql = "select 메뉴이름, 가격 from 메뉴 where 메뉴이름 = '라떼';"
    db.query(sql, (err, result) => {
      if (err) {
        console.error('Error executing MySQL query:', err);
        res.status(500).send('Internal Server Error');
      } else {
        res.json(result);
      }
    });
  });
  
  app.get('/Dutch', (req, res) => {
    const sql = "select 메뉴이름, 가격 from 메뉴 where 메뉴이름 = '더치커피';"
    db.query(sql, (err, result) => {
      if (err) {
        console.error('Error executing MySQL query:', err);
        res.status(500).send('Internal Server Error');
      } else {
        res.json(result);
      }
    });
  });
  
  app.get('/Cappuccino', (req, res) => {
    const sql = "select 메뉴이름, 가격 from 메뉴 where 메뉴이름 = '카푸치노';"
    db.query(sql, (err, result) => {
      if (err) {
        console.error('Error executing MySQL query:', err);
        res.status(500).send('Internal Server Error');
      } else {
        res.json(result);
      }
    });
  });
  
//#endregion
//#region 음료메뉴 서버코드
app.get('/Icetea', (req, res) => {
  const sql = "select 메뉴이름, 가격 from 메뉴 where 메뉴이름 = '아이스티';"
  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(result);
    }
  });
});

app.get('/Blacktea', (req, res) => {
  const sql = "select 메뉴이름, 가격 from 메뉴 where 메뉴이름 = '홍차';"
  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(result);
    }
  });
});

app.get('/Greentea', (req, res) => {
  const sql = "select 메뉴이름, 가격 from 메뉴 where 메뉴이름 = '녹차';"
  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(result);
    }
  });
});

//#endregion 
//#region 음식메뉴 서버코드

app.get('/Scorn', (req, res) => {
  const sql = "select 메뉴이름, 가격 from 메뉴 where 메뉴이름 = '스콘';"
  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(result);
    }
  });
});

app.get('/Sandwich', (req, res) => {
  const sql = "select 메뉴이름, 가격 from 메뉴 where 메뉴이름 = '샌드위치';"
  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(result);
    }
  });
});

app.get('/Cake', (req, res) => {
  const sql = "select 메뉴이름, 가격 from 메뉴 where 메뉴이름 = '케이크';"
  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(result);
    }
  });
});


//#endregion

//#region 장바구니
app.get('/bag', (req, res) => {
    const sql = "select * from  바구니;"
    db.query(sql, (err, result) => {
      if (err) {
        console.error('Error executing MySQL query:', err);
        res.status(500).send('Internal Server Error');
      } else {
        res.json(result);
      }
    });
  });

app.post('/bag', (req, res) => { //장바구니 총 가격
    const Pricesum = "SELECT SUM(Price * Count) FROM 바구니;"
    db.query(Pricesum, (err, result) =>{
        try {
        res.send(result);
        console.log(result);
        } catch (err) {
        console.log(err)
        }
    })
})

app.delete('/bag', (req, res) => { //장바구니 비우기
    const Emptybag = "delete from 바구니;"
    db.query(Emptybag, (err, result) =>{
        try {
        res.send(result);
        console.log(result);
        } catch (err) {
        console.log(err)
        }
    })
})

app.put('/bag', (req, res) => { //장바구니 총 가격
  const Pricesum = ""
  db.query(Pricesum, (err, result) =>{
      try {
      res.send(result);
      console.log(result);
      } catch (err) {
      console.log(err)
      }
  })
})

app.delete('/baginto', (req, res)=>{
  const menusold = `INSERT INTO 주문메뉴 (고객아이디, 메뉴이름, 수량, 가격, 총구매금액)
  SELECT '주환', Name AS 메뉴이름, Count AS 수량, Price AS 가격, totalprice as 총구매금액
  FROM 바구니;`
  db.query(menusold, (err, result) =>{
      try {
      res.send(result);
      console.log(result);
      } catch (err) {
      console.log(err)
      }
  })
})
//#region 커피 장바구니
app.post('/Americano', (req, res)=>{
    const MenuInsert = `INSERT INTO 바구니 (Name, Price, Count)
    VALUES ("아메리카노", 1000, 1)
    ON DUPLICATE KEY UPDATE Count = Count + 1;`
    db.query(MenuInsert, (err, result) =>{
        try {
        res.send(result);
        console.log(result);
        } catch (err) {
        console.log(err)
        }
    })
})

app.post('/Cappuccino', (req, res)=>{
    const MenuInsert = 
    `INSERT INTO 바구니 (Name, Price, Count)
    VALUES ("카푸치노", 3500, 1)
    ON DUPLICATE KEY UPDATE Count = Count + 1;`
    db.query(MenuInsert, (err, result) =>{
        try {
        res.send(result);
        console.log(result);
        } catch (err) {
        console.log(err)
        }
    })
})
app.post('/Latte', (req, res)=>{
    const MenuInsert = 
    `INSERT INTO 바구니 (Name, Price, Count)
    VALUES ("라떼", 2500, 1)
    ON DUPLICATE KEY UPDATE Count = Count + 1;`
    db.query(MenuInsert, (err, result) =>{
        try {
        res.send(result);
        console.log(result);
        } catch (err) {
        console.log(err)
        }
    })
})
app.post('/Dutch', (req, res)=>{
    const MenuInsert = 
    `INSERT INTO 바구니 (Name, Price, Count)
    VALUES ("더치커피", 2500, 1)
    ON DUPLICATE KEY UPDATE Count = Count + 1;`
    db.query(MenuInsert, (err, result) =>{
        try {
        res.send(result);
        console.log(result);
        } catch (err) {
        console.log(err)
        }
    })
})
app.post('/Espresso', (req, res)=>{
    const MenuInsert = 
    `INSERT INTO 바구니 (Name, Price, Count)
    VALUES ("에스프레소", 1000, 1)
    ON DUPLICATE KEY UPDATE Count = Count + 1;`
    db.query(MenuInsert, (err, result) =>{
        try {
        res.send(result);
        console.log(result);
        } catch (err) {
        console.log(err)
        }
    })
})
//#endregion 
//#region 음료 장바구니
app.post('/Icetea', (req, res)=>{
    const MenuInsert = 
    `INSERT INTO 바구니 (Name, Price, Count)
    VALUES ("아이스티", 2000, 1)
    ON DUPLICATE KEY UPDATE Count = Count + 1;`
    db.query(MenuInsert, (err, result) =>{
        try {
        res.send(result);
        console.log(result);
        } catch (err) {
        console.log(err)
        }
    })
})

app.post('/Greentea', (req, res)=>{
    const MenuInsert = 
    `INSERT INTO 바구니 (Name, Price, Count)
    VALUES ("녹차", 2000, 1)
    ON DUPLICATE KEY UPDATE Count = Count + 1;`
    db.query(MenuInsert, (err, result) =>{
        try {
        res.send(result);
        console.log(result);
        } catch (err) {
        console.log(err)
        }
    })
})

app.post('/Blacktea', (req, res)=>{
    const MenuInsert = 
    `INSERT INTO 바구니 (Name, Price, Count)
    VALUES ("홍차", 2000, 1)
    ON DUPLICATE KEY UPDATE Count = Count + 1;`
    db.query(MenuInsert, (err, result) =>{
        try {
        res.send(result);
        console.log(result);
        } catch (err) {
        console.log(err)
        }
    })
})
//#endregion 
//#region 음식 장바구니
app.post('/Sandwich', (req, res)=>{
    const MenuInsert = 
    `INSERT INTO 바구니 (Name, Price, Count)
    VALUES ("샌드위치", 5000, 1)
    ON DUPLICATE KEY UPDATE Count = Count + 1;`
    db.query(MenuInsert, (err, result) =>{
        try {
        res.send(result);
        console.log(result);
        } catch (err) {
        console.log(err)
        }
    })
})

app.post('/Cake', (req, res)=>{
    const MenuInsert = 
    `INSERT INTO 바구니 (Name, Price, Count)
    VALUES ("케이크", 4500, 1)
    ON DUPLICATE KEY UPDATE Count = Count + 1;`
    db.query(MenuInsert, (err, result) =>{
        try {
        res.send(result);
        console.log(result);
        } catch (err) {
        console.log(err)
        }
    })
})

app.post('/Toast', (req, res)=>{
    const MenuInsert = 
    `INSERT INTO 바구니 (Name, Price, Count)
    VALUES ("토스트", 4000, 1)
    ON DUPLICATE KEY UPDATE Count = Count + 1;`
    db.query(MenuInsert, (err, result) =>{
        try {
        res.send(result);
        console.log(result);
        } catch (err) {
        console.log(err)
        }
    })
})

app.post('/Scorn', (req, res)=>{
    const MenuInsert = 
    `INSERT INTO 바구니 (Name, Price, Count)
    VALUES ("스콘", 2500, 1)
    ON DUPLICATE KEY UPDATE Count = Count + 1;`
    db.query(MenuInsert, (err, result) =>{
        try {
        res.send(result);
        console.log(result);
        } catch (err) {
        console.log(err)
        }
    })
})
//#endregion 

//#endregion 

//#region 구매하기

app.put('/Americano', (req, res)=>{
  const MenuInsert = `INSERT INTO 주문메뉴 (고객아이디, 메뉴이름, 수량, 가격)
  SELECT '주환', 메뉴이름, 1, 가격
  FROM 메뉴
  WHERE 메뉴이름 = "아메리카노";`
  db.query(MenuInsert, (err, result) =>{
      try {
      res.send(result);
      console.log(result);
      } catch (err) {
      console.log(err)
      }
  })
})

app.delete('/Americano', (req, res)=>{
  const menusold = `UPDATE 고객 c
JOIN (
    SELECT "주환", SUM(수량 * 가격) AS 총가격
    FROM 주문메뉴
    GROUP BY 고객아이디
) o ON "주환" = "주환"
SET c.구매총액 = o.총가격;`
  db.query(menusold, (err, result) =>{
      try {
      res.send(result);
      console.log(result);
      } catch (err) {
      console.log(err)
      }
  })
})

app.put('/Espresso', (req, res)=>{
  const MenuInsert = `INSERT INTO 주문메뉴 (고객아이디, 메뉴이름, 수량, 가격)
  SELECT '주환', 메뉴이름, 1, 가격
  FROM 메뉴
  WHERE 메뉴이름 = "에스프레소";`
  db.query(MenuInsert, (err, result) =>{
      try {
      res.send(result);
      console.log(result);
      } catch (err) {
      console.log(err)
      }
  })
})

app.delete('/Espresso', (req, res)=>{
  const menusold = `UPDATE 고객 c
JOIN (
    SELECT "주환", SUM(수량 * 가격) AS 총가격
    FROM 주문메뉴
    GROUP BY 고객아이디
) o ON "주환" = "주환"
SET c.구매총액 = o.총가격;`
  db.query(menusold, (err, result) =>{
      try {
      res.send(result);
      console.log(result);
      } catch (err) {
      console.log(err)
      }
  })
})

app.get('/asdf', (req, res) => {
  const sql = "select * from 주문메뉴;"
  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(result);
    }
  });
});

//#endregion

//#region 최대판매메뉴

app.get('/sold', (req, res) => {
    const sql = "select 순위, 메뉴이름, 판매량 from 최대판매메뉴 where 순위 in (1, 2);"
    db.query(sql, (err, result) => {
      if (err) {
        console.error('Error executing MySQL query:', err);
        res.status(500).send('Internal Server Error');
      } else {
        res.json(result);
      }
    });
  });

//#region

app.get('/history', (req, res)=>{
  const sql = "select 주문날짜, 메뉴이름, 수량, 가격, 총구매금액 from 주문메뉴"
  db.query(sql, (err, result)=>{
    if(err){
      console.error('Error',err)
      res.status(500).send('Error')
    } else{
      res.json(result);
    }
  })
})


app.listen(port, () => { //콘솔창에 정상실행시 표시할거
    console.log(`서버 실행중 on http://localhost:${port}`)
})
