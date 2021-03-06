import React from "react"
import classes from "./Login.module.css"
import {Link} from "react-router-dom"
import logo from "../../assets/sGonksLogo.png"

const Login = (props) => {
    return (
        <div>
            <div className={classes.Header}>
                <img src={logo} alt="sGonks Logo" className={classes.Logo}></img>
                <div className={classes.Buttons}>
                    <Link className={`${classes.Login} ${classes.Button}`} to="/sgonks-platform">Login</Link>
                    <Link className={`${classes.Help} ${classes.Button}`} to="/explanation">See how it works</Link>
                </div>
            </div>

            <div className={classes.Body}>
                <div className={classes.Column}>
                    <h1>Who's the next trendsetter?</h1>
                    <p>Bacon ipsum dolor amet ground round chislic bresaola, andouille pig buffalo swine t-bone strip steak. 
                        Kevin shoulder frankfurter, venison short loin t-bone shank chislic chuck beef ribs pork buffalo. 
                        Rump hamburger jowl cow. Tail ribeye burgdoggen tongue. Chislic pork belly doner rump frankfurter. 
                        Jowl meatloaf ribeye beef pork, shoulder bresaola filet mignon.</p>
                    <div className={classes.Buttons}>
                        <Link className={`${classes.Login} ${classes.Button}`} to="/sgonks-platform">Login</Link>
                        <Link className={`${classes.Help} ${classes.Button}`} to="/explanation">See how it works</Link>
                    </div>
                </div>
                <div className={classes.Column}>
                    <p>Something visual will go here.</p>
                </div>
            </div>
        </div>
    )
}

export default Login