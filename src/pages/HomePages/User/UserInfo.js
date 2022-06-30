/** @format */

import { Breadcrumb } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import CourseCard from "../../../components/CourseCard";
import RowCourses from "../../../components/RowCourses";
import { ThongTinTaiKhoanAction } from "../../../redux/actions/types/QuanLyNguoiDungAction";
import { AccessToken, USER_LOGIN } from "../../../ulti/setting";
const courseArray = [
  {
    maKhoaHoc: "ITEC2105",
    biDanh: "lap-trinh-huong-doi-tuong",
    tenKhoaHoc: "Lập Trình Hướng Đối Tượng",
    moTa: 'Lập trình hướng đối tượng là một mẫu hình lập trình dựa trên khái niệm "công nghệ đối tượng", mà trong đó, đối tượng chứa đựng các dữ liệu, trên các trường, thường được gọi là các thuộc tính; và mã nguồn, được tổ chức thành các phương thức.',
    luotXem: 100,
    hinhAnh:
      "https://elearning0706.cybersoft.edu.vn/hinhanh/lap-trinh-huong-doi-tuong_gp01.png",
    maNhom: "gp01",
    ngayTao: "01/06/2022",
    soLuongHocVien: 0,
    nguoiTao: {
      taiKhoan: "dpnguyen",
      hoTen: "le quang anh ",
      maLoaiNguoiDung: "GV",
      tenLoaiNguoiDung: "Giáo vụ",
    },
    danhMucKhoaHoc: {
      maDanhMucKhoahoc: "BackEnd",
      tenDanhMucKhoaHoc: "Lập trình Backend",
    },
  },
];
function UserInfo() {
  const [isActive, setIsActive] = useState({
    panel1: true,
    panel2: false,
  });
  const userInfo = useRef();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ThongTinTaiKhoanAction());
  }, []);

  return (
    <div className="user__info__container">
      <div className="breadcrumb">
        <Breadcrumb>
          <Breadcrumb.Item>
            <a href="/home">Home</a>
          </Breadcrumb.Item>

          <Breadcrumb.Item>Trang cá nhân</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <h1>Trang Cá Nhân và Cài Đặt</h1>
      <div className="user__info__container__overview">
        <div className="mutil__options">
          <MyInfo />
          <MyCourses />
        </div>
        {isActive.panel1 && (
          <div className="pannel1">
            <div className="item">
              <h3>Họ Tên</h3>
              <input
                // value={userInfo.current?.hoTen}
                name="hoTen"
                onChange={({ target }) => {
                  let { name, value } = target;
                  // userInfo.current[name] = value;
                  // console.log(userInfo);
                }}
                type="text"
              />
            </div>
            <div className="item">
              <h3>Số Điện Thoại</h3>
              <input
                // value={userInfo.soDT}
                onChange={({ target }) => {
                  let { name, value } = target;
                }}
                type="text"
                name="soDT"
              />
            </div>

            <div className="item">
              <h3>Email</h3>
              <input
                // value={userInfo.email}
                onChange={({ target }) => {
                  let { name, value } = target;
                }}
                name="email"
                type="email"
              />
            </div>
            <div className="item">
              <button>Đổi mật khẩu</button>
            </div>
          </div>
        )}
        {isActive.panel2 && (
          <div className="pannel2">
            <div className="courses__list">
              <CourseCard courseArray={courseArray} hasBought={true} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserInfo;

const MyInfo = () => {
  return (
    <>
      <button>Thông Tin cơ Bản</button>
    </>
  );
};
const MyCourses = () => {
  return (
    <>
      <button>Khóa học của tôi</button>
    </>
  );
};
