import React from 'react';
import '../../../styles/landingPage.css';
import Avatar from '@mui/material/Avatar';
import ashley from '../../assets/ashley.png'; 
import paloma from '../../assets/paloma.png';
import will from '../../assets/will.png';
import brendan from '../../assets/brendan.png';

const TeamMember = () => {
    const name= ["Ashley", "Paloma", "Tommy", "Brendan", "Will"];
    const role="Full Stack Developer"
    return (
        <>
      <div className="team-member">
        <img src={ashley} alt={name[0]} className="team-member-image" />
        <h2>{name[0]}</h2>
        <p>{role}</p>
        <div className="social-links">
            <p>https://www.linkedin.com/in/ashley-hannigan-88-/</p>
          {/* Add social links here */}
        </div>
      </div>
        <div className="team-member">
        <img src={paloma} alt={name[1]} className="team-member-image" />
        <h2>{name[1]}</h2>
        <p>{role}</p>
        <div className="social-links">
            <p>https://www.linkedin.com/in/palomareynolds/</p>
          {/* Add social links here */}
        </div>
      </div>
        <div className="team-member">
        <img src={ashley} alt={name[2]} className="team-member-image" />
        <h2>{name[2]}</h2>
        <p>{role}</p>
        <div className="social-links">
            <p>https://www.linkedin.com/in/ashley-hannigan-88-/</p>
          {/* Add social links here */}
        </div>
      </div>
      <div className="team-member">
        <img src={brendan} alt={name[3]} className="team-member-image" />
        <h2>{name[3]}</h2>
        <p>{role}</p>
        <div className="social-links">
            <p>https://www.linkedin.com/in/ashley-hannigan-88-/</p>
          {/* Add social links here */}
        </div>
      </div>
      <div className="team-member">
        <img src={will} alt={name[4]} className="team-member-image" />
        <h2>{name[4]}</h2>
        <p>{role}</p>
        <div className="social-links">
            <p>https://www.linkedin.com/in/willsuto/</p>
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
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </section>
    );
  };
  
  export default Team;