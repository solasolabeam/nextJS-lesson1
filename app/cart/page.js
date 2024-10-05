// 'use client'

// server Component
// html에 자바스크립트 기능넣기 불가능
// useState, useEffect 등 사용불가
import age from "./data"

export default function Cart() {
    let 장바구니 = ['Tomatoes', 'Pasta']
    return (
        <div>
            <h4 className="title">Cart</h4>
            <CartItem item={장바구니[0]} />
            <CartItem item={장바구니[1]} />
            <Banner content="롯데카드"/>
            <Banner content="현대카드"/>
        </div>
    )
}

function Banner(props) {
    return <h5>{props.content} 결제 행사중</h5>
}

function CartItem(props) {
    return (

        <div className="cart-item">
            <p>{props.item}</p>
            <p>$40</p>
            <p>1개</p>
        </div>
    )
}