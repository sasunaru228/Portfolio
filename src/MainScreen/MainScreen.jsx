import classes from './MainScreen.module.css'
import AsideComponent from "./AsideComponent/AsideComponent";
import Content from "./Content/Content";

export default function MainScreen() {
    return (
        <div className = {classes.main}>
            <AsideComponent/>
            <Content/>
        </div>
    )
}