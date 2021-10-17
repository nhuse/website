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
            <div>
            *This application is deployed with Heroku. Please be patient while it spins up on first load. <br/> <br/>
            **This application requires a login. Please use the provided credientials- <br/>
            <span style={{ textDecoration: "underline white" }}>Username:</span> guest<br/>
            <span style={{ textDecoration: "underline white" }}>Password:</span> password
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
            <div>
            *This application is deployed with Heroku. Please be patient while it spins up on first load. <br/><br/>
            **Application has optional login for full functionality. If you would like to login, please use the following credientials- <br/>
            <span style={{ textDecoration: "underline white" }}>Username:</span> guest<br/>
            <span style={{ textDecoration: "underline white" }}>Password:</span> password
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
            </p> <br/>
            <p style={{ textDecoration: "underline white", color: "white", cursor: "pointer" }} onClick={() => window.open('https://github.com/nhuse/potato-music-player')}>
            Code
            </p>
            <div>
            *Installation instructions provided in the Git Read Me <br/>
            **Application requires a spotify account
            </div>
            </>
        )
    }
}