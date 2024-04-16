import { useState } from "react";
import styles from "./styles.module.css";

const MovieItem = ({ item, sequence }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const convertImageSrc = (imageSrc) => {
    return `https://image.tmdb.org/t/p/original/${imageSrc}`;
  };

  return (
    <>
      <div
        style={{
          width: "300px",
          height: "450px",
          display: "inline-block",
          borderWidth: isHovering ? "4px" : "0px",
          transitionDuration: "0.3s",
          boxShadow: isHovering ? "inset 0 0 0 10px gray" : "none",
        }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <img
          alt={item.title}
          src={convertImageSrc(item.poster_path)}
          style={{
            width: "300px",
            height: "450px",
            opacity: isHovering && "0.2",
            objectFit: "cover",
          }}
          loading="lazy"
          decoding="async"
          fetchPriority={sequence < 10 ? "high" : "low"}
        />
        {isHovering && (
          <div
            className={styles.posterDescription}
            style={{
              color: "white",
              fontSize: "20px",
              transition: "opacity 0.3s",
            }}
          >
            <p>{item.title}</p>
            <p>평점: {item.vote_average}/10</p>
            <article style={{ marginTop: "180px" }}>{item.overview}</article>
          </div>
        )}
      </div>
    </>
  );
};

export default MovieItem;
