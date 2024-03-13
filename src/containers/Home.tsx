import Tooling from "../components/Tooling";

const Home: React.FC = () => {
    return (
        <><h1>Hi There! I'm Nicholas</h1>
        <h1>Software Developer</h1>
        <p>Hi and Welcome to my portfolio! I'm an passionate full stack developer with dedication of creating clean code and experience problem solving skills.
            I have experience in web development and I am always looking to learn and grow as a developer. Feel free to explore my projects and get in touch with me. 
        </p>
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