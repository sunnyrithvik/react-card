import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

function Avatar() {
  return (
    <img
      className="avatar"
      src="https://repository-images.githubusercontent.com/37153337/9d0a6780-394a-11eb-9fd1-6296a684b124"
      alt="myreact"
    />
  );
}

function Intro() {
  return (
    <div className="data">
      <h1>React</h1>
      <p>
        Full-stack web developer and teacher at Udemy. When not coding or
        preparing a course, I like to play board games, to cook (and eat), or to
        just enjoy the Portuguese sun at the beach.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill lang="react" colr="red" />
      <Skill lang="javascript" colr="blue" />
      <Skill lang="html + css" colr="green" />
      <Skill lang="react" colr="red" />
      <Skill lang="javascript" colr="blue" />
      <Skill lang="html + css" colr="green" />
    </div>
  );
}

function Skill(props) {
  return (
    <div style={{ backgroundColor: props.colr }} className="skill">
      {props.lang}
    </div>
  );
}

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
