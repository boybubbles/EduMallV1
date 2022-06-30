import React, { useCallback, useEffect, useRef, useState } from "react";
import { Menu } from "antd";
import {
  UnorderedListOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  CodepenOutlined,
  MessageOutlined,
  AntDesignOutlined,
  CodeOutlined,
} from "@ant-design/icons";
import gsap from "gsap";
import { useHistory, useParams } from "react-router-dom";
import { USER_LOGIN } from "../../../ulti/setting";
function Header() {
  const { category, keyword } = useParams();
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    let header = document.querySelector(".header");
    window.addEventListener("scroll", onScroll);
    if (offset > 50) {
      header.className = "header header-width";
    } else {
      header.className = "header";
    }
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [offset]);
  const items = [
    {
      label: "Trang Chủ",
      key: "home",
    },
    {
      label: "Khóa học của tôi",
      key: "course",
    },
    {
      icon: <UnorderedListOutlined />,
      label: "Danh Mục",
      key: "SubMenu",
      children: [
        {
          label: "FrontEnd",
          icon: <CodepenOutlined />,
          children: [],
        },
        {
          label: "BackEnd",
          icon: <MessageOutlined />,
          children: [],
        },
        {
          label: "FullStack",
          icon: <AntDesignOutlined />,
          children: [],
        },
        {
          label: "Tư Duy",
          icon: <CodeOutlined />,
          children: [],
        },
      ],
    },
  ];
  return (
    <div className="header">
      <a href="/home" className="lable">
        EduMall
      </a>
      <Menu
        onClick={(e) => {
          console.log(e);
        }}
        className="menuHeader"
        mode="horizontal"
        items={items}
      />
      <div style={{ flexGrow: 1 }}></div>
      <CourseSearch category={category} valueSearch={keyword} />
      <Cart />
      <ModalUser />
    </div>
  );
}

export default Header;

export const CourseSearch = (props) => {
  const history = useHistory();

  const [valueSearch, setValueSearch] = useState(
    props.valueSearch ? props.valueSearch : ""
  );
  const goToSearch = useCallback(() => {
    if (valueSearch.trim().length > 0) {
      history.push(
        `/${
          props.category === undefined ? "allcourses" : props.category
        }/search/${valueSearch}`
      );
    }
  }, [valueSearch, props.category, history]);
  useEffect(() => {
    const enterEvent = (e) => {
      e.preventDefault();
      if (e.keyCode === 13) {
        goToSearch();
      }
    };
    document.addEventListener("keyup", enterEvent);
    return () => document.removeEventListener("keyup", enterEvent);
  }, [valueSearch, goToSearch]);
  return (
    <input
      value={valueSearch}
      type="text"
      className="search__input"
      placeholder="Tìm kiếm khóa học"
      onChange={(e) => {
        setValueSearch(e.target.value);
      }}
    />
  );
};

export function ModalUser() {
  const [isActive, setIsActive] = useState(false);
  const myRef = useRef();
  const handleClickOutside = (e) => {
    if (!myRef.current.contains(e.target)) {
      setIsActive(false);
    }
  };
  const history = useHistory();
  useEffect(() => {
    if (isActive) {
      gsap.from(".modalUser__container", {
        opacity: 0,
        duration: 0.2,
        y: -100,
        ease: "power3.ease",
      });
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isActive]);
  return (
    <div ref={myRef} className="user__wrapper">
      <UserOutlined
        onClick={() => {
          setIsActive((isActive) => !isActive);
        }}
      />
      {isActive && (
        <div className="modalUser__container">
          <div className="avatar">
            <img src="https://picsum.photos/200/300?random=2" alt="..." />
            <div className="name">
              {JSON.parse(localStorage.getItem(USER_LOGIN)).hoTen}
            </div>
          </div>
          <a href="/home/user">Trang Cá Nhân</a>
          <hr />
          <a href="/home/user">Cài Đặt</a>
          <hr />

          <button
            onClick={() => {
              localStorage.removeItem(USER_LOGIN);
              history.go("/");
            }}
          >
            Đăng Xuất
          </button>
        </div>
      )}
    </div>
  );
}

export function Cart() {
  const [isActive, setIsActive] = useState(false);
  const history = useHistory();
  useEffect(() => {
    if (isActive) {
      gsap.from(".cart__container", {
        y: -100,
        duration: 0.2,
        ease: "power3.ease",
      });
    }
  }, [isActive]);
  return (
    <div
      onMouseEnter={() => {
        setIsActive((isActive) => !isActive);
      }}
      className="cart__wrapper"
      onMouseLeave={() => {
        setIsActive((isActive) => !isActive);
      }}
      onClick={() => {
        history.push("/cart");
      }}
    >
      <ShoppingCartOutlined />
      {isActive && (
        <div className="cart__container">
          <p>Giỏ hàng hiện đang trống</p>
          <span>Hãy tiếp tục tìm kiếm thêm khoá học nhé</span>
        </div>
      )}
    </div>
  );
}
