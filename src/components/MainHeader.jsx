const MainHeader = () => {
    return(
         <header className="header">
            <figure className="logo">
                <img src="/dc-logo.png" alt="Logo" />
            </figure>
            <nav>
                <ul className="nav-list">
                    <li><a href="#">CHARACTERS</a></li>
                    <li><a href="#" className="active">COMICS</a></li>
                    <li><a href="#">MOVIES</a></li>
                    <li><a href="#">TV</a></li>
                    <li><a href="#">GAMES</a></li>
                    <li><a href="#">COLLECTIBLES</a></li>
                    <li><a href="#">VIDEOS</a></li>
                    <li><a href="#">FANS</a></li>
                    <li><a href="#">NEWS</a></li>
                    <li><a href="#">SHOP</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader