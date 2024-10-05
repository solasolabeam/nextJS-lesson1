// import Image from "next/image";
// import tomato from "/public/food0.png";


export default function List() {
  let 상품 = ['Tomatoes', 'Pasta', 'Coconut']

  let a = [20, 30, 40]

  return (
    <div>
      <h4 className="title">상품목록</h4>
      {
        상품.map((v, i) => {
          console.log(v);
          return (
            <div className="food" key={i}>
              {/* <Image src={tomato} className="food-img"/> */}
              <img src={`/food${i}.png`} className="food-img"/>
              <h4>{v} $40</h4>
            </div>
          )
        })
      }
    </div >
  );
}
