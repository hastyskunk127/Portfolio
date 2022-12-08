import './ProjectCard.css'
import { Link } from "react-router-dom";

function ProjectCard(props) {
    return (
    <Link id={props.title} className="Container" style={{color: 'white', textDecoration: 'none'}} to={props.to}>
        <img className="pic-with-text" src={props.img}></img>
        <div className="text-over-pic" >{props.title}</div>
        <div className="secondary-text-over-pic">{props.description}</div>
    </Link >
    );
}

export default ProjectCard;