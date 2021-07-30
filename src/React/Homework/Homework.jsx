import React from 'react';

import { useMediaQuery } from 'common/mediaQueries/useMediaQuery.js';

import Essay from './Essay.jsx';
import SunAndMoon from '../SunAndMoon/SunAndMoon.jsx';

const Homework = () => {

    const { media } = useMediaQuery();

    console.log('media', media);

    return (
        <div>
            
            { media.lg && <SunAndMoon /> }

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
                <h3>Web Designer, Front-End Developer, and Back-End Developer</h3>
                <p>
                Web designers, front-end developers, and back-end developers all play varying roles when dealing with their coding developments. Furthermore, each position focuses on different tasks when it comes to web development.  In this essay, I will be discussing the main differences between the three job titles and how they come into play.
                </p>
                <p>
                A web designer's primary role is creating a user interface that is both aesthetically pleasing and user-friendly.  This position focuses on building web pages that consider the brand's aesthetic and its overall userbase.  For instance, if a financial calculator company were selling its product to a financial institution, the web designer would want to outfit the calculators to match the aesthetic of the financial institution's website. In addition, they would focus on the overall aesthetic through fonts, colors, layouts, and images.  Web designers also need to consider who the audience is when developing their pages.  For instance, if you had an older clientele, you would want to have a website that has an easy-to-read font, fewer images, and more text.
                </p>
                <p>
                Front-end web developers will produce HTML, CSS, and JS for a web page or application to interact directly with the client.  This position completely differs from a web designer.  While web designers focus on the aesthetic and functionality of the site or application, a front-end developer will create the graphical interface through code. In addition, front-end developers will allow people to utilize these interfaces through web browsers, headless browsers, webviews, and native from web tech.  For example, React can create native applications without using web engines and be considered newer web technology.  Front-end developers are essential because they implement the strategy from the web designers to bring the project to life.
                </p>
                <p>
                Back-end developers focus on building and maintaining the technology needed to power the client-side websites produced by web designers and front-end developers.  Back-end components refer to components like the server, application, database, API, security, PHP, python, and data and application integration, which powers the website. In addition, these developers will focus on creating a stable connection between the user and the website or web application.
                </p>
                <p>
                Web designers, front-end developers, and back-end developers all play fundamental roles in website and application development.  Each position must collaborate to maintain the existence and branding of their project.  Web designers will create the overall look of the application or website through font, color, imagery, and layouts.  Front-end developers will implement this vision through HTML, CSS, and JS to create client-side interaction.  Finally, back-end developers will maintain these applications or websites through creating and maintaining servers, databases, APIs, and data and application integration.
                </p>
            </Essay>
            <Essay
                number={ 5 }
                question='Distinguish the difference between Site Relative, Document Relative, and Absolute Paths.'
            >
                <h3>Site Relative, Document Relative, and Absolute Paths</h3>
                <p>
                Link paths are fundamental when creating a website.  There are three types of link paths: site-relative paths, document-relative paths, and absolute paths.  In this essay, I will be discussing the differences between the types of link paths and how they are helpful.
                </p>
                <p>
                Site root-relative paths describe a path from a site's root folder to a specific document.  The forward-leaning slash ( / ) will signify the root folder of the website.  For example, "/staff/profile.html" would link the path to "profile.html" from within the staff subfolder of the site's root folder.  This path type is typically helpful for larger websites that utilize multiple servers or a single server that hosts multiple websites.  In addition, it is useful when moving HTML files from folder to folder within the website.  Once that is complete, there needs to be an update to the pathway links for each folder.   Essentially, site root-relative paths are only helpful for more significant sites or servers when compared to document-relative paths.    
                </p>
                <p>
                Document-relative paths are more beneficial when the documents and folders consistently remain together.  This path type utilizes folder hierarchy to signify linking documents to others.  In addition, it allows the developer to connect documents across folders as well.  Document-relative paths also use the forward-leaning slash, but instead, it moves one level down in the folder hierarchy.  To move up a level within the folder hierarchy, the developer would utilize two dots and a forward-leaning slash ( ../ ).  For example, if I wanted to link an HTML file within a folder to a website, I would use "/staff/profile.html."  If I wanted to link that to my contacts element, I would then use "../contacts/contacts.html".  This method is helpful because it essentially omits a part of the absolute path.  Furthermore, it is beneficial to use when moving files as a group within an entire folder because the folder will retain the same relative paths to each other.
                </p>
                <p>
                Absolute paths are essentially the complete URL for a linked document, which also includes the protocol.  For example, "http://www.soiled.la/shop/catalogue/catalogue.html" would be a direct link to the "catalogue.html" file.  An absolute path has all the necessary details for locating a file or folder, which typically begins with the root element and ends in a subfolder.  The best practice for absolute paths would be linking a document or asset from another server or inserting images from a remote server.  For example, if I wanted to open a new link to another website, I would like to use an absolute path. On the other hand, if I wanted to link to an image or file on my current website, I would use document-relative paths.
                </p>
                <p>
                Each path type has its benefits when it comes to linking documents or assets onto a webpage. For example, site root-relative paths are essential for more significant sites or servers that intend on moving HTML files from folder to folder.  Meanwhile, document-relative pathways are helpful for most websites that are linking from web page to web page.  They typically benefit when moving files as a group within a folder to retain the same paths for them.  Lastly, absolute paths are essential when linking to assets that are off the website or on a remote server.
                </p>
            </Essay>
            <Essay
                number={ 6 }
                question='What is the difference between jpg, gif, png and SVG images?'
            >
                <h3>jpg, gif, png and SVG images</h3>

            </Essay>
        </div>
    );
}

    export default Homework;
