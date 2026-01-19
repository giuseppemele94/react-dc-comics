import Navbar from "./Navbar"

const MainHeader = () => {
    return(
         <header className="header">
            <figure className="logo">
                <img src="/dc-logo.png" alt="Logo" />
            </figure>
           <Navbar/>
        </header>
    )
}

export default MainHeader