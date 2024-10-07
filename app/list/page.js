// import Image from "next/image";
// import tomato from "/public/food0.png";

'use client'

import { useState } from "react";

export default function List() {
  let 상품 = ['Tomatoes', 'Pasta', 'Coconut']
  const [수량, 수량변경] = useState([0, 0, 0])
  return (
    <div>
      <h4 className="title">상품목록</h4>

      {
        상품.map((v, i) => {
          return (
            <div className="food" key={i}>
              {/* <Image src={tomato} className="food-img"/> */}
              <img src={`/food${i}.png`} className="food-img" />
              <h4>{v} $40</h4>
              <span> {수량[i]} </span>
              <button onClick={() => {
                수량[i] = 수량[i] + 1
                수량변경([...수량])
              }}>+</button>
            </div>
          )
        })
      }
    </div >
  );
}
