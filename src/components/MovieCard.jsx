function MovieCard({ title, year, rating,popular,avalaible }) {
  return (
    <article className="movie-card" >
      <h2>{title}</h2>
      <p>שנת יציאה: {year}</p>
      <p>דירוג: {rating}</p>
      {popular &&<p>בחירת הצוות</p>}
      {avalaible &&<p>זמין לצפייה</p>}

    </article>
  );
}

export default MovieCard;