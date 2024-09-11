import classes from './../MainScreen.module.css'
import ContentItem from "./ContentItem/ContentItem";
import project1 from '../../Images/svg/project1.svg'

const projects = [
    {
        name: 'Tic-Tac-Toe game with bot',
        description: 'Game / React.js',
        number: '01',
        image: project1,
        linkOnGit: 'https://sasunaru228.github.io/Tic-Tac-Toe/',
        bgLinear: 'linear-gradient(45deg, rgb(7, 149, 160), rgb(9, 206, 151))',
    },
    {
        name: 'Second project',
        description: '? / React.js',
        number: '02',
        image: project1,
        linkOnGit: '',
        bgLinear: 'linear-gradient(215deg, rgb(14, 177, 185), rgb(51, 36, 183))',
    },
]

// 'linear-gradient(192deg, rgb(98, 97, 231), rgb(102, 39, 196))'

export default function Content() {
    return (
        <div className={classes.main_content}>
            {projects.map(({name, description, number, image, linkOnGit, bgLinear}) => {
                return (
                    <ContentItem
                        name = {name}
                        description = {description}
                        number = {number}
                        image = {image}
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