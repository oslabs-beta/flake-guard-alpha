//@ts-nocheck
import React from 'react';
import '../../styles/landingPage.css';
import Avatar from '@mui/material/Avatar';
import ashley from '../../assets/ashley.png'; 
import paloma from '../../assets/paloma.png';
import will from '../../assets/will.png';
import brendan from '../../assets/brendan.png';
import tommy from '../../assets/tommy.png';

import linkedInLogo from '../../assets/linkedinlogo.png';
import githubLogo from '../../assets/github-logo.png'
//NEEDING TOMMY INFO -> LINKEDIN AND IMAGE
//STRETCH FEATURES -> WHEN CLICKING OUR TEAM -> GET DIRECTED TO THIS SPOT ON THE PAGE]


const TeamMember = () => {
    const name= ["Ashley", "Paloma", "Tommy", "Brendan", "Will"];
    const role="Full Stack Developer"
    return (
        <>
      <div className="team-member" id="avatars">
        <img src={ashley} alt={name[0]} className="team-member-image" />
        <h2>{name[0]}</h2>
        <p>{role}</p>
        <div className="social-links">
            <a href="https://www.linkedin.com/in/ashley-hannigan-88-/" target="_blank" rel="noopener noreferrer">
                <img src={linkedInLogo} alt="LinkedIn" id="linkedinlogo"/>
            </a> 
            <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
                <img src={githubLogo} alt="Github" id="githublogo"/>
            </a> 
        </div>
      </div>
        <div className="team-member" id="avatars">
        <img src={paloma} alt={name[1]} className="team-member-image" />
        <h2>{name[1]}</h2>
        <p>{role}</p>
        <div className="social-links">
            <a href="https://www.linkedin.com/in/palomareynolds/" target="_blank" rel="noopener noreferrer">
                <img src={linkedInLogo} alt="LinkedIn" id="linkedinlogo"/>
            </a> 
            <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
                <img src={githubLogo} alt="Github" id="githublogo"/>
            </a>
        </div>
      </div>
        <div className="team-member" id="avatars">
        <img src={tommy} alt={name[2]} className="team-member-image" />
        <h2>{name[2]}</h2>
        <p>{role}</p>
        <div className="social-links">
            <a href="https://www.linkedin.com/in/tommy-martinez/" target="_blank" rel="noopener noreferrer">
                <img src={linkedInLogo} alt="LinkedIn" id="linkedinlogo"/>
            </a> 
            <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
                <img src={githubLogo} alt="Github" id="githublogo"/>
            </a>
        </div>
      </div>
      <div className="team-member" id="avatars">
        <img src={brendan} alt={name[3]} className="team-member-image" />
        <h2>{name[3]}</h2>
        <p>{role}</p>
        <div className="social-links">
            <a href="https://www.linkedin.com/in/brendanxiong/" target="_blank" rel="noopener noreferrer">
                <img src={linkedInLogo} alt="LinkedIn" id="linkedinlogo"/>
            </a> 
          {/* Add social links here */}
        </div>
      </div>
      <div className="team-member" id="avatars">
        <img src={will} alt={name[4]} className="team-member-image" />
        <h2>{name[4]}</h2>
        <p>{role}</p>
        <div className="social-links">
            <a href="https://www.linkedin.com/in/willsuto/" target="_blank" rel="noopener noreferrer">
                <img src={linkedInLogo} alt="LinkedIn" id="linkedinlogo"/>
            </a> 
          {/* Add social links here */}
        </div>
      </div>
      </>
    );
  };
  
  const Team = () => {
    const teamMembers = [
      {
        name: 'John Doe',
        role: 'CEO',
        image: 'path/to/john-doe.jpg',
        socialLinks: {
          linkedin: 'https://www.linkedin.com/in/johndoe',
          twitter: 'https://twitter.com/johndoe'
        }
      },
      // Add more team members here
    ];
  
    return (
      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          {teamMembers.map((name, index) => (
            <TeamMember key={index} {...name} />
          ))}
        </div>
      </section>
    );
  };
  
  export default Team;