import './MapProjectPage.css';

function MapProjectPage() {
    return (
        <div className="Content">
            <h1 className="ProjectTitle">Chomp</h1>
            <div className="Division">
                <h1 className="DivisionTitle">Background Context</h1>
                <div className="DivisionText">
                    My group and I wanted to gain experience working together on a larger, full-stack software engineering project - 
                    in particular, with building a project, and its entire pipeline from database to frontend, from scratch.
                </div>
                <div className="DivisionText">
                    All four of us are quite passionate about food, and in having a varied diet. We decided to create a project that would
                    reccommend meals for users.
                </div>
                <div className="DivisionText">
                    Our app displays useful, personalized statistics for our users while also advertising fresh alternatives for daily meal consumption.
                    We recommend you a variety of choices for each meal of each day of the week! By keeping track of your dietary restrictions and the food you've chosen, 
                    as well as how long it's been since you've chosen a certain food, we reccomend your schedule for next week. By using an ELO algorithm that updates foods' 
                    rankings when you choose them and not others but also taking into account recency, Chomp! learns the foods you enjoy and makes sure you're not eating the 
                    same meal every day!
                </div>
                <div className="DivisionText">
                    You can get info about foods from our database. If we don't have your meal item stored, you can add info to it, allowing it to be recognized as an item moving forward.
                    You can also get stats about the nutritious value of the meals you've logged with us. User information is encrypted using the RSA encryption scheme.
                </div>
            </div>
            <div className="Division">
                <h1 className="DivisionTitle">Research</h1>
                <div className="DivisionText">
                    There are a number of existing food reccomendation apps, with it proving to be a rather successful
                    market (Paprika, Meallime, etc.) Two of the focuses that most of the apps share is an emphasis on 
                    healthy meals/diets and on quick recipes.
                </div>
                <div className="DivisionText">
                    In terms of the ELO ranking algorithm that we used, we've seen it used commonly 
                    in chess and in other competitive games. Some dating apps have also been accused of 
                    using it.
                </div>
            </div>
            <div className="Division">
                <h1 className="DivisionTitle">Design Iterations</h1>
                <h2 className="DivisionTitle">Design</h2>
                <div className="DivisionText">
                    We decided that our key functionality was the logging page, the page where a user could request a new weekly
                    schedule, the page where a user could get information about fruit.
                </div>
                <div className="DivisionText">
                    Our Request a Schedule page has an information section explaining how the schedule request works. Below it,
                    users will be presented with a weekly schedule of meals, with each meal (Breakfast, Lunch, Dinner) having three options
                    that a user could choose from. Based on their chosen selections, the ELO rankings of each food item will be updated in the database,
                    which will impact which foods get shown to the user in the future.
                </div>
                <img src="images/Chomp1.png" className="DivisionImage"></img>
                <img src="images/Chomp6.png" className="DivisionImage"></img>
                <div className="DivisionText">
                    The information page allows users to get information about particular foods. Because the database of food investments is not
                    comprehensive, users have the option to add information about any food not in the database.
                </div>
                <img src="images/Chomp2.png" className="DivisionImage"></img>
                <div className="DivisionText">
                    The logging page allows users to log meals that they've consumed and get information about their stats,
                    as well as their logging history.
                </div>
                <img src="images/Chomp3.png" className="DivisionImage"></img>
                <div className="DivisionText">
                    Our page is authenticated, and as such users need to sign in to in order to access most features.
                    When creating a new account, users can specify any food groups they wish to exclude from their 
                    meal schedule.
                </div>
                <img src="images/Chomp4.png" className="DivisionImage"></img>
                <img src="images/Chomp5.png" className="DivisionImage"></img>
                <h3 className="DivisionTitle">Feedback</h3>
                <div className="DivisionText">
                    Based on a bit of user testing, some of the functionality was confusing - in particular,
                    the fact that choosing an item from the weekly schedule doesn't mean that that food item is logged
                    in the log page. We added a label on top of the page to help with this - the picture in the above section
                    reflects this change.
                </div>
                <div className="DivisionText">
                    You can find the repository for our site <a href="https://github.com/DamianWasilewicz/Chomp.git">here!</a>
                </div>
            </div>
            <div className="Division">
                <h1 className="DivisionTitle">Conclusion</h1>
                <div className="DivisionText">We learned a lot from this project, in particular gaining experience building 
                a project from the bottom up. This meant getting familiar with using React, Java, and SQL together. It also
                exposed us to how difficult it can be to find and work around sometimes limited datasets.</div>
            </div>
        </div>
    );
}

export default MapProjectPage;