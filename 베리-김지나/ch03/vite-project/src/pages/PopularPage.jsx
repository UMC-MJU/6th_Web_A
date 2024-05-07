import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Movies from "../components/Movies";

const PopularPage = () => {
  const [movieData, setMovieData] = useState([]);

  //   useEffect(() => {
  //     //컴포넌트 렌더링 후 특정 코드 실행
  //     const options = {
  //       // options 객체 통해 api요청 필요한 메소드, url, 헤더 설정
  //       method: "GET",
  //       url: `https://api.themoviedb.org/3/movie/popular?api_key=${
  //         import.meta.env.VITE_API_KEY
  //       }`,
  //       //   headers: {
  //       //     accept: "application/json",
  //       //     Authorization: "Bearer " + import.meta.env.VITE_APP_KEY,
  //       //   },
  //     };
  //     axios
  //       .request(options)
  //       .then(function (response) {
  //         console.log(response.data);
  //         setMovieData(response.data.results);
  //       })
  //       .catch(function (error) {
  //         console.error(error);
  //       });
  //   }, []); // 빈 배열을 두번째 인자로 전달 -> mount 될 때 딱 한번만 effect 실행되도록

  useEffect(() => {
    const fetchMovieData = async () => {
      const data = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${
          import.meta.env.VITE_API_KEY
        }`
      );
      setMovieData(data.data);
    };
    fetchMovieData();
  }, []);

  return (
    <MovieContainer>
      {movieData.results?.map((data, index) => (
        <Movies data={data} key={index} />
      ))}
    </MovieContainer>
  );
};

export default PopularPage;

const MovieContainer = styled.div`
  display: flex;
  background-color: rgb(33, 35, 72);
  padding: 0 5px;
  width: 100%;
  height: auto;
  flex-wrap: wrap;
`;
