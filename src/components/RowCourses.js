import { Col, Row } from "antd";
import React from "react";
import { RightOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
function RowCourses() {
  const history = useHistory();

  return (
    <>
      <div className="row">
        <div className="row__header">
          <h1>Khóa học nổi bật</h1>
          <a href="/allcourses" className="more">
            Xem Thêm <RightOutlined />
          </a>
        </div>
        <Row gutter={[18, 18]}>
          <Col span="md">
            <div className="item">
              <button
                onClick={() => {
                  history.push("/allcourses");
                }}
              >
                Xem chi tiết
              </button>
              <img
                src="https://files.fullstack.edu.vn/f8-prod/courses/7.png"
                alt="..."
              />
            </div>
          </Col>
          <Col span="md">
            <div className="item">
              <button
                onClick={() => {
                  history.push("/allcourses");
                }}
              >
                Xem chi tiết
              </button>
              <img
                src="https://files.fullstack.edu.vn/f8-prod/courses/2.png"
                alt="..."
              />
            </div>
          </Col>
          <Col span="md">
            <div className="item">
              <button
                onClick={() => {
                  history.push("/allcourses");
                }}
              >
                Xem chi tiết
              </button>
              <img
                src="https://files.fullstack.edu.vn/f8-prod/courses/3.png"
                alt="..."
              />
            </div>
          </Col>
          <Col span="md">
            <div className="item">
              <button
                onClick={() => {
                  history.push("/allcourses");
                }}
              >
                Xem chi tiết
              </button>
              <img
                src="https://files.fullstack.edu.vn/f8-prod/courses/1.png"
                alt="..."
              />
            </div>
          </Col>
          <Col span="md">
            <div className="item">
              <button
                onClick={() => {
                  history.push("/allcourses");
                }}
              >
                Xem chi tiết
              </button>
              <img
                src="https://files.fullstack.edu.vn/f8-prod/courses/12.png"
                alt="..."
              />
            </div>
          </Col>
          <Col span="md">
            <div className="item">
              <button
                onClick={() => {
                  history.push("/allcourses");
                }}
              >
                Xem chi tiết
              </button>
              <img
                src="https://files.fullstack.edu.vn/f8-prod/courses/14/624faac11d109.png"
                alt="..."
              />
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default RowCourses;
