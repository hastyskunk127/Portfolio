import ProjectCard from './ProjectCard.js';
import AboutPage from './AboutPage.js';
import './HomePage.css';

function HomePage() {
    const chompDescription = "Dipping our toes into the food recommendation world, one full-stack app at a time";
    const responsiveDescription = "Updating a Thayer St classic's website, making it responsive to all screen sizes";
    const iterativeDescription = "Experiencing the process of iterative development and learning about a potential new market";
    const developmentDescription = "Gaining experience with React components, and learning about pharaohs along the way";
    const woodworksDescription = "Coming Soon!";
    const writingDescription = "Coming Soon!";
    return (
    <div>
        <h1 className="ProjectTitle">HASTYSKUNK127'S WORKSHOP <i className="fa-solid fa-hammer"></i></h1>
        <AboutPage/> 
        <div id="projects" className="Projects">
            <ProjectCard className="ProjectCard" img={"images/Maps.png"} title={"Chomp"} to={"/Portfolio/Chomp"} description={chompDescription}/>
            <ProjectCard className="ProjectCard" img={"images/spectrum.jpeg"} title={"Responsive"} to={"/Portfolio/Responsive"} link description={responsiveDescription}/>
            <ProjectCard className="ProjectCard" img={"images/Iterative.png"} title={"Iterative"} to={"/Portfolio/Iterative"} description={iterativeDescription}/>
            <ProjectCard className="ProjectCard" img={"images/pharoah.jpeg"} title={"Development"} to={"/Portfolio/Development"} description={developmentDescription}/>
            <ProjectCard className="ProjectCard" img={"images/Bench.png"} title={"Woodworks"} to={"/Portfolio/"} description={woodworksDescription}/>
            <ProjectCard className="ProjectCard" img={"images/CNF.png"} title={"Creative Writing"} to={"/Portfolio/"} description={writingDescription}/>
        </div>
        </div>
    );
}

export default HomePage;
