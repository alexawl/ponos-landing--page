import React from 'react';
import sprintboard from '../img/workers.jpg';

const Exemplar = () => {
  return (
    <section id="examplar ">
      <div className="container">
        <div className="row">
          <div className="col l1"></div>
          <div className="col l10 center-align">
            <h1>Fast Job Conections</h1>
            <p>We use modern technology to link workers and employers together </p>
            <img className="responsive-img" src={sprintboard} />
          </div>
          <div className="col l1"></div>
        </div>
      </div>
    </section>
  );
};

export default Exemplar;
