import { v4 as uuidv4 } from 'uuid'
import GetWeather from "../img/screenshots/GetWeather.png"
import MovieWeb from "../img/screenshots/MovieWeb.png"
import PhoneDatabase from "../img/screenshots/PhoneDatabase.png"
import EVsList from "../img/screenshots/EVsList.png"
import UpCare from "../img/screenshots/UpCare.png"
import UpCareDetail from "../img/details/UpCare_detail.png"
import BalancedBrain from "../img/screenshots/BalancedBrain.png"


export const ProjectData = [
    {
        id: uuidv4(),
        title: "Balanced Brain",
        description: "An innovative application that serves as a memory aid and motivational tool to help patients with mental health issues to develop healthy lifestyle changes.",
        techs: ["Adobe XD"],
        image: BalancedBrain,
        category:  ["all", "design"],
        view: "balancedBrain"
    },
    {
        id: uuidv4(),
        title: "PhoneDatabase",
        description: "A react native app to allow the users to search any phone they want using Phone Specifications API",
        techs: ["React Native", "React Navigation", "Expo"],
        github: "https://github.com/kim00432/PhoneDatabase",
        image: PhoneDatabase,
        category:  ["all", "development"]
    },
    {
        id: uuidv4(),
        title: "UpCare",
        description: "A solution for in-home care services",
        techs: ["Figma"],
        demo: "https://www.figma.com/proto/h7GFUhed34Wk9rzkvbo16L/Final-prototype?node-id=1%3A20&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A20",
        image: UpCare,
        category:  ["all", "design"],
        view: "upCare",
    },
    {
        id: uuidv4(),
        title: "EV's List",
        description: "A react app using React plus Next.js to display a list of Electric vehicles",
        techs: ["React", "Next.js"],
        github: "https://github.com/kim00432/Evs-list",
        image: EVsList,
        category:  ["all", "development"]
    },
    {
        id: uuidv4(),
        title: "GetWeather",
        description: "A weather HTML5 application based on a mobile first, responsive design using two third-party API services (OpenWeather and LocationIQ) to allow the user to look up weather forecasts for various locations.",
        techs: ["HTML", "CSS", "Javascript"],
        // demo: "https://get-weatherapp.netlify.app",
        github: "https://github.com/kim00432/GetWeather",
        image: GetWeather,
        category: ["all", "development"]
    },
    {
        id: uuidv4(),
        title: "Movie App",
        description: "A simple Single Page Application using The MovieDB API. Users can search for the actor's name and then obtain the actors with the name as the result. Also, clicking on one of the actors displays the movie of the actor users clicked on.",
        techs: ["HTML", "CSS", "Javascript"],
        demo: "https://yoona-simplespa.netlify.app/",
        image: MovieWeb,
        category:  ["all", "development"]
    },
]