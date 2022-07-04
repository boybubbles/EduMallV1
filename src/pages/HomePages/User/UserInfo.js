/** @format */

import { Breadcrumb, Button, message, Space } from "antd";
import gsap from "gsap";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CourseCard from "../../../components/CourseCard";
import {
  CapNhatThongTinAction,
  ThongTinTaiKhoanAction,
} from "../../../redux/actions/types/QuanLyNguoiDungAction";
import { userEdit } from "../../../redux/reducers/userReducer";

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
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState({
    panel1: false,
    panel2: true,
  });

  const { userValue, successMessage } = useSelector((rootReducer) => {
    return rootReducer.userReducer;
  });
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
          <button
            onClick={() => {
              setIsActive({
                panel1: true,
                panel2: false,
              });
            }}
          >
            Thông Tin cơ Bản
          </button>
          <button
            onClick={() => {
              setIsActive({
                panel1: false,
                panel2: true,
              });
            }}
          >
            Khóa học của tôi
          </button>
        </div>
        {isActive.panel1 && (
          <Panel1 userValue={userValue} successMessage={successMessage} />
        )}
        {isActive.panel2 && <Panel2 />}
      </div>
    </div>
  );
}

export default UserInfo;

const Panel1 = ({ userValue, successMessage }) => {
  const dispatch = useDispatch();
  const success = () => {
    message.success(successMessage);
  };
  useEffect(() => {
    gsap.from(".pannel1", {
      x: "-100%",
      duration: 0.3,
      ease: "power3.easeInOut",
    });
  }, []);
  return (
    <div className="pannel1">
      <div className="item">
        <h3>Họ Tên</h3>
        <input
          value={userValue.hoTen}
          onChange={({ target }) => {
            let { value, name } = target;
            dispatch(userEdit({ name, value }));
          }}
          name="hoTen"
        />
      </div>
      <div className="item">
        <h3>Số Điện Thoại</h3>
        <input
          value={userValue.soDT}
          onChange={({ target }) => {
            let { value, name } = target;
            dispatch(userEdit({ name, value }));
          }}
          name="soDt"
        />
      </div>

      <div className="item">
        <h3>Email</h3>
        <input
          value={userValue.email}
          onChange={({ target }) => {
            let { value, name } = target;
            dispatch(userEdit({ name, value }));
          }}
          name="email"
        />
      </div>
      <div className="item">
        <Space>
          <Button
            onClick={async () => {
              dispatch(CapNhatThongTinAction(userValue));
              success();
            }}
          >
            Cập Nhật Thông Tin
          </Button>
        </Space>
      </div>
    </div>
  );
};
const Panel2 = () => {
  const { userValue } = useSelector((rootReducer) => rootReducer.userReducer);
  useEffect(() => {
    gsap.from(".pannel2", {
      x: "200%",
      duration: 0.3,
      ease: "power3.easeInOut",
    });
  }, []);
  return (
    <div className="pannel2">
      <div className="courses__list">
        <CourseCard courseArray={userValue.chiTietKhoaHocGhiDanh} hasBought={true} />
      </div>
    </div>
  );
};
