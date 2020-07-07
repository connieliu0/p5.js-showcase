import React from 'react';
import './styles/App.css';

const Details= ({piece}) => {
const {title, image, author, pronouns, resources, type, tools, qanda}=piece;
return (
  
      <div className="detailsbody">
            <img
              src={
                require(`./images/${image}`)
              }
              alt={title}
              className="Card-image"
            />
            <h1>{title}</h1>
            <h1>Created By</h1>
            <h2>{author}{pronouns}</h2>
            <h2>Project Links</h2>
            {resources.map(i => (
             <a href={i.link}>{i.name}</a>
          ))}
            <h2>Tools</h2>
            {tools.map(i => (
             <a href={i.link}>{i.name}</a>
          ))}
          <h1>Q and A</h1>
          <h2>What are you up to? How did you get started with p5.js?</h2>
          <div id="answer1"></div> 
          <p>{qanda.answer1}</p>
          {/* { document.getElementById("answer1").innerHTML =qanda.answer1} */}
          {/* is innerHTML bad, do I use dangerously set inner html? */}
          <h2>How did you use p5.js in this project? </h2>
          <p>{qanda.answer2}</p>
          <h2>What's your favorite p5.js feature? </h2>
          <h2>Did you face any challenges working on this project? If so, how did you overcome them?</h2>
      </div>
    )
  };
export default Details;
