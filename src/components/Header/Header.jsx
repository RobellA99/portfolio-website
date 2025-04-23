import "./Header.scss";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Header() {
  return (
    <section className="header">
      <div className="header__container">
        <h2 className="header__title">Welcome to my Portfolio Website</h2>
        <ul className="header__list">
          <li className="header__item">
            <a
              href="https://github.com/RobellA99"
              className="header__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="header__icon" /> GitHub
            </a>
          </li>
          <li className="header__item">
            <a
              href="https://www.linkedin.com/in/robell-asfaw"
              className="header__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="header__icon" /> LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
