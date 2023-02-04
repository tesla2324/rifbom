import { Link } from "react-router-dom";

import "./stylesLayout.css";

const Layout = ({ children }) => {
  return (
    <div className="containerLayout">
      <div className="sidebardDash">
        <div className="logoContainer"></div>
        <div className="optionsNav">
          <div className="linkContainer">
            <Link className="linkSidebar" to="/">
              Home
            </Link>
            <div className="bgItemSelected">
              <svg
                width="301"
                height="110"
                viewBox="0 0 301 110"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 45C0 36.7157 6.71573 30 15 30H271H300V80H271H15C6.71573 80 0 73.2843 0 65V45Z"
                  fill="#E9EFFD"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M270 30H300L300 0C300 16.5685 286.569 30 270 30Z"
                  fill="#E9EFFD"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M271 80H301L301 110C301 93.4315 287.569 80 271 80Z"
                  fill="#E9EFFD"
                />
              </svg>
            </div>
          </div>
          <div className="linkContainer">
            <Link className="linkSidebar" to="/about">
              About
            </Link>
          </div>
        </div>
        <div className="avatarUser"></div>
      </div>
      <div className="contentRoute">{children}</div>
    </div>
  );
};

export default Layout;
