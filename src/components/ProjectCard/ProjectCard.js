import React from "react";
import "./ProjectCard.css";

function ProjectCard(props) {
  return (
    <li className=" cards_item">
      <div className="py-5">
        <div className='card'>
          <div className='card_image'>
            <img src={props.image} alt="" />
          </div>
          <div className="card_content text-center">
            <h2 className="card_title my-2">{props.title}</h2>
            <p className="card_text text-align my-3">{props.description}</p>
            <a
              href={props.button}
              className="btn card_btn btn-color text-white fw-bold mb-3"
              target="_blank"
              rel="noreferrer"
            >
              View Project
            </a>
            <a
              href={props.sideButton}
              className="btn sub-title fw-bold"
              target="_blank"
              rel="noreferrer"
            >
              Github Repository
            </a>
          </div>
          <div className="card-footer text-muted fw-light">{props.tech}</div>
        </div>


      </div>

    </li>
  );
}

export default ProjectCard;