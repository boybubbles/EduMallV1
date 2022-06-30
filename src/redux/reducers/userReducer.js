/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userValue: {
    taiKhoan: "",
    matKhau: "",
    hoTen: "",
    soDT: "",
    maNhom: "GP01",
    email: "",
  },

  errorMessage: "",
  isSuccessSignUp: false,
  isSuccessSignIn: false,
};

const nguoiDungReducer = createSlice({
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
    ThongTinTaiKhoan: (state, action) => {},
  },
});

export const { DangKy, DangNhap, ThongTinTaiKhoan } = nguoiDungReducer.actions;

export default nguoiDungReducer.reducer;
