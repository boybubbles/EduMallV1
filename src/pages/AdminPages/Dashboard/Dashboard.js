/** @format */

import React, { useEffect } from "react";
import { Button, Table } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  layDanhSachNguoiDungAction,
  xoaNguoiDungAction,
} from "../../../redux/actions/types/QuanLyNguoiDungAction";
import { setUserEdit } from "../../../redux/reducers/adminReducer";
const { Search } = Input;

export default function Dashboard(props) {
  //Lấy danh sách user từ userReducer
  const { arrUser } = useSelector((rootReducer) => rootReducer.adminReducer);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    //gọi api để get danh sách user
    dispatch(layDanhSachNguoiDungAction());
  }, []);

  const columns = [
    {
      key: "taiKhoan",
      title: "Tài khoản",
      dataIndex: "taiKhoan",
      value: (text, object) => {
        return <span>(text)</span>;
      },
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a.taiKhoan.length - b.taiKhoan.length,
      sortDirections: ["descend"],
    },
    {
      key: "hoTen",
      title: "Họ tên",
      dataIndex: "hoTen",
      value: (text, object) => {
        return <span>(text)</span>;
      },
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a.hoTen.length - b.hoTen.length,
      sortDirections: ["descend"],
    },
    {
      key: "email",
      title: "Email",
      dataIndex: "email",
      value: (text, object) => {
        return <span>(text)</span>;
      },
    },
    {
      key: "sdt",
      title: "Số điện thoại",
      dataIndex: "soDt",
      value: (text, object) => {
        return <span>(text)</span>;
      },
    },
    {
      key: "maLoaiNguoiDung",
      title: "Mã loại người dùng",
      dataIndex: "maLoaiNguoiDung",
      value: (text, object) => {
        return <span>(text)</span>;
      },
    },
    {
      key: "hanhDong",
      title: "Hành động",
      dataIndex: "hanhDong",
      render: (text, user) => {
        return (
          <>
            <>
              <EditOutlined
                onClick={async () => {
                  dispatch(setUserEdit(user));
                  history.push(`/admin/dashboard/edituser/${user.taiKhoan}`);
                }}
                style={{ color: "blue" }}
              ></EditOutlined>
            </>
            <span
              style={{ cursor: "pointer" }}
              key={4}
              onClick={() => {
                if (window.confirm("Bạn có chắc muốn xóa " + user.hoTen)) {
                  dispatch(xoaNguoiDungAction(user.taiKhoan));
                }
              }}
            >
              <DeleteOutlined style={{ color: "red" }}></DeleteOutlined>
            </span>
          </>
        );
      },
    },
  ];
  const data = arrUser;
  const dataWithId = data.map((item, index) => ({ ...item, key: index }));
  const onSearch = (value) => {
    dispatch(layDanhSachNguoiDungAction(value));
  };

  return (
    <div>
      <h3 className="text 4-xl">Quản lý người dùng</h3>
      <Button
        className="mb-3"
        onClick={() => {
          history.push("/admin/dashboard/addnewuser");
        }}
      >
        Thêm người dùng
      </Button>
      <Search placeholder="Tìm kiếm" size="large" onSearch={onSearch} />
      <Table columns={columns} dataSource={dataWithId} />
    </div>
  );
}
