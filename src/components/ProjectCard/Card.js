import React from "react";
import ProjectCard from "./ProjectCard";
import { DEFAULT_IMAGES } from '../Gallery/constants/defaultImages'


function Project() {
  return (

    <ul className="cards">
      <ProjectCard
        image={DEFAULT_IMAGES[0].thumbnail}
        title={DEFAULT_IMAGES[0].caption}
        description={DEFAULT_IMAGES[0].description}
        button={DEFAULT_IMAGES[0].button}
        sideButton={DEFAULT_IMAGES[0].sideButton}
        tech={DEFAULT_IMAGES[0].tech}
      />
      <ProjectCard
        image={DEFAULT_IMAGES[1].thumbnail}
        title={DEFAULT_IMAGES[1].caption}
        description={DEFAULT_IMAGES[1].description}
        button={DEFAULT_IMAGES[1].button}
        sideButton={DEFAULT_IMAGES[1].sideButton}
        tech={DEFAULT_IMAGES[1].tech}
      />
      <ProjectCard
        image={DEFAULT_IMAGES[2].thumbnail}
        title={DEFAULT_IMAGES[2].caption}
        description={DEFAULT_IMAGES[2].description}
        button={DEFAULT_IMAGES[2].button}
        sideButton={DEFAULT_IMAGES[2].sideButton}
        tech={DEFAULT_IMAGES[2].tech}
      />
      <ProjectCard
        image={DEFAULT_IMAGES[3].thumbnail}
        title={DEFAULT_IMAGES[3].caption}
        description={DEFAULT_IMAGES[3].description}
        button={DEFAULT_IMAGES[3].button}
        sideButton={DEFAULT_IMAGES[3].sideButton}
        tech={DEFAULT_IMAGES[3].tech}
      />
      <ProjectCard
        image={DEFAULT_IMAGES[4].thumbnail}
        title={DEFAULT_IMAGES[4].caption}
        description={DEFAULT_IMAGES[4].description}
        button={DEFAULT_IMAGES[4].button}
        sideButton={DEFAULT_IMAGES[4].sideButton}
        tech={DEFAULT_IMAGES[4].tech}
      />
      <ProjectCard
        image={DEFAULT_IMAGES[5].thumbnail}
        title={DEFAULT_IMAGES[5].caption}
        description={DEFAULT_IMAGES[5].description}
        button={DEFAULT_IMAGES[5].button}
        sideButton={DEFAULT_IMAGES[5].sideButton}
        tech={DEFAULT_IMAGES[5].tech}
      />
    </ul>
  );
}

export default Project;