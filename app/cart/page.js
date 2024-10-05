// 'use client'

// server Component
// html에 자바스크립트 기능넣기 불가능
// useState, useEffect 등 사용불가
import age from "./data"

export default function Cart() {
    return (
        <div>
            <h4 className="title">Cart</h4>
            <div className="cart-item">
            <p>상품명 {age}</p>
            <p>$40</p>
            <p>1개</p>
        </div>
            <CartItem />
            <CartItem />
            <CartItem />
        </div>
    )
}

function CartItem(props) {
    return (
        <div className="cart-item">
            <p>상품명</p>
            <p>$40</p>
            <p>1개</p>
        </div>
    )
}