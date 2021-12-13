import React from 'react'
import './style.css'
import {
  HomeOutlined,
  FileTextOutlined,
  ReadOutlined,
  QuestionCircleOutlined,
  ContactsOutlined,
  LoginOutlined,
} from "@ant-design/icons";



const Header = () => {
    return (
      <div>
        <header className="header">
          <div className="div-btn">
            <a className="btn-heder" href="#">
              <HomeOutlined /> Home
            </a>

            <a className="btn-heder" href="#">
              <FileTextOutlined /> about
            </a>

            <a className="btn-heder" href="#">
              <ReadOutlined /> courses
            </a>

            <a className="btn-heder" href="#">
            <QuestionCircleOutlined /> faq
            </a>

            <a className="btn-heder" href="#">
            <ContactsOutlined /> contacts
            </a>

            <a className="btn-heder header-login" href="#">
            <LoginOutlined /> login
            </a>
          </div>
        </header>
      </div>
    );
}

export default Header
