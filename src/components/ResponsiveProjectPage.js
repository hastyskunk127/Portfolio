import './ResponsiveProjectPage.css';

function ResponsiveProjectPage() {
    return (
        <div className="Content">
            <h1 className="ProjectTitle">Responsive Redesign</h1>
            <div className="Division">
                <h1 className="DivisionTitle">Background Context</h1>
                <div className="DivisionText">
                    My mission was to set out to find a website that could use a overhaul in terms of accessibility and ease of use, 
                    and get experience with visual redesign and generating responsive website.
                </div>
                <div className="DivisionText">
                    I set my sights upon Spectrum-India, a store prominently featured on Thayer St on my campus. The store has been around 
                    for a while and I've shopped here before. When I visited the website I was shocked to see how dated the website looked,
                    and was initially quite overwhelmed by the scattering of text across the website.
                </div>
                <img src="images/SpectrumSite.png" className="DivisionImage"></img>
            </div>
            <div className="Division">
                <h1 className="DivisionTitle">Research</h1>
                <div className="DivisionText">
                    I did some research into what issues the website had, from browsing it myself and from presenting it to
                    a number of peers. I've summarized the takeaways below.
                </div>
                <h2 className="DivisionTitle">The Issues</h2>
                <div className="DivisionText">
                    The first impression that the website gives upon loading is quite intimidating — in the words of a peer I spoke to, it 
                    felt like a blown out poster more than a website.
                </div>
                <div className="DivisionText">
                    Information is very scattered with a variety of links in irregular places, and the text lacks uniformity - different text
                    has different font, size, and color without any real order to it. There is no clear hierarchy to the website. In terms of learnability and efficiency of browsing items the website is quite lacking.
                </div>
                <div className="DivisionText">
                    The text is also very small, and there is a lot of it, which can lead to a poor accessibility experience especially when combined with the low contrast.
                </div>
                <div className="DivisionText">
                    The layout also impacts the efficiency of purchasing items of the site, and even taking in what options there are to purchase. Because everything is so spread out the site is taxing on your memory, 
                    since it’s impossible to take in at first glance the different items.
                </div>
                <div className="DivisionText">
                    There is a navbar, which could help combat the issue of navigability. but it is very small and off to a corner.
                </div>
                <div className="DivisionText">
                    There is text at the very bottom indicating that pictures are expandable, but this isn’t apparent from looking or hovering over them, and not all pictures are expandable.
                </div>
                <div className="DivisionText">
                    Each section also has the link for actually viewing the item in a different area, without uniformity.
                </div>
            </div>
            <div className="Division">
                <h1 className="DivisionTitle">Design Iterations</h1>
                <div className="DivisionText">
                    Because my goal was to create a responsive page that looked nice on mobile devices, tablets, and laptops,
                    I made three sets of designs. For each design I made a lo-fi prototype in Balsamiq, and then a hi-fi prototype
                    in Figma. I included annotations for the prototypes.
                </div>
                <h2 className="DivisionTitle">Lo-fi Prototypes</h2>
                <h3 className="DivisionTitle">Mobile</h3>
                <img src="images/Lofi-Mobile.png" className="DivisionImage"></img>
                <h3 className="DivisionTitle">Tablet</h3>
                <img src="images/Lofi-Tablet.png" className="DivisionImage"></img>
                <h3 className="DivisionTitle">Laptop</h3>
                <img src="images/Lofi-Laptop.png" className="DivisionImage"></img>
                <h2 className="DivisionTitle">Hi-fi Prototypes</h2>
                <h3 className="DivisionTitle">Mobile</h3>
                <img src="images/MobileHifiPrototype.png" className="DivisionImage"></img>
                <h3 className="DivisionTitle">Tablet</h3>
                <img src="images/TabletHifiPrototype.png" className="DivisionImage"></img>
                <h3 className="DivisionTitle">Laptop</h3>
                <img src="images/LaptopHifiPrototype.png" className="DivisionImage"></img>
                <h2 className="DivisionTitle">Visual Style Guide</h2>
                <div className="DivisionText">
                    I included a visual style guide, for ease of taking in the core stylistic components of my site at a glance.
                </div>
                <img src="images/VisualStyleGuide.png" className="DivisionImage"></img>
                <h2 className="DivisionTitle">The Finished Site</h2>
                <div className="DivisionText">
                    With the prototypes finished, I converted my designs into an actual website, which you can access <a href="https://hastyskunk127.github.io/ResponsiveRedesign/">here!</a>
                </div>
                <img src="images/RedesignedSite.png" className="DivisionImage"></img>
            </div>
            <div className="Division">
                <h1 className="DivisionTitle">Conclusion</h1>
                <div className="DivisionText">
                    In conclusion, I got a lot of practice with designing in Balsamiq and Figma. I also became
                    more experienced with designing a website with different viewing devices in mind. In particular,
                    I became very familiar with media queries as well as the flex-box model.
                </div>
            </div>
        </div>
    );
}

export default ResponsiveProjectPage;