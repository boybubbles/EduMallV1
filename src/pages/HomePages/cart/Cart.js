import { Breadcrumb, Checkbox } from "antd";
import React from "react";
import Receipt from "../../../components/Receipt";
import { CloseCircleOutlined } from "@ant-design/icons";
function CartUser() {
  return (
    <div className="cartUser__container">
      <div className="cart__items">
        <div className="breadcrumb">
          <Breadcrumb>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">Application List</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>An Application</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <h1>Giỏ Hàng</h1>
        <p>Bạn có 2 sản phẩm trong giỏ hàng</p>
        <CartItems />
      </div>
      <div className="receipt">
        <Receipt />
      </div>
    </div>
  );
}

export default CartUser;

const CartItems = () => {
  return (
    <>
      <div className="cartItems__container">
        <div className="selectAll">
          <Checkbox
            onChange={(e) => {
              console.log(`checked = ${e.target.checked}`);
            }}
          >
            Chọn Tất cả
          </Checkbox>
        </div>
        <div className="cartItems__list">
          <div className="item">
            <Checkbox
              defaultChecked
              onChange={(e) => {
                console.log(`checked = ${e.target.checked}`);
              }}
            ></Checkbox>
            <div className="item__info">
              <div className="item__image">
                <img src="https://picsum.photos/150/150?random=1" alt="..." />
              </div>
              <div className="item__details">
                <div className="name">
                  <span>Tên Khóa Học</span>
                  <CloseCircleOutlined />
                </div>
                <div className="pricing">
                  <span className="original__price">1,000,000 đ</span>
                  <span className="price">999,999 đ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
