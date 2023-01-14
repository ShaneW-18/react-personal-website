import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectItem({ image, name, git, skills, id }) {
  const navigate = useNavigate();
  return (
    <div
      className="projectItem"
      onClick={() => {
        console.log(skills)
        window.open("https://github.com" + git, "_blank")
      }}
    >
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1> {name} </h1>
    </div>
  );
}

export default ProjectItem;
