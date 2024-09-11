import classes from './../MainScreen.module.css'
import {ReactComponent as Git} from '../../Images/svg/git.svg'
import {ReactComponent as Linked} from '../../Images/svg/link.svg'
import {ReactComponent as Telega} from '../../Images/svg/telega.svg'
import {ReactComponent as Inst} from '../../Images/svg/inst.svg'
export default function AsideComponent() {
    return (
        <div className={classes.main_aside}>
            <div className={classes.main_aside_texted}>
                <div className={classes.main_aside_texted_words}>
                    <span>THINKER.</span>
                    <span>DREAMER.</span>
                    <span>DEVELOPER.</span>
                </div>
                <div className={classes.main_aside_texted_description}>
                    <p>
                        Hi. I’m Dmitrii Orlov, frontend coder based in Saint Petersburg, Russia. Check out my works and social accounts.
                    </p>
                </div>
                <div className={classes.main_aside_texted_socials}>
                    <a href="index.html">
                        <Telega/>
                    </a>
                    <a href="index.html">
                        <Git/>

                    </a>
                    <a href="index.html">
                        <Inst/>
                    </a>
                    <a href="index.html">
                        <Linked/>
                    </a>
                </div>
                <button className={classes.main_aside_texted_textMe}>
                    Text me in Telegram
                </button>

            </div>

        </div>
    )
}