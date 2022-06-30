import { Breadcrumb, Col, Rate, Row } from "antd";
import React from "react";
import { SmileOutlined, BookOutlined } from "@ant-design/icons";
import RowCourses from "../../../../components/RowCourses";
import gsap from "gsap";
import { useHistory, useParams } from "react-router-dom";
function CourseInfo() {
  const history = useHistory();
  const { courseName } = useParams();
  console.log(courseName);
  return (
    <div className="courseInfo__container">
      <div className="header__background">
        <div className="left">
          <div className="breadcrumb">
            <Breadcrumb>
              <Breadcrumb.Item>
                <a href="/home">Home</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <a href="/allcourses">Danh Sách Khóa Học</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>Tên Khóa Học</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <h1 className="title">Thành thạo Bootstrap qua 10 website</h1>
          <p>
            Tạo Chủ đề Bootstrap 4 nâng cao của riêng bạn từ đầu! Khóa học này
            sẽ chỉ cho bạn cách tạo một Mẫu Bootstrap 4 hoàn chỉnh từ đầu bắt
            đầu với các tệp HTML, CSS và JavaScript trống! Chúng tôi sẽ di
            chuyển nhanh chóng để cung cấp cho bạn trải nghiệm xây dựng trang
            web Bootstrap nhanh nhất nhưng triệt để nhất có thể.
          </p>
          <Rate disabled defaultValue={5} />
          <span>Lượt Xem</span>
        </div>
        <div className="right">
          <div className="course__papper">
            <div className="course__image">
              <img src="https://picsum.photos/350/200?random=1" alt="..." />
            </div>
            <div className="course__content">
              <span className="price">999,999 đ</span>
              <button
                onClick={(e) => {
                  let tl = gsap.timeline();
                  tl.to(".btnText", {
                    x: "100%",
                    duration: 0.2,
                  })
                    .to(".Added", {
                      left: "50%",
                      scale: 1.5,
                      duration: 0.1,
                    })
                    .to(".Added", {
                      scale: 1,
                      duration: 0.1,
                    });
                }}
                className="btnAdd"
              >
                <p className="btnText">Thêm Vào Giỏ Hàng</p>
                <p className="Added">Added</p>
              </button>
              <button
                onClick={() => {
                  history.push(`/checkout/${courseName}`);
                }}
                className="buyNow"
              >
                Mua Ngay
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="feedback">
        <div className="title">
          <h1>Đánh giá từ học viên</h1>
        </div>
        <div className="feedback__content">
          <div className="feedback__left">
            <div className="rating">
              <span className="star">4.6/5</span>
              <Rate allowHalf disabled defaultValue={4.5} />
              <span className="reviews">(11,224 đánh giá)</span>
            </div>
            <div className="feeling">
              <span>
                <SmileOutlined />
                Giảng viên thân thiện, nhiệt tình
              </span>
              <span>
                <BookOutlined />
                Tài liệu chi tiết, dễ hiểu
              </span>
            </div>
          </div>
          <div className="feedback__right">
            <Row>
              <Col span="md">
                <div className="title">
                  Trần Anh Tuấn
                  <Rate allowHalf disabled defaultValue={4.5} />
                </div>
                <div className="text">
                  Giáo trình giảng dạy chi tiết, có hướng dẫn công cụ đi kèm.
                  Tuy nhiên cần thêm case study thực tế để dễ tham khảo
                </div>
              </Col>
              <Col span="md">
                <div className="title">
                  Nguyễn Minh Hằng
                  <Rate allowHalf disabled defaultValue={4.5} />
                </div>
                <div className="text">
                  Giảng viên nhiệt tình, chương trình học đơn giản, dễ hiểu. Nội
                  dung rất đáng học
                </div>
              </Col>
              <Col span="md">
                <div className="title">
                  Tuấn Anh
                  <Rate allowHalf disabled defaultValue={4.5} />
                </div>
                <div className="text">
                  Hình thức giảng dạy dễ nghe, gần gũi, có sự lôi cuốn. nội dung
                  thực tế hữu dụng. Cảm ơn Giảng viên và đội ngũ
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <RowCourses />
      <RowCourses />
    </div>
  );
}

export default CourseInfo;
