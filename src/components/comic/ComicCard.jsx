//componente che rappreesnta una singola card fumetto 

const ComicCard = (props) => {

    //destructuring dell'oggetto comic passato attraverso props
    //in questo modo posso usare direttamente title e thumb
    const { title, thumb } = props.comic;

    return (

        <div className="prod-card" >
            <img src={thumb} alt={title} />
            <h4>{title}</h4>
        </div>

    )
}

export default ComicCard