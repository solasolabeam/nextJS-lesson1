
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
            <div className="food">
              <h4>{v} $40</h4>
            </div>
          )
        })
      }
    </div >
  );
}
