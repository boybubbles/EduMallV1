/** @format */

import { quanLyNguoiDungService } from "../../../ulti/QuanLyNguoiDungService";
import { AccessToken, USER_LOGIN } from "../../../ulti/setting";
import {
  capNhatThongTin,
  DangKy,
  DangNhap,
  ThongTinTaiKhoan,
} from "../../reducers/userReducer";
export const DangKyAction = (thongTinDangKy) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.dangKy(thongTinDangKy);
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
      dispatch(ThongTinTaiKhoan({ ...result.data, status: result.status }));
    } catch (error) {
      alert("Failed to load user profile");
    }
  };
};
export const CapNhatThongTinAction = (userValue) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.capNhatThongTin(userValue);
      dispatch(capNhatThongTin({ ...result.data, status: result.status }));
    } catch (error) {
      dispatch(
        capNhatThongTin({
          ...error.response.status,
        })
      );
    }
  };
};
