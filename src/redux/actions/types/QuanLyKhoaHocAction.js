import { quanLyKhoaHocService } from "../../../ulti/QuanLyKhoaHocService";
import {
  layDanhSachKhoaHoc,
  layDanhSachKhoaHocTheoDanhMuc,
} from "../../reducers/courseReducer";

export const layKhoaHocTheoDanhMucAction = (danhMucKhoaHoc) => {
  return async (dispatch) => {
    try {
      let result = await quanLyKhoaHocService.layKhoaHocTheoDanhMuc(
        danhMucKhoaHoc
      );
      dispatch(layDanhSachKhoaHocTheoDanhMuc(result.data));
    } catch (error) {
      console.log(error);
    }
  };
};
export const layDanhSachKhoaHocAction = (keyword) => {
  return async (dispatch) => {
    try {
      let result = await quanLyKhoaHocService.layDanhSachKhoaHoc(keyword);
      dispatch(layDanhSachKhoaHoc(result.data));
    } catch (error) {
      console.log(error);
    }
  };
};
