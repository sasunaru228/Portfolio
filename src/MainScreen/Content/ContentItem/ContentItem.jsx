import classes from './../../MainScreen.module.css'
import {ReactComponent as GitLogo} from '../../../Images/svg/git.svg'

export default function ContentItem({name, description, number, image, linkOnPages, linkOnGit, bgLinear}) {
    return (
        <div
            className={classes.main_content_item}
            style={{background: bgLinear}}
        >
            <span className={classes.main_content_item_number}>{number}</span>
            <a href={linkOnPages} className={classes.main_content_item_link} target='_blank' rel='noreferrer'>
                <img src={image} alt="project"/>
            </a>
            <div className={classes.main_content_item_description}>
                <div className={classes.main_content_item_description_text}>
                    <span>{description}</span>
                    <span>{name}</span>
                </div>
                <a href={linkOnGit} className={classes.main_content_item_description_git}>
                    <GitLogo/>
                    <span>GitHub</span>
                </a>
            </div>
        </div>
    )
}