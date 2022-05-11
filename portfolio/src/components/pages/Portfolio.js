import Project from '../Project';

function Portfolio() {
    const projectValues = [
        {
            title: "Password Generator",
            github: " https://jonathan6.github.io/PasswordGenerator/",
            description: "Generate the safest password free programs can provide! Guarentee to give you a password that will keep your accounts away from prying eyes!",
            deploy: "https://jonathan6.github.io/PasswordGenerator/",
        },
        {
            title: "Code Quiz",
            github: "https://github.com/Jonathan6/Code-Quiz",
            description: "A JavaScript quiz that will surely test even the most knowledgable of developers! Give it a try and brag about your score to your friends!",
            deploy: "https://jonathan6.github.io/Code-Quiz/",
        },
        {
            title: "Weather Dashboard",
            github: "https://github.com/Jonathan6/Weather-Dashboard",
            description: "What's the weather outside looking like? Why not check my WEATHER DASHBOARD!!! Looking outside is way too much work, plus weather dashboard sees into the future!",
            deploy: "https://jonathan6.github.io/Weather-Dashboard/",
        },
        {
            title: "Note Taker",
            github: "https://github.com/Jonathan6/Note-Taker",
            description: "Ever make a note on a sticky note and then lose it? Well try Note Taker! Now you can make a note and forget the url!",
            deploy: "https://note-taker-127.herokuapp.com/notes",
        },
        {
            title: "Email Regex Tutorial",
            github: "https://gist.github.com/Jonathan6/028f0e41a3cb60e4ad1b3b5b8559dec7",
            description: "A quick tutorial for those new to Regex. Find out how you can validate user inputs to find emails!",
            deploy: "https://gist.github.com/Jonathan6/028f0e41a3cb60e4ad1b3b5b8559dec7",
        },
        {
            title: "Pokemon Team Creator",
            github: "https://github.com/cavazosdotcom/i-choose-you",
            description: "Create the perfect team for you Gen 1 adventure! Fun for all ages!",
            deploy: "https://i-choose-you-inator.herokuapp.com/",
        },
    ];



    return (
        <section>
            <ul> Notable Projects
                {projectValues.map((project, i) => (
                    <li key={1}>
                        <Project {...project}/>
                    </li>))};
            </ul>
        </section>
    );
}

export default Portfolio;