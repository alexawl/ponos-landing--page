import React from 'react';
import meadow from '../img/florida.jpg';

const Hero = () => {
  return (
    <section
      id="hero"
      className="blue lighten-4"
      style={{ backgroundImage: 'url(' + meadow + ')'}}
    >
      <div className="container valign-wrapper jc-center">
        <div className="valign center-align white-text">
          <p className="flowtext hide-on-small-only"><h4>Find a job in your area!</h4></p>
          <h3>
            Begin your search, with us.
          </h3>

          <p className="big">
            Our passion is to provide the top possible matchesbetween employer and contractor in any industries. 
            <br/>Wehave a foundational belief that creating relationships andconnecting people is what move companies andemployees forward
                        
          </p>

          <a className="btn waves-light waves-effect m-r-16">For Employers</a>
          <a className="btn waves-light waves-effect">For Job Seekers</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
