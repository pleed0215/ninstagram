import React from "react";

const Footer: React.FC = () => (
  <footer className="w-full h-16 flex items-center justify-center">
    <div>
      <li className="list-none flex flex-row justify-center items-center">
        <ul>
          <a className="footer__list_item" href="#">
            ABOUT US
          </a>
        </ul>
        <ul>
          <a className="footer__list_item" href="#">
            SUPPORT
          </a>
        </ul>
        <ul>
          <a className="footer__list_item" href="#">
            PRESS
          </a>
        </ul>
        <ul>
          <a className="footer__list_item" href="#">
            API
          </a>
        </ul>
        <ul>
          <a className="footer__list_item" href="#">
            JOBS
          </a>
        </ul>
        <ul>
          <a className="footer__list_item" href="#">
            PRIVACY
          </a>
        </ul>
        <ul>
          <a className="footer__list_item" href="#">
            TERMS
          </a>
        </ul>
        <ul>
          <a className="footer__list_item" href="#">
            DRIRECTOY
          </a>
        </ul>
        <ul>
          <a className="footer__list_item" href="#">
            PROFILES
          </a>
        </ul>
        <ul>
          <a className="footer__list_item" href="#">
            HASHTAGS
          </a>
        </ul>
        <ul>
          <a className="footer__list_item" href="#">
            LANGUAGE
          </a>
        </ul>
      </li>
    </div>
    <div className="ml-8">
      <p className=" text-gray-400 text-sm font-normal ">
        &copy; 2020 NINSTAGRAM
      </p>
    </div>
  </footer>
);

export default Footer;
