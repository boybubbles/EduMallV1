/** @format */

import { quanLyNguoiDungService } from "../../../ulti/QuanLyNguoiDungService";
import { AccessToken, USER_LOGIN } from "../../../ulti/setting";
import { DangKy, DangNhap, ThongTinTaiKhoan } from "../../reducers/userReducer";
export const DangKyAction = (thongTinDangKy) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.dangKy(thongTinDangKy);
      console.log(result);
      dispatch(DangKy({ ...result.data, status: result.status }));
    } catch (errors) {
      dispatch(DangKy(errors.response.data));
    }
  };
};
export const DangNhapAction = (thongTinDangNhap) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.dangNhap(thongTinDangNhap);
      console.log(result);
      localStorage.setItem(USER_LOGIN, JSON.stringify(result.data));
      localStorage.setItem(AccessToken, result.data.accessToken);
      dispatch(DangNhap({ ...result.data, status: result.status }));
    } catch (errors) {
      dispatch(DangNhap(errors.response.data));
    }
  };
};
export const ThongTinTaiKhoanAction = () => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.layThongTinTaiKhoan();
      console.log(result);
    } catch (error) {
      console.log("failed");
    }
  };
};
