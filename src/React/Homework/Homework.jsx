import React from 'react';

import Essay from './Essay.jsx';

const Homework = () => {
    return (
        <div>
            <h2>Homework</h2>
            <Essay
                number={ 1 }
                question='What is the difference between Git, Github and Heroku?'
            >
                <h3>Git, GitHub, and Heroku</h3>
                <p>
                Programmers utilize Git, GitHub, and Heroku to deal with their coding developments.   Each site has different features, making them more appealing to a developer based on their project.  In this essay, I will be discussing the main differences between the three platforms and how they are applicable.
                </p>
                <p>
                Git was developed in 2005 and is a version control system that is easy to use and free.  Git is installed locally on your system compared to a cloud server, which is what GitHub and Heroku use.  However, GitHub is a repository hosting site for Git that is cloud-based.  Heroku uses Git for version control which allows developers to deploy, manage, and scale modern apps.  Git also utilizes a branching model, which will enable you to create independent local branches in your code development.  The branching model allows users to try new things more quickly due to switching between earlier and later versions. In addition, GitHub will enable you to share the code developed with Git with other individuals who can also make revisions and edits on your branches. Git is essentially the base software that allows GitHub and Heroku to function more efficiently.
                </p>
                <p>
                GitHub is a service offered for those that use Git to create their projects.  It exists on the web instead of a local server and allows multiple people to work on the code while still tracking the various versions created.  One of the critical differences between GitHub and Heroku is that GitHub requires purchasing a separate server to host your web applications. At the same time, Heroku has a server, which means that creating and deploying your apps comes more easily. In addition, by having a server, developers are given the freedom to work on their main project without the distress of maintaining servers, hardware, or infrastructure.
                </p>
                <p>
                Heroku is a cloud-based platform with a server for developers to use when creating and deploying their projects. In addition, Heroku integrates Git for its version control efficiency, which is helpful for team-based projects.  Git's version control allows users to track any updates made and who made that change.  At the same time, GitHub does require the user to purchase a server to host their application.  This difference between the two hosting sites makes Heroku more appealing due to not worrying about acquiring a server.
                </p>
                <p>
                Overall, these three items do have some vertical integration between each other. For example, Git allows version control on Heroku and easily enables users to share their code on GitHub.  Utilizing all three products will allow developers to work more efficiently as a team while sharing their work with other developers.
                </p>
            </Essay>
            <Essay
                number={ 2 }
                question='Explain the difference between HTML, CSS and JS.'
            >
                <h3>HTML, CSS, and JavaScript</h3>
                <p>
                Programmers utilize HTML, CCS, and JavaScript to deal with their coding developments.   Each programming language has different purposes, making them necessary for a developer based on their project.  In this essay, I will be discussing the main differences between the three programming languages and how they are applicable.
                </p>
                <p>
                HTML, or HyperText Markup Language, essentially provides the basic structure for websites.  HTML will control the overall formatting of the website, which includes document structure, embedding objects like images and interactive forms, and formatting text elements through tags.  In addition, HTML utilizes the tagging system to insert text, links, images, or any other information on the web page.  For example, if I were to showcase this essay on my web application, I would use HTML to format paragraphs and headings to make the content more readable.  HTML uses both CSS and JavaScript to enhance the style and behavior of web pages.
                </p>
                <p>
                CSS, or Cascading Style Sheet, will stylize the website once establishing the foundation with HTML.  CSS modifies the design and display of existing HTML elements, which then are represented correctly on each web page.  CSS will allow you to design the colors, fonts, and layouts for your site.  In addition, CSS can help adapt your website to display correctly across various devices regardless of screen size.  To insert CSS, the programmer would use a selector followed by braces to form a declaration block.  The declaration block uses braces that surround a property element and a value element.  The properties deal with different styles and formats, while the values are specific to the property listed.  For example, if I wanted to modify my font size and color, I would use CSS to select which element and alter it through declaration blocks.
                </p>
                <p>
                JS, or JavaScript, is a scripting language that adds interactive elements to HTML web pages that engage the user.  JS is embedded directly into HTML web pages and can update and change both HTML and CSS.  JS syntax involves two types of values, which are either fixed values or variable values.  Fixed values, or literals, are constant values that attach to specific variables.  Variable values, or variables, holds the data value, which varies over time.  In addition, JS also uses operators to compute and assign values, expressions which is a combination of values, variables, and operators to calculate a value, keywords to identify actions. Comments are not executed and are there for recordkeeping.  JS is the most functional programming language to use when making a web page interactive for its user. 
                </p>
                <p>
                HTML, CSS, and JS all work together to create an engaging web page for browsers.  Each language has its purpose for the functionality of a website.  HTML provides structure, CSS provides stylization, and JS creates interactive content.
                </p>
            </Essay>
            <Essay
                number={ 3 }
                question='What are Single Page Apps (SPAs)? How do they differ from traditional multi-page Web Sites?'
            >
                <h3>SPAs and Multi-Page Web Sites</h3>
                <p>
                Maintaining websites and applications can be held in two main formats, single-page application (SPAs) or multi-page.   Each design has different purposes, making them necessary for a developer based on their project.  In this essay, I will be discussing the main differences between both design formats and how they are applicable.
                </p>
                <p>
                A single-page application, or SPA, is a web application or website that interacts with the user dynamically.  Apps like Facebook, Google Maps, and Twitter are all examples of SPAs.  This type of design will not require the page to reload while using it within the browser. Instead, the necessary coding is either pulled by the browser with a single-page load or dynamically loaded when needed based on the user's input. As a result, SPAs are easier to navigate, update, and use when compared with the multi-page format.  The multi-page form will require multiple pages with static information that links to other pages that share similar content.  A browser will reload the content when going from page to page to navigate through a multi-page website.  Due to a large amount of information across multiple pages, SEO has significantly benefited from utilizing keywords.  In comparison, SPAs do not benefit significantly from SEO due to the lack of information and keywords.
                </p>
                <p>
                Both single-page applications and multi-page websites have their benefits when building a website or application.  Each design has its purpose for the functionality of a website.  SPAs can create a more seamless user experience through minimal interfaces and loading quickly.  Multi-page websites have an easier time when it comes to SEO and still benefits from navigation and user experience.
                </p>
            </Essay>
            <Essay
                number={ 4 }
                question='What is the difference between Web Designer, Front End Developer and Back End Developer?'
            >
                <h3>Web Designer, Front End Developer, and Back End Developer</h3>
            
            </Essay>
        </div>
    );
}

    export default Homework;
