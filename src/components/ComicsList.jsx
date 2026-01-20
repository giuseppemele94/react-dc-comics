import comics from "../../comics"

const ComicsList = () => {

  
return (
  <div className="container card-container">
    {comics.map((fumetto) => ( 
    <div className="prod-card" key={fumetto.id}>
      <img src={fumetto.thumb} alt={fumetto.title} />
      <h4>{fumetto.title}</h4>
    </div>
  ))}
  </div>

)
}
export default ComicsList
