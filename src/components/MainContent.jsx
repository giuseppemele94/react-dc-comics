import MainSectionBar from "./MainSectionBar"
import ComicsList from "./ComicsList"


const MainContent = () => {
    return (
        <main>
            <section className="contents">
            </section>
            <ComicsList />
            <MainSectionBar />
        </main>
    )
}

export default MainContent