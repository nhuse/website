export default function ProjectInfo({ project }) {
    if(project === 1) {
        return (
            <>
            <h1 className="project-h1">The Huse Royale</h1>
            <p>
            The Huse Royale is a web application that allows the player to play a selection of Casino Games. <br/> <br/>
            The user will have 5,000 chips upon successful registration. <br/> <br/>
            The user will be able to use these chips to play the casino games included.
            </p>
            <p style={{ textDecoration: "underline white", color: "white", cursor: "pointer" }} onClick={() => window.open('https://github.com/nhuse/huse-royale')}>
            Code
            </p>
            <p style={{ textDecoration: "underline white", color: "white", cursor: "pointer" }} onClick={() => window.open('http://huse-royale.herokuapp.com/')}>
            Deployed Version
            </p>
            <div className="footer">
            *This application is deployed with Heroku. Please be patient while it spins up on first load. <br/> <br/>
            **This application requires a login. Please use the provided credentials- <br/>
            <span style={{ textDecoration: "underline white" }}>Username:</span> <span style={{fontFamily: "sans-serif"}}>guest</span><br/>
            <span style={{ textDecoration: "underline white" }}>Password:</span> <span style={{fontFamily: "sans-serif"}}>password</span>
            </div>
            </>
        )
    } else if(project === 2) {
        return (
            <>
            <h1 className="project-h1">ZEN Arcade</h1>
            <p>
            Zen Arcade is a web application that allows the player to play a selection of classic arcade games. <br/> <br/>
            The user will be able to compete for the top score against some of the best gamers across the country!
            </p>
            <p style={{ textDecoration: "underline white", color: "white", cursor: "pointer" }} onClick={() => window.open('https://github.com/nhuse/zen-arcade')}>
            Code
            </p>
            <p style={{ textDecoration: "underline white", color: "white", cursor: "pointer" }} onClick={() => window.open('http://zen-arcade.herokuapp.com/')}>
            Deployed Version
            </p>
            <div className="footer">
            *This application is deployed with Heroku. Please be patient while it spins up on first load. <br/><br/>
            **Application has optional login for full functionality. If you would like to login, please use the following credentials- <br/>
            <span style={{ textDecoration: "underline white" }}>Email:</span> <span style={{fontFamily: "sans-serif"}}>guest@email.com</span><br/>
            <span style={{ textDecoration: "underline white" }}>Password:</span> <span style={{fontFamily: "sans-serif"}}>password</span>
            </div>
            </>
        )
    } else if(project === 3) {
        return (
            <>
            <h1 className="project-h1">Spotify Clone</h1>
            <p>
            A clone of Spotify using the Spotify Web API created as our final project for Phase 2 of FlatIron School to test our knowledge on React. <br/><br/>
            Upon first load of the web application, you will be asked to authenticate your Spotify account by logging in.
            </p>
            <p style={{ textDecoration: "underline white", color: "white", cursor: "pointer" }} onClick={() => window.open('https://github.com/nhuse/potato-music-player')}>
            Code
            </p>
            <p style={{ textDecoration: "underline white", color: "white", cursor: "pointer" }} onClick={() => window.open('https://potato-music-player.vercel.app')}>
            Deployed Version*
            </p>
            <div className="footer">
            *Application requires a spotify account. Please use the following credentials for deployed version- <br/>
            <span style={{ textDecoration: "underline white" }}>Email:</span> <span style={{fontFamily: "sans-serif"}}>nate.huse1023@gmail.com</span><br/>
            <span style={{ textDecoration: "underline white" }}>Password:</span> <span style={{fontFamily: "sans-serif"}}>Password123</span><br/><br/>
            **Installation instructions provided in the Git Read Me <br/>
            </div>
            </>
        )
    }
}