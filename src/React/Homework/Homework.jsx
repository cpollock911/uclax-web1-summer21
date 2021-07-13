import React from 'react';

import Essay from './Essay.jsx';

const Homework = () => {
    return (
        <div>
            Homework
            <Essay
                number={ 1 }
                question='What is the difference between Git, Github and Heroku?'
            >
                <h2>Git, GitHub, and Heroku</h2>
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
                My long winded Answer 2
            </Essay>
        </div>
    );
    }

    export default Homework;
