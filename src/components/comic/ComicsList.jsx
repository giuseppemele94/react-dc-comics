import comics from "../../../comics"
import ComicCard from "./ComicCard"

const ComicsList = () => {


  //funzione che genera le card dei fumetti
  //per ogni fumetto restituisce un componente ComicCard 
  const renderFumettiCard = () => {

    return comics.map((comic) => (

      //componente figlio per ogni fumetto 
      <ComicCard key={comic.id}  //key obbligatoria ,identifica in modo univoco gni elemento
        comic={comic} /> //passo l'intero oggetto comic come prop
    ))
  }

  return (

    <div className="container card-container">
      {renderFumettiCard()}
    </div>
  )
}
export default ComicsList
