import classes from './../MainScreen.module.css'
import ContentItem from "./ContentItem/ContentItem";

//Images Of Projects
import projectSoon from './../../Images/svg/projectSoon.svg'
import project1 from './../../Images/svg/project1.svg'
import project2 from './../../Images/svg/project2.svg'

const projects = [
    {
        name: 'Soon......',
        description: '? / React.js + TypeScript',
        number: '03',
        image: projectSoon,
        linkOnPages: '#',
        linkOnGit: '#',
        bgLinear: 'linear-gradient(192deg, rgb(98, 97, 231), rgb(102, 39, 196))',
    },
    {
        name: 'Memoji Game',
        description: 'Game / React.js + TypeScript',
        number: '02',
        image: project2,
        linkOnPages: 'https://sasunaru228.github.io/memojiGame/',
        linkOnGit: 'https://github.com/sasunaru228/memojiGame',
        bgLinear: 'linear-gradient(215deg, rgb(14, 177, 185), rgb(51, 36, 183))',
    },
    {
        name: 'Tic-Tac-Toe game with bot',
        description: 'Game / React.js',
        number: '01',
        image: project1,
        linkOnPages: 'https://sasunaru228.github.io/Tic-Tac-Toe/',
        linkOnGit: 'https://github.com/sasunaru228/Tic-Tac-Toe',
        bgLinear: 'linear-gradient(45deg, rgb(7, 149, 160), rgb(9, 206, 151))',
    },
]


export default function Content() {
    return (
        <div className={classes.main_content}>
            {projects.map(({name, description, number, image, linkOnPages, linkOnGit, bgLinear}) => {
                return (
                    <ContentItem
                        name = {name}
                        description = {description}
                        number = {number}
                        image = {image}
                        linkOnPages={linkOnPages}
                        linkOnGit = {linkOnGit}
                        bgLinear = {bgLinear}
                        key={number}
                    />
                )
            })}
            <div className={classes.main_content_footer}>
                <span>2024 © Orlov Dmitrii. Made with love.</span>
            </div>
        </div>
    )
}