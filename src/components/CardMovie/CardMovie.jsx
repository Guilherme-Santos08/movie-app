import { useState } from "react";

const CardMovie = ({
  date,
  name,
  votes,
  poster_path,
}) => {
  const ImgMovie = "https://image.tmdb.org/t/p/w500/";

  const [isOpen, setIsOpen] = useState(false);
  // console.log(isOpen);
  const toogle = () => setIsOpen(!isOpen);

  return (
    <div className="card" onClick={toogle}>
      <div className="card__info">
        <div className="card__img">
          <img src={ImgMovie + poster_path} alt={name} />
        </div>

        <div className="movie">
          <h3 className="movie__name">{name}</h3>
          <div className="countrie_end_date">
            <span className="movie__votes">{votes}/10</span>
            <span className="movie__date">
              {new Date(date).toLocaleDateString("pt-BR", { timeZone: "UTC" })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardMovie;
