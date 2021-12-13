import React from 'react'
import { Navbar, Nav, NavLink, Button } from 'react-bootstrap'
import Flag from 'react-world-flags'
import Logo from '../../../assets/logo.png'

import {
  HomeOutlined,
  FileTextOutlined,
  QuestionCircleOutlined,
  TeamOutlined,
  PhoneOutlined
} from "@ant-design/icons";

import '../style.css'
import {Link} from 'react-router-dom'

import { useTranslation } from 'react-i18next';
import '../../../utils/i18next';

import './main'
// import '../../../assets/uzb-flag.png'


function Navibar(props) {
    
      // Lang paramertrs
      const { t, i18n } = useTranslation();
      const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
      };

     

      
      

      return (
        <div bg="dark" className="navibar">
          <Navbar collapseOnSelect expand="lg" className="" variant="dark">
            <Navbar fixed="top" />
            <Navbar.Brand style={{ paddingTop: "8px" }} id="pad-laft">
              <img className="logo" alt="logo" src={Logo} /> I House
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="">
                <NavLink className="text-white">
                  <Link className="btn-header" to="/">
                    <HomeOutlined className="icon-header" /> {t("navibar.home")}
                    {/*  */}
                  </Link>
                </NavLink>

                <NavLink className="text-light">
                  <Link className="btn-header" to="/about">
                    <FileTextOutlined className="icon-header" />{" "}
                    {t("navibar.about")}
                  </Link>
                </NavLink>

                <NavLink className="text-light">
                  <Link className="btn-header" to="/courses">
                    <TeamOutlined className="icon-header" />{" "}
                    {t("navibar.courses")}
                  </Link>
                </NavLink>

                <NavLink className="text-light">
                  <Link className="btn-header" to="/faq">
                    <QuestionCircleOutlined className="icon-header" />{" "}
                    {t("navibar.faq")}
                  </Link>
                </NavLink>

                <NavLink className="text-light">
                  <Link className="btn-header" to="/contacts">
                    <PhoneOutlined className="icon-header" />{" "}
                    {t("navibar.contacts")}
                  </Link>
                </NavLink>

                <Button
                  variant="light"
                  className="text-light btn-lang-uz"
                  onClick={() => changeLanguage("uz")}
                >
                  <Flag code="UZB" height="15" />
                  {t("navibar.uz")}
                </Button>

                <Button
                  variant="light"
                  className="text-light btn-lang-ru"
                  onClick={() => changeLanguage("ru")}
                >
                  <Flag code="RUS" height="15" />
                  {t("navibar.ru")}
                </Button>

                {/* <button  onClick={() => changeLanguage("uz")}>uz.....</button>
                <button onClick={() => changeLanguage("ru")}>ru.....</button> */}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      );
}

export default Navibar;