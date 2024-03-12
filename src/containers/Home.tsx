import Tooling from "../components/Tooling";

const Home: React.FC = () => {
    return (
        <><h1>Hi There! I'm Nicholas</h1>
        <h1>An full stack Developer</h1>
        <p>An Full Stack Developer. Passionte and always learning dev</p>
        {/* <img src="src/pictures/NicholasHubacek.png" alt="Nicholas"></img> */}
        <a href="https://docs.google.com/document/d/1XWwixWkrz3NSW3eM3BB0Gr3tBJ7y6CceQ22B1EQJaqo/edit?usp=sharing">
            <button>Resume</button></a>
        

        <div className="Projects">
            
            <Tooling />
            </div>
            <div className="">
                </div></>
    )

}

    export default Home;