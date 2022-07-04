/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userValue: {
    chiTietKhoaHocGhiDanh: [],
    taiKhoan: "",
    matKhau: "",
    hoTen: "",
    soDT: "",
    maLoaiNguoiDung: "",
    maNhom: "",
    email: "",
  },

  errorMessage: "",
  successMessage: "Cập Nhật Thành Công",
  isSuccessSignUp: false,
  isSuccessSignIn: false,
};

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    DangKy: (state, action) => {
      if (action.payload.status === 200) {
        state.userValue = action.payload;
        state.errorMessage = "";
        state.isSuccessSignUp = true;
      } else {
        state.errorMessage = action.payload;
        state.isSuccessSignUp = false;
      }
    },
    DangNhap: (state, action) => {
      if (action.payload.status === 200) {
        state.isSuccessSignIn = true;
      } else {
        state.errorMessage = action.payload;
        state.isSuccessSignIn = false;
      }
    },
    ThongTinTaiKhoan: (state, action) => {
      if (action.payload.status === 200) {
        state.userValue = action.payload;
      }
    },
    userEdit: (state, action) => {
      if (action.payload.name === "soDt") {
        state.userValue.soDT = action.payload.value;
      } else {
        state.userValue[action.payload.name] = action.payload.value;
      }
    },
    capNhatThongTin: (state, action) => {
      if (action.payload.status === 200) {
        state.userValue = action.payload;
      } else {
        state.successMessage = "Cập Nhật Thất Bại";
      }
    },
    dangXuat: (state, action) => {
      
    },
  },
});

export const {
  dangXuat,
  userEdit,
  DangKy,
  DangNhap,
  ThongTinTaiKhoan,
  capNhatThongTin,
} = userReducer.actions;

export default userReducer.reducer;
