import { configureStore } from "@reduxjs/toolkit";
import khoaHocReducer from "./reducers/courseReducer";
import nguoiDungReducer from "./reducers/userReducer";
export const store = configureStore({
  reducer: {
    khoaHocReducer: khoaHocReducer,
    nguoiDungReducer: nguoiDungReducer,
  },
});
