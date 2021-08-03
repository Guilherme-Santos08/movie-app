const CardMovie = ({ countrie, date, name, votes, type, poster_path }) => {
  const ImgMovie = "https://image.tmdb.org/t/p/w500/";
  return (
    <div className="card">
      <div className="card__info">
        <div className="card__img">
          <img src={ImgMovie + poster_path} alt={name} />
          {/* <div>Movie</div> */}
        </div>
        <div className="movie show">
          <h3 className="movie__name">{name}</h3>
          <div className="countrie_end_date">
            <span className="movie__countrie">{countrie} </span>
            <span className="movie__date">
              {new Date(date).toLocaleDateString("pt-BR", { timeZone: "UTC" })}
            </span>
          </div>

          <span className="movie__votes">{votes}/10</span>
        </div>
      </div>
    </div>
  );
};

export default CardMovie;
