import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";


function Home() {
  return (
    <div className="home">
      <div className="about">
        <div class="image">
          <img src="https://static.wixstatic.com/media/508118_e69cb2df0a414dc6a773e219e022d120~mv2.png/v1/crop/x_43,y_94,w_434,h_418/fill/w_288,h_278,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ShaneWilesPic.png" sizes=""/>
        </div>
        <h2> Hi, My Name is Shane Wiles</h2>
        <div className="prompt">
          <p>A software developer with a passion for technology to make a difference in the world and have an impact on people's lives.</p>
          <div className="socialMedia">
            <LinkedInIcon onClick={event =>  window.open(' www.linkedin.com/in/shane-wiles', '_blank')} />
            <EmailIcon onClick={event =>  window.open('mailto:shane@swiles.tech', '_blank')} />
            <GithubIcon onClick={event =>  window.open('https://github.com/ShaneW-18', '_blank')} />
          </div>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Software & Tools</h2>
            <span>
               MongoDB, VPS hosting, Treafik, Docker, InteliJ, Git, Postman,
               StencilJS, Postman, <br/>Jira, Confluence, Xamarin
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Maven, C#, TypeScript, CSS/HTML, C++, Node.js</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
