import MainSectionBar from "./MainSectionBar";
import ComicsList from "./comic/ComicsList";

const MainContent = () => {
  return (
    <main>
      <section className="contents"></section>

      {/* SEZIONE FUMETTI */}
      <section>
        <ComicsList />

        <div className="loadmore-wrap">
          <button className="loadmore-btn">LOAD MORE</button>
        </div>
      </section>

      <MainSectionBar />
    </main>
  );
};

export default MainContent;
