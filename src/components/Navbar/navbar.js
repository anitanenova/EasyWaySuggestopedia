import React, { useState, useEffect } from "react";
import { Nav, Navbar, NavDropdown, NavLink } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faBars } from "@fortawesome/free-solid-svg-icons";
import { NavLink as RouterNavLink } from "react-router-dom";
import { Apply } from "../Apply";

import "../../extensions/cloudinary/cloudinaryUrl";

import style from "./nav.module.css";

const Menu = React.memo(() => {
  const [scrollY, setScrollY] = useState(0);

  const [smallApplyBtn, setSmallApplyBtn] = useState(false);

  const navbarClasses = [style["navbar"]];
  const toggleClasses = [style["toggle"]];
  const btnMenuClasses = [style["btn-menu"]];
  const navClasses = ["full-width"];
  const phoneMenuClasses = [
    style["phone-menu-invisible"],
    style["btn-menu-dark"],
    style["btn-phone-number"],
  ];

  useEffect(() => {
    console.log("nav loaded");
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, [navbarClasses]);

  const listener = (e) => {
    let bodyOffset = document.body.getBoundingClientRect();

    setScrollY(-bodyOffset.top);
  };

  if (scrollY > 0) {
    navbarClasses.push(style["scrolled-menu"]);
    toggleClasses.push(style["toggle-gray"]);
    btnMenuClasses.push(style["btn-menu-dark"]);
    navClasses.push(style["btn-menu-dark"]);
    phoneMenuClasses.push(style["phone-menu"]);
    if (!smallApplyBtn) {
      setSmallApplyBtn(true);
    }
  }

  return (
    <Navbar className={navbarClasses.join(" ")} expand="lg" fixed="top">
      <Nav.Link
        as={RouterNavLink}
        to="/home"
        className={style["logo-container"]}
      >
        <img
          className={style["logo"]}
          src="https://res.cloudinary.com/easy-way-suggestopedia/image/upload/c_scale,h_192/v1591097248/CommonImages/easy-way-logo_sekjgz.png"
          alt="logo.png"
        />
      </Nav.Link>
      <Navbar.Collapse id="basic-navbar-nav" className={style["toggle-menu"]}>
        <Nav className={navClasses.join(" ")}>
          <NavDropdown
            title="сугестопедия"
            id="basic-nav-dropdown"
            className={btnMenuClasses.join(" ")}
          >
            <NavDropdown.Item as={RouterNavLink} to="/description">
              Какво е сугестопедията?
            </NavDropdown.Item>
            <NavDropdown.Item as={RouterNavLink} to="/the-seven-laws">
              7-те закона на сугестопедията
            </NavDropdown.Item>
            <NavDropdown.Item as={RouterNavLink} to="/history">
              История за проф. д-р Лозанов
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={RouterNavLink} to="/questions">
              Често задавани въпроси
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            title="защо easy way"
            id="basic-nav-dropdown"
            className={btnMenuClasses.join(" ")}
          >
            <NavDropdown.Item as={RouterNavLink} to="/gallery">
              Галерия
            </NavDropdown.Item>
            <NavDropdown.Item as={RouterNavLink} to="/members">
              Екип
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            title="курсове"
            id="basic-nav-dropdown"
            className={btnMenuClasses.join(" ")}
          >
            <NavDropdown.Item as={RouterNavLink} to="/course-adults">
              За възрастни
            </NavDropdown.Item>
            <NavDropdown.Item as={RouterNavLink} to="/course-childrens">
              За деца
            </NavDropdown.Item>
            <NavDropdown.Item as={RouterNavLink} to="/course-individual">
              Индивидуално обучение
            </NavDropdown.Item>
            <NavDropdown.Item as={RouterNavLink} to="/course-online">
              Онлайн обучение
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            title="график"
            id="basic-nav-dropdown"
            className={btnMenuClasses.join(" ")}
          >
            <NavDropdown.Item as={RouterNavLink} to="/schedule-adults">
              За възрастни
            </NavDropdown.Item>
            <NavDropdown.Item as={RouterNavLink} to="/schedule-childrens">
              За деца
            </NavDropdown.Item>
          </NavDropdown>

          <NavLink
            as={RouterNavLink}
            to="/Contacts"
            className={btnMenuClasses.join(" ")}
          >
            контакти
          </NavLink>
          <Nav.Link
            href="tel:+359899521504"
            className={phoneMenuClasses.join(" ")}
          >
            0899 521 504
          </Nav.Link>
          <Nav.Link as={RouterNavLink} to="" className={style["btn-apply-box"]}>
            <Apply smBtn={smallApplyBtn} />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <div>
        <Nav.Link href="tel:+359899521504" className={`${style["btn-call"]} `}>
          <FontAwesomeIcon icon={faPhoneAlt} size="lg" />
        </Nav.Link>
        <Navbar.Toggle
          className={toggleClasses.join(" ")}
          aria-controls="basic-navbar-nav"
        >
          <FontAwesomeIcon icon={faBars} size="lg" />
        </Navbar.Toggle>
      </div>
    </Navbar>
  );
});

export default Menu;
