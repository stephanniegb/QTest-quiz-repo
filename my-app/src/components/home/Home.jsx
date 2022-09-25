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

const CustomDisplayIcon = ({ URL, icon, label }) => {
  //destructure props
  return (
    <a href={URL} target="_blank" rel="noopener noreferrer" className="icon">
      <FontAwesomeIcon icon={icon} className="brand__icon" />
      <p>{label}</p>
    </a>
  );
};

function Home({ setUser }) {
  //destructure props
  const navigate = useNavigate();
  //variable to store the name
  let storedName;

  const [name, setName] = useState("");
  const handleChange = (e) => {
    const nameStr =
      e.target.value.charAt(0).toUpperCase() +
      e.target.value.slice(1).toLowerCase(); //to make the first letter uppercase
    setName(nameStr);
  };
  // fuction for the retriving the name
  const onFormSubmit = (data) => {
    setUser(data);
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
        <span className="logo">
          Quiz/<small>me</small>
        </span>
        <div className="home__headerIcon">
          <CustomDisplayIcon
            URL={"https://www.linkedin.com/in/stephanie-egbuonu-809aa120a"}
            icon={faLinkedin}
          />
          <CustomDisplayIcon
            URL={"https://twitter.com/Stephanniegb"}
            icon={faTwitter}
          />
          <CustomDisplayIcon
            URL={"https://github.com/stephanniegb"}
            icon={faGithub}
          />
        </div>
      </header>
      {/* Body... */}
      <div className="home__main">
        <h2>Quiz Me</h2>
        <div className="home__mainpara">
          <p>Topic: Javascript</p>
          <p>Multiple choice questions</p>
        </div>

        <h3>Before you start:</h3>
        <p>*You can only select your answer once*</p>
        <p>Test your knowledge of javascript here now!</p>
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
          <CustomDisplayIcon
            URL={"mailto:stephanieegbuonu@gmail.com"}
            icon={faEnvelope}
            label={"Mail"}
          />
          <CustomDisplayIcon
            URL={"https://github.com/stephanniegb"}
            icon={faGithub}
            label={"Github"}
          />
          <CustomDisplayIcon
            URL={"https://www.linkedin.com/in/stephanie-egbuonu-809aa120a"}
            icon={faLinkedin}
            label={"LinkedIn"}
          />
          <CustomDisplayIcon
            URL={"https://twitter.com/Stephanniegb"}
            icon={faTwitter}
            label={"Twitter"}
          />
        </div>
      </footer>
    </div>
  );
}

export default Home;
