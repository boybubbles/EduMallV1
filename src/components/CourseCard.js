/** @format */

import React from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import { useHistory } from "react-router-dom";
import gsap from "gsap";

function CourseCard({ category, courseArray, hasBought }) {
  const history = useHistory();
  return (
    <>
      <Row gutter={[16, 16]}>
        {courseArray.map((course, index) => {
          return (
            <Col key={index} span="md">
              <div
                onClick={({ target }) => {
                  if (!hasBought) {
                    if (target.className === `buttonAnimation${index}`) {
                      return;
                    } else {
                      history.push(`/${category}/${course.maKhoaHoc}`);
                    }
                  }
                }}
                className="col__wrapper"
              >
                <div className="image__background">
                  <img src={`${course.hinhAnh}`} alt="..." />
                </div>
                <div className="info">
                  <h3>{course.danhMucKhoaHoc.tenDanhMucKhoaHoc}</h3>
                  <p className="course__name">{course.tenKhoaHoc}</p>
                  <p>{course.moTa}</p>
                  {!hasBought && (
                    <button className="button">
                      <div
                        onClick={(e) => {
                          if (!hasBought) {
                            let tl = gsap.timeline();
                            tl.to(`.${e.target.className}`, {
                              x: "100%",
                              duration: 0.4,
                              ease: "power3.ease",
                            })
                              .to(`.btn${index}`, {
                                zIndex: 1,
                                x: "-50%",
                              })
                              .to(`.btn${index}`, {
                                scale: 1.5,
                                duration: 0.2,
                              })
                              .to(`.btn${index}`, {
                                scale: 1,
                                duration: 0.2,
                              });
                          }
                        }}
                        className={`buttonAnimation${index}`}
                      >
                        Thêm Vào Giỏ Hàng
                      </div>
                      <div className={`btn${index}`}>Added</div>
                    </button>
                  )}
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </>
  );
}

export default CourseCard;
