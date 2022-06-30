import React from "react";

function Receipt() {
  return (
    <>
      <div className="order">
        <div className="order__wrapper">
          <h2>Hóa đơn</h2>
          <li>
            <span>Giá chưa Giảm</span>
            <span>1,000,000 vnđ</span>
          </li>
          <hr />
          <li>
            <span>Giảm giá</span>
            <span>1,000 vnđ</span>
          </li>
          <hr />

          <li className="total">
            <span>Tổng Cộng</span>
            <span>999,999 vnđ</span>
          </li>
          <hr />
          <button disabled>Thanh toán</button>
        </div>
      </div>
    </>
  );
}

export default Receipt;
