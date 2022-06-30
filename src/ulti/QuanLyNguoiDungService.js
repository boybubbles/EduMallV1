/** @format */

import { baseService } from "./baseService";
export class QuanLyNguoiDungService extends baseService {
  dangKy = (thongTinDangKy) => {
    return this.post(`api/QuanLyNguoiDung/DangKy`, thongTinDangKy);
  };
  dangNhap = (thongTinDangNhap) => {
    return this.post(`api/QuanLyNguoiDung/DangNhap`, thongTinDangNhap);
  };
  layThongTinTaiKhoan = () => {
    return this.get(`api/QuanLyNguoiDung/ThongTinNguoiDung`);
  };
}

export const quanLyNguoiDungService = new QuanLyNguoiDungService();
