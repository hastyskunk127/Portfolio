import './IterativeProjectPage.css';

function IterativeProjectPage() {
    return (
        <div className="Content">
            <h1 className="ProjectTitle">Iterative Design</h1>
            <div className="Division">
                <h1 className="DivisionTitle">Background Context + Problem</h1>
                <div className="DivisionText">
                    Working with a group of three others, we chose an up-and-coming startup and 
                    designed an interactive interface for the particular problem that the startup 
                    was addressing.
                </div>
                <div className="DivisionText">
                    We partitioned the task into four parts, modelling an interactive design flow.
                    First, we sketched our ideas for the interfaces; second, we created an interactive Hi-Fi
                    prototype; third, we conducted user testing on a prototype that we revised 
                    in response to feedback; and finally we contacted the startup with our results.
                </div>
                <div className="DivisionText">
                    Because this project was our group's capstone project, we had to incorporate aspects of our 
                    concentrations (Economics, Applied Math, Computer Science). Based on this, we contacted Trendex,
                    a platform for investing in celebrities' performance in a similar way as you would invest in the 
                    stock market. We chose to focus on the actual investment platform, which we designed with a mobile
                    interface in mind.
            
                </div>
                <div className="DivisionText">
                    The startup we chose to design an interactive interface for was Trendex, a platform for investing
                    in celebrities' performance in a similar way as you would invest in the stock market. We chose to 
                    focus on the actual investment platform, which we designed with a mobile interface in mind. Our design
                    choices will influence how users approach investing in celebrities.
                </div>
            </div>
            <div className="Division">
                <h1 className="DivisionTitle">Research</h1>
                <div className="DivisionText">
                    We recognize that blending together
                    personal interests and finance can be a sensitive topic. Thus, we want to ensure that we create a trustworthy
                    and easy-to-use interface that empowers individuals to make educated investment decisions, which we believe will 
                    promote a positive user experience.
                </div>
                <img className="DivisionImage" src="images/Trendex.png"></img>
                <div className="DivisionText">
                    From digging around the original Trendex page, it appears there is some demand in the space,
                    with a number of high-profile investors backing the company (YCombinator included),
                    and with over 60 talents currently signed. It remains to be seen how ethically the idea of 
                    investing in individual performance ends up being.
                </div>
            </div>
            <div className="Division">
                <h1 className="DivisionTitle">Design Iterations</h1>
                <div className="DivisionText">
                    As part of our iterative process, we came up with preliminary sketches of what we decided were our key features.
                    These sketches include screens containing visuals of a user's current investments 
                    as well as pages including news regarding relevant celebrities and explore pages that help 
                    users find new investment opportunities. The screens are key to achieving the company's 
                    goal of providing a simple interface that guides users through the investment process, specifically 
                    for celebrities.
                </div>
                <h2 className="DivisionTitle">1)Sketching & WireFraming</h2>
                <h3 className="DivisionTitle">Brainstorming</h3>
                <div className="DivisionText">
                Below we include a number of unique screens that provide a plethora of functionality between the four sets of
                wireframes. There is some overlap between them, such as a search or news page, but each sketch places different 
                levels of emphasis on such features. Within each set of sketches is also the reflection of how information dense 
                our investment platform should be.
                </div>
                <h3 className="DivisionTitle">Design 1</h3>
                <img src="images/IterativeDesign1.png" className="DivisionImage"></img>
                <h3 className="DivisionTitle">Design 2</h3>
                <img src="images/IterativeDesign2.png" className="DivisionImage"></img>
                <h3 className="DivisionTitle">Design 3</h3>
                <img src="images/IterativeDesign3.png" className="DivisionImage"></img>
                <h3 className="DivisionTitle">Design 4</h3>
                <img src="images/IterativeDesign4.png" className="DivisionImage"></img>
                <h3 className="DivisionTitle">Final Wireframe</h3>
                <div className="DivisionText">
                    Our sketches depict an interface in which users can invest in celebrities while monitoring their progress and value. We identified four main screens that would facilitate an easy-to-use and trustworthy investment platform: search/news page, investments page, notifications page, and profile page.
                </div>
                <div className="DivisionText">
                    The search and news functionality was combined into the same page, as we concluded that investors would value being able to research and purchase new tokens all on the same page. Within this search/news page, we provide filters (such as athletes, artists, politicians, etc.) which helps serve users who are looking to explore new options for investment.
                </div>
                <div className="DivisionText">
                    The investments page provides an overview of one’s portfolio as a whole, as well as their current investments. Including a watch list feature empowers the investor to stay up to date with a celebrity they are interested in, so that they can make an informed decision on whether to invest in them.
                </div>
                <div className="DivisionText">
                    Both the notifications and profile pages are more textbook in nature. In these pages, we wanted to facilitate platform-user transparency by making it clear which actions were taken, and which actions are available to take.
                </div>
                <img className="DivisionImage" src="images/FinalWireframe.png"></img>
                <h2 className="DivisionTitle">2) Mock-Up</h2>
                <h3 className="DivisionTitle">Initial Designs</h3>
                <div className="DivisionText">
                The primary three screens that we chose to include were an Investments Page, Discover Page, and User Profile Page. You can access a separate Notifications Page by clicking on a Bell Icon in the top right. In addition, the Discover page gives you the option to click on certain profiles which
                generates a pop-up from which can learn more about the person/buy or sell their stock on a separate page. We also decided to include a Login Page, Payment Page, and a Notifications Page for the completeness of our application and so that we could properly ask users to do tasks when it came 
                to User Testing.
                </div>
                <div className="MockUpImages">
                    <img src="images/InvestmentsPage.png" className="DivisionImage MockUpImage"></img>
                    <img src="images/DiscoverPage.png" className="DivisionImage MockUpImage"></img>
                    <img src="images/UserProfilePage.png"className="DivisionImage MockUpImage"></img>
                    <img src="images/LoginPage.png" className="DivisionImage MockUpImage"></img>
                    <img src="images/PaymentPage.png" className="DivisionImage MockUpImage"></img>
                    <img src="images/NotificationsPage.png" className="DivisionImage MockUpImage"></img>
                </div>
                <h3 className="DivisionTitle">Feedback</h3>
                <div className="DivisionText">
                    1) In response to feedback, we also added colors for priority notifications, since one piece of feedback was that more urgent notifications were not immediately noticeable. 
                    We also moved our notifications button from the bottom bar to the top right to make it less of a core feature.
                </div>
                <div className="DivisionText">
                    2) One piece of feedback was concern over the accessibility of our text contrast - we found that we performed well on contrast ratio websites, so we executively chose to keep
                    the particular background color, but kept an eye out for contrast issues moving forward.
                </div>
                <div className="DivisionText">
                    3) We also received concern over the accessibility of our notifications for tokens increasing/decreasing in value. Initially, the only difference between the two icons was the 
                    background color (green for token value increase, red for decrease), which could be inaccessible to people with color blindness. To remedy this we modified the icons to also include
                    an arrow indicating the direction of growth.
                </div>
                <div className="DivisionText">
                    4) Based on a number of minor critiques, we concluded that we should restructure and improve the graphs on our Investments page. First, we added time horizons for the overall portfolio 
                    graph, making it more obvious to the user what time range they are looking at. We also chose to replace the small graphs next to individual stocks with a positive or negative ticker indicating 
                    a change in value. This helped remove visual clutter and redundancy, as when you click on the listing you are directed to a page with the same graph.
                </div>
                <div className="DivisionText">
                    5) Another critique we received was that it seemed as if the only way to modify token quantity when purchasing was with the plus/minus buttons. Our lack of technical expertise in Figma prevented 
                    us from integrating a direct numerical input feature into our trading page. However, we did modify our design to make it clear that the full-functioning application would support direct edits.
                </div>
                <h3 className="DivisionTitle">Revised HiFi Prototype</h3>
                <div className="DivisionText">Based on the feedback, the designs that we came out with are as follows. Feel free to play around with it!</div>
                <iframe className="DivisionImage" width="100%" height="450" src="https://www.figma.com/embed?embed_host=share&amp;url=https%3A%2F%2Fwww.figma.com%2Fproto%2FiG2ELy22Z3ySggeFJ6pIHB%2FTrendex%3Fpage-id%3D0%253A1%26node-id%3D16%253A3%26viewport%3D-303%252C647%252C0.27%26scaling%3Dscale-down%26starting-point-node-id%3D23%253A21" allowfullscreen=""></iframe>
                <h2 className="DivisionTitle">3)User Testing</h2>
                <div className="DivisionText">Next, we wanted to subject our prototype to real world User Testing!</div>
                <div className="DivisionText">We prepared a few questions for our users as they went through our prototype:</div>
                <div className="DivisionText">
                    Task 1: Use the Discover (Search) page to look at different individuals and find out more info about them. Have a look at different celebrities and choose one that you would like to invest in.
                    Once you have selected an individual, purchase two tokens.
                </div>
                <div className="DivisionText">
                    Task 2: Without leaving this page, in your own words, describe what you think you can do on the Investments Page (icon on the left in the bottom menu)? Be specific.
                </div>
                <div className="DivisionText">
                    Task 3: In your own words, describe what the Discover (Search) page offers. Name at least 3 offerings.
                </div>
                <div className="DivisionText">
                    We've included the videos of our user interactions below.
                </div>
                <h3 className="DivisionTitle">User 1</h3>
                <iframe className="DivisionImage" src="https://drive.google.com/file/d/1A1Zw-xLj7JfIoLA_JJ_rZlhGf2T1UiaU/preview" width="100%" height="480" allow="autoplay"></iframe>
                <h3 className="DivisionTitle">User 2</h3>
                <iframe className="DivisionImage" src="https://drive.google.com/file/d/1tCZVMt4aoKUsHsdu8wsnSdPfuVtF63Ds/preview" width="100%" height="480" allow="autoplay"></iframe>
                <h3 className="DivisionTitle">User 3</h3>
                <iframe className="DivisionImage" src="https://drive.google.com/file/d/10168vB7LSpiMxhL6ykreXm-hR8paiKMf/preview" width="100%" height="480" allow="autoplay"></iframe>
                <h3 className="DivisionTitle">User Testing Feedback</h3>
                <div className="DivisionText">
                Overall, the UserTesting results showed that individuals had a relatively easy time performing the tasks we provided them with. There were slight differences in the ease 
                at which individuals completed tasks. Such disparities are a byproduct of how much experience the user has with investing vernacular, and our interfaces’ effectiveness in simplifying this process.
                </div>
                <div className="DivisionText">
                The first task we assigned was to look around the discover page and purchase two tokens. Users were able to quickly identify the discovery page and made ample use of the filters we had available. 
                A shared piece of feedback was that the purchase confirmation screen, which pops up once one purchases a token, does not fade away.
                </div>
                <div className="DivisionText">
                The second task was geared toward evaluating the learnability of our Investments page; we asked testers to describe what they thought they could do on this page. All three testers identified our 
                core features: tracking total portfolio, tracking individual tokens, and tracking a watch list. One tester expressed uncertainty about what the total portfolio value represented (profits, revenue, amount invested).
                </div>
                <div className="DivisionText">
                The last task we asked testers to analyze the Discover page. We received the most positive feedback on this page; testers felt as though the news integrated with search was in line with their user model.
                </div>
                <div className="DivisionText">
                From the feedback we received, there are a few interface changes we would want to make. First, we would like to include a hoverable question mark beside less intuitive words and concepts, such as the total 
                portfolio dollar amount. When expanded, this question mark would define confusing topics. Second, we would add an exit button on the confirmation page.
                </div>
            </div>
            <div className="Division">
                <h1 className="DivisionTitle">Conclusion</h1>
                <div className="DivisionText">
                We were able to gain lots of experience using Balsamiq and Figma through this project. Individually creating Lo-Fi mockups and discussing the pros and cons of each
                strengthened our design thinking skills and our ability to consider other perspectives. This was further strengthened by the critique session with our classmates, and the feedback from User Testing.
                </div>
            </div>
        </div>
    );
}

export default IterativeProjectPage;