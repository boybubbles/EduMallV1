/** @format */

import { Breadcrumb } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import gsap from "gsap";
import {
  layDanhSachKhoaHocAction,
  layKhoaHocTheoDanhMucAction,
} from "../../../../redux/actions/types/QuanLyKhoaHocAction";
import { CourseSearch } from "../../../../templates/HomeTemplate/layout/Header";
import CourseCard from "../../../../components/CourseCard";
function Details() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { category, keyword } = useParams();
  useEffect(() => {
    if (keyword) {
      dispatch(layDanhSachKhoaHocAction(keyword));
    } else if (category === "allcourses") {
      dispatch(layDanhSachKhoaHocAction());
    } else {
      dispatch(layKhoaHocTheoDanhMucAction(category));
    }
  }, [category, keyword]);
  const { courseArray } = useSelector(
    (rootReducer) => rootReducer.khoaHocReducer
  );
  return (
    <div>
      <div className="container__details">
        <div className="header__background">
          <div className="header__title">
            <Breadcrumb>
              <Breadcrumb.Item>
                <a href="/home">Home</a>
              </Breadcrumb.Item>

              <Breadcrumb.Item>{category}</Breadcrumb.Item>
            </Breadcrumb>
            <h1>{category}</h1>
          </div>
        </div>
        <div className="main__details">
          <div className="topic">
            <CourseSearch category={category} valueSearch={keyword} />
            <ul>
              <a href="/allcourses">Tất cả khóa học</a>
              <a href="/BackEnd">Back End</a>
              <a href="/FrontEnd">Front End</a>
              <a href="/FullStack">Full Stack</a>
              <a href="/TuDuy">Tư Duy</a>
            </ul>
          </div>
          <div className="content">
            <CourseCard category={category} courseArray={courseArray} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
