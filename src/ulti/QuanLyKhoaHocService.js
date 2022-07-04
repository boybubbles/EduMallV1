/** @format */

import { baseService } from "./baseService";
import { GROUPID } from "../ulti/setting";
export class QuanLyKhoaHocService extends baseService {
  themKhoaHocUploadHinh = (formData) => {
    return this.post(`/api/QuanLyKhoaHoc/ThemKhoaHocUploadHinh`, formData);
  };

  layDanhSachKhoaHoc = (keyword) => {
    return this.get(
      keyword
        ? `/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${keyword}&MaNhom=${GROUPID}`
        : `/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=${GROUPID}`
    );
  };

  layThongTinKhoaHoc = (maKhoaHoc) => {
    return this.get(
      `/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`
    );
  };
  layKhoaHocTheoDanhMuc = (maKhoaDanhMuc) => {
    return this.get(
      `/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${maKhoaDanhMuc}&MaNhom=${GROUPID}`
    );
  };
  ghiDanhKhoaHoc = (thongTinGhiDanh) => {
    return this.post(`/api/QuanLyKhoaHoc/DangKyKhoaHoc`, thongTinGhiDanh);
  };
}

export const quanLyKhoaHocService = new QuanLyKhoaHocService();
