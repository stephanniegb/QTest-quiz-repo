
import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home({ setUser }) { // we destructure the setuser because it is an object here
  // fuction for the retriving the name
  const onFormSubmit = (data) => {
    setUser(data);
  };
  const navigate = useNavigate();
  //variable to store the name
  let storedName;

  const [name, setName] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
  };

  // usenavigate on submit...
  const handleSubmit = (e) => {
    e.preventDefault();
    const { nameValue } = e.target.elements;
    storedName = nameValue.value;
    onFormSubmit(storedName);
    navigate("start");
  };
  return (
    <div className="home__container">
      {/* HEADER... */}
      <header className="home__header">
        <span>
          Q/<small>test</small>
        </span>
        <div className="home__headerIcon">
          <a
            href="https://www.linkedin.com/in/stephanie-egbuonu-809aa120a"
            target="_blank"
            rel="noopener noreferrer"
            className="headerIcon"
          >
            <FontAwesomeIcon icon={faLinkedin} className="brand__icon" />
          </a>
          <a
            href="https://twitter.com/Stephanniegb"
            target="_blank"
            rel="noopener noreferrer"
            className="headerIcon"
          >
            <FontAwesomeIcon icon={faTwitter} className="brand__icon" />
          </a>
          <a
            href="https://github.com/stephanniegb"
            target="_blank"
            rel="noopener noreferrer"
            className="headerIcon"
          >
            <FontAwesomeIcon icon={faGithub} className="brand__icon" />
          </a>
        </div>
      </header>
      {/* Body... */}
      <div className="home__main">
        <h2>Welome {name}!</h2>
        <p>Test your knowledge of HTML and CSS here now!</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            required
            placeholder="Enter name..."
            value={name}
            onChange={handleChange}
            name="nameValue"
          />{" "}
          <br />
          <button type="submit" className="home__button">
            Start Quiz
          </button>
          {/* to make the whole button clickable you could also wrap the button with anchor or link tag*/}
        </form>
      </div>

      {/* FOOTER... */}
      <footer className="home__footer">
        <h2>Contact us</h2>
        <div className="home__icons">
          <a
            href="mailto:stephanieegbuonu@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <FontAwesomeIcon icon={faEnvelope} className="brand__icon" />
            <p>Mail</p>
          </a>
          <a
            href="https://github.com/stephanniegb"
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <FontAwesomeIcon icon={faGithub} className="brand__icon" />
            <p>Github</p>
          </a>
          <a
            href="https://www.linkedin.com/in/stephanie-egbuonu-809aa120a"
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <FontAwesomeIcon icon={faLinkedin} className="brand__icon" />
            <p>LinkedIn</p>
          </a>
          <a
            href="https://twitter.com/Stephanniegb"
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <FontAwesomeIcon icon={faTwitter} className="brand__icon" />
            <p>Twitter</p>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Home;
