/** @format */

import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DangKyAction } from "../redux/actions/types/QuanLyNguoiDungAction";
import { DangKy } from "../redux/reducers/userReducer";
import { validateInput } from "../validator/validator";
import website from "../pages/LandingPage/videos/websites.mp4";
import SignIn from "./SignIn";

const SignUp = () => {
  const dispatch = useDispatch();
  const [errors, setError] = useState({
    email: { isValidInput: true, errorMessage: "" },
    soDT: { isValidInput: true, errorMessage: "" },
    hoTen: { isValidInput: true, errorMessage: "" },
  });

  const signUpValue = useRef({
    taiKhoan: "",
    matKhau: "",
    hoTen: "",
    soDT: "",
    maNhom: "GP01",
    email: "",
  });
  const { isSuccessSignUp, errorMessage } = useSelector(
    (rootReducer) => rootReducer.userReducer
  );
  const handleValidInput = (checkingValue, type) => {
    let { isValidInput, errorMessage } = validateInput(checkingValue, type);
    setError({
      ...errors,
      [type]: {
        errorMessage: errorMessage,
        isValidInput: isValidInput,
      },
    });
  };
  const handleChange = (target) => {
    let { value, name } = target;
    signUpValue.current[name] = value;
  };
  const handleBlur = (target) => {
    let { value, name } = target;
    handleValidInput(value, name);
  };
  const handleRegister = () => {
    if (
      errors.email.isValidInput &&
      errors.soDT.isValidInput &&
      errors.hoTen.isValidInput
    ) {
      dispatch(DangKyAction(signUpValue.current));
    }
  };
  useEffect(() => {
    if (isSuccessSignUp) {
      let tl = gsap.timeline();
      tl.fromTo(
        ".left__inner",
        { opacity: 1 },
        {
          opacity: 0,
          scale: 0,
          duration: 0.3,
        }
      )

        .to(".success__text", {
          duration: 0.3,
          scale: 2,
          ease: "power3.easeInOut",
        })
        .to(".success__text", {
          duration: 0.3,
          scale: 1.2,
          ease: "power3.easeInOut",
        });
    }
    return () => {
      dispatch(DangKy("reload"));
    };
  }, [isSuccessSignUp]);
  return (
    <div id="signup" className="sign__up__container">
      <div className="sign__up__container__inner">
        <div className="sign__up__container__inner__content">
          <div className="sign__up__container__inner__content-left">
            <div className="left__inner">
              <span>A CyberSoft Academy's member</span>
              <div className="wrapper">
                <input
                  onChange={({ target }) => {
                    handleChange(target);
                  }}
                  className="user__name"
                  name="taiKhoan"
                  type="text"
                  placeholder="Nhập tên tài khoản"
                />
              </div>
              <div className="wrapper">
                <input
                  onChange={({ target }) => {
                    handleChange(target);
                  }}
                  name="matKhau"
                  className="user__password"
                  type="password"
                  placeholder="Nhập Mật Khẩu"
                />
              </div>
              <div className="wrapper">
                <input
                  onChange={({ target }) => {
                    handleChange(target);
                  }}
                  onBlur={({ target }) => {
                    handleBlur(target);
                  }}
                  name="hoTen"
                  className="ho__ten"
                  type="text"
                  placeholder="Nhập họ tên"
                />
                {errors.hoTen.errorMessage ? (
                  <span>{errors.hoTen.errorMessage}</span>
                ) : null}
              </div>
              <div className="wrapper">
                <input
                  onChange={({ target }) => {
                    handleChange(target);
                  }}
                  onBlur={({ target }) => {
                    handleBlur(target);
                  }}
                  name="soDT"
                  className="sdt"
                  type="text"
                  placeholder="Nhập số điện thoại"
                />
                {errors.soDT.errorMessage ? (
                  <span>{errors.soDT.errorMessage}</span>
                ) : null}
              </div>
              <div className="wrapper">
                <input
                  onChange={({ target }) => {
                    handleChange(target);
                  }}
                  onBlur={({ target }) => {
                    handleBlur(target);
                  }}
                  name="email"
                  className="email"
                  type="email"
                  placeholder="Nhập email"
                />
                {errors.email.isValidInput ? null : (
                  <span>{errors.email.errorMessage}</span>
                )}
              </div>
              <div className="wrapper">
                <button
                  disabled={
                    !(
                      errors.email.isValidInput &&
                      errors.soDT.isValidInput &&
                      errors.hoTen.isValidInput
                    )
                  }
                  onClick={handleRegister}
                >
                  Đăng Ký Ngay
                </button>
                {errorMessage ? <span>{errorMessage}</span> : null}
              </div>
            </div>
            <span className="success__text">
              <span>Đăng Ký Thành Công!</span>
              <SignIn />
            </span>
          </div>
          <div className="sign__up__container__inner__content-right">
            <video src={website} autoPlay={true} loop={true} muted />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
