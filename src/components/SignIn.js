/** @format */

import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { DangNhapAction } from "../redux/actions/types/QuanLyNguoiDungAction";
import { RightCircleOutlined } from "@ant-design/icons";

const SignIn = () => {
  const [isActive, setIsActive] = useState(false);
  const myRef = useRef();
  const dispatch = useDispatch();
  const { isSuccessSignIn, errorMessage } = useSelector(
    (rootReducer) => rootReducer.userReducer
  );
  const history = useHistory();
  const userLogin = useRef({
    taiKhoan: "",
    matKhau: "",
  });
  const handleClickOutside = (e) => {
    if (!myRef.current.contains(e.target)) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    if (isActive) {
      gsap.from(".sign__in__container", {
        opacity: 0,
        duration: 0.3,
        y: -100,
        ease: "power3.easeInOut",
      });
      const enterEvent = (e) => {
        e.preventDefault();
        if (e.keyCode === 13) {
          dispatch(DangNhapAction(userLogin.current));
        }
      };
      document
        .querySelector(".sign__in__container__inner__content")
        .addEventListener("keyup", enterEvent);
    }
    if (isSuccessSignIn) {
      history.go("/home");
    }
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isActive, isSuccessSignIn]);
  return (
    <div ref={myRef}>
      <span
        onClick={() => {
          setIsActive((isActive) => !isActive);
        }}
        className="signin"
      >
        Đăng Nhập
      </span>
      {isActive && (
        <div className="sign__in__container">
          <div className="sign__in__container__inner">
            <form className="sign__in__container__inner__content">
              <input
                onChange={({ target }) => {
                  let { value, name } = target;
                  userLogin.current[name] = value;
                }}
                name="taiKhoan"
                type="text"
                placeholder="Tài khoản"
              />
              <input
                onChange={({ target }) => {
                  let { value, name } = target;
                  userLogin.current[name] = value;
                }}
                name="matKhau"
                type="password"
                placeholder="Mật Khẩu"
              />
              <RightCircleOutlined
                onClick={async () => {
                  dispatch(DangNhapAction(userLogin.current));
                }}
              />
            </form>

            {errorMessage ? <i>{errorMessage}</i> : null}
          </div>
        </div>
      )}
    </div>
  );
};

export default SignIn;
