import './DevelopmentProjectPage.css';

function DevelopmentProjectPage() {
    return (
        <div className="Content">
            <h1 className="ProjectTitle">React Development</h1>
            <div className="Division">
                <h1 className="DivisionTitle">Background Context</h1>
                <div className="DivisionText">
                    I wanted to gain experience working with React JS, and wanted to find a way to combine it
                    with my interests. I am currently taking a class on Middle Egyptian Hieroglyphics, which has 
                    renewed my interests in the Ancient Egyptian culture as well as the different pharaohs it had.
                    I wanted to share some information about these pharaohs as well as learn more myself. I also thought
                    I could bring more attention to the female pharaohs throughout history, for they often are overlooked 
                    save for Cleopatra.
                </div>
            </div>
            <div className="Division">
                <h1 className="DivisionTitle">Research</h1>
                <div className="DivisionText">
                    I performed most of my research on Wikipedia, scrolling through lists of pharaohs in different eras.
                    I tried to include pharaohs who had somewhat determined rule dates - for some pharaohs, particularly older
                    and more obscure ones, this proved infeasible.
                </div>
            </div>
            <div className="Division">
                <h1 className="DivisionTitle">Design</h1>
                <h2 className="DivisionTitle">Filters, Sorting, and the Accumulator</h2>
                <div className="DivisionText">
                    I decided to include the ability to sort the pharaohs according to two properties.
                    The first sort sorts pharaohs in terms of their start date of rule, while the second
                    sorts according to how long they ruled. I found these to be natural viewing orders.
                </div>
                <img src="images/Sort.png" className="DivisionImage"></img>
                <div className="DivisionText">
                    Because there was a good number of pharaohs, I decided to allow for the use of a filter that 
                    only shows the pharaohs that ruled during a particular kingdom. Because the kingdoms were distinguished
                    from each, I found this to be a natural division.
                </div>
                <img src="images/FilterKingdom.png" className="DivisionImage"></img>
                <div className="DivisionText">
                    I included the ability to filter by sex as well.
                </div>
                <img src="images/FilterSex.png" className="DivisionImage"></img>
                <div className="DivisionText">
                    I included the ability to filter out pharaohs that you haven't selected as being your favorites.
                    This allows you to return to pharaohs that you want to learn more information about later. I've also
                    created an accumulator that adds up the total years reigned by your favorite pharaohs.
                </div>
                <img src="images/FilterFavorites.png" className="DivisionImage"></img>
                <h2 className="DivisionTitle">The Card</h2>
                <div className="DivisionText">
                    For each pharaoh, I've presented their information in a Pharaoh Card. This card holds information about their
                    name, the kingdom they ruled during, their gender, the start year of their reign, the duration of their reign 
                    in years, a brief summary of their lives sourced and edited from wikipedia, a link to their full wikipedia page, 
                    as well as a button that allows you to add and remove them from your favorites.
                </div>
                <img src="images/Card.png" className="DivisionImage"></img>
                <div className="DivisionText">
                    Finally, I put everything together to create the website. 
                    You can find the website <a href="https://hastyskunk127.github.io/Development/">here!</a>
                </div>
                <img src="images/PharaohsPage.png" className="DivisionImage"></img>
            </div>
            <div className="Division">
                <h1 className="DivisionTitle">Conclusion</h1>
                <div className="DivisionText">
                    In conclusion, I gathered working with React, in particular with components. I gained experience using React Bootstrap,
                    combining CSS with React, and incorporating vanilla JS into it as well with sorting, filtering. I also got to learn 
                    about more cool pharaohs.
                </div>
            </div>
        </div>
    );
}

export default DevelopmentProjectPage;