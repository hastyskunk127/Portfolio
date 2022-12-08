import './AboutPage.css';

function AboutPage() {
    return (
        <div>
        <div className="AboutContent">
            {/* <img className='profile-pic' src="images/ProfilePic.jpg"></img> */}
            <div className="about">
                Hey there! I'm HastySkunk127, a current senior at Brown University.
                I'm studying Computer Science and will be starting as a Software Engineer
                at MongoDB when I graduate, working on the Storage Execution team. I'm 
                excited about learning how to build different things, both within and 
                outside of Computer Science, and this website is a showcase of the different
                skillsets I've been branching out into. You'll see some of my work related to
                software engineering, design, writing, and some more hands-on wood construction.
                I'll expand my workshop as I go along and learn more skillsets. Thanks for 
                stopping by, and feel free to have a look around!
            </div>
        </div>
        <a href="#projects"><i className="fa-solid fa-arrow-down arrow"></i></a>
        </div>
    );
}
export default AboutPage;