import Navbar from "./Navbar"
import Aside from "./Aside"
import ProjectInfo from "./ProjectInfo"
import huseRoyale from "../assets/images/huse-royale.png"
import zenArcade from "../assets/images/zen-arcade.png"
import spotify from "../assets/images/spotify.png"
import "../styles/projects.css"
import { useState } from "react"

export default function Projects() {
    const [projectClicked, setProjectClicked] = useState(null)

    const handleProjectClick = project => {
      console.log(1)
      setProjectClicked(project)
    }

    return <>
    <Navbar />
    <div className="projects">
      <Aside />
      <div className="project-container">
        <div className="project-cards">
          <div className="card" id="project-1" onClick={() => {
            handleProjectClick(1)
          }}>
            <img src={huseRoyale} alt="huse-royale" className="project-img" />
            <h1>The Huse Royale</h1>
          </div>

          <div className="card" id="project-2" onClick={() => {
            handleProjectClick(2)
          }}>
            <img src={zenArcade} alt="zen-arcade" className="project-img" />
            <h1>Zen Arcade</h1>
          </div>

          <div className="card" id="project-3" onClick={() => {
            handleProjectClick(3)
          }}>
            <img src={spotify} alt="spotify-clone" className="project-img" />
            <h1>Spotify Clone</h1>            
          </div>
        </div>
      </div>
        {projectClicked ?
          <div className="project-info">
            <ProjectInfo project={projectClicked} />
          </div>
        :
          null}
    </div>
    </>
}