import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courseArray: [
    {
      maKhoaHoc: "bootstrap",
      biDanh: "thanh-thao-bootstrap-qua-10-website",
      tenKhoaHoc: "Thành thạo Bootstrap qua 10 website",
      moTa: "Tạo Chủ đề Bootstrap 4 nâng cao của riêng bạn từ đầu! Khóa học này sẽ chỉ cho bạn cách tạo một Mẫu Bootstrap 4 hoàn chỉnh từ đầu bắt đầu với các tệp HTML, CSS và JavaScript trống! Chúng tôi sẽ di chuyển nhanh chóng để cung cấp cho bạn trải nghiệm xây dựng trang web Bootstrap nhanh nhất nhưng triệt để nhất có thể.",
      luotXem: 100,
      hinhAnh:
        "https://elearning0706.cybersoft.edu.vn/hinhanh/thanh-thao-bootstrap-qua-10-website.vn%252F191ab4fd-9c62-4494-b209-51f86a3924d3%252Fproduct%252F6076600c31b9ae0024d5da95&w=3840&q=50",
      maNhom: "GP01",
      ngayTao: "25/06/2022",
      soLuongHocVien: 0,
      nguoiTao: {
        taiKhoan: "boy2k1",
        hoTen: "string",
        maLoaiNguoiDung: "GV",
        tenLoaiNguoiDung: "Giáo vụ",
      },
      danhMucKhoaHoc: {
        maDanhMucKhoahoc: "FrontEnd",
        tenDanhMucKhoaHoc: "Lập trình Front end",
      },
    },
  ],
};

const khoaHocReducer = createSlice({
  name: "courseReducer",
  initialState,
  reducers: {
    layDanhSachKhoaHocTheoDanhMuc: (state, action) => {
      state.courseArray = action.payload;
    },
    layDanhSachKhoaHoc: (state, action) => {
      state.courseArray = action.payload;
    },
  },
});

export const { layDanhSachKhoaHocTheoDanhMuc, layDanhSachKhoaHoc } =
  khoaHocReducer.actions;

export default khoaHocReducer.reducer;
