import { useContext, useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import axios from "axios";
import SearchMovies from "../components/SearchMovies";
import { debounce } from "lodash";
import { AuthContext } from "../App";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: rgb(38, 49, 90);
    height: 100%;
  }
  #root {
    height: 100%;
  }
`;

const MainPage = () => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const { auth } = useContext(AuthContext);
  const [searchWord, setSearchWord] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [userName, setUserName] = useState("");
  const [loadingUser, setLoadingUser] = useState(true);

  const handleChange = (e) => {
    setSearchWord(e.target.value);
  };

  const debouncedFetchMovies = debounce(async (query) => {
    if (!query) return;
    setIsLoading(true);
    try {
      const data = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&include_adult=false`
      );
      setMovies(data.data);
    } catch (error) {
      console.error("영화 정보를 가져오는 중 오류가 발생했습니다.", error);
    } finally {
      setIsLoading(false);
    }
  }, 500);

  useEffect(() => {
    debouncedFetchMovies(searchWord);
    return () => {
      debouncedFetchMovies.cancel();
    };
  }, [searchWord]);

  useEffect(() => {
    const fetchUserName = async () => {
      if (auth.token) {
        try {
          const response = await axios.get("http://localhost:8080/auth/me", {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
          });
          setUserName(response.data.name);
        } catch (error) {
          console.error("유저 정보를 가져오는 중 오류가 발생했습니다.", error);
        } finally {
          setLoadingUser(false);
        }
      } else {
        setLoadingUser(false);
      }
    };
    fetchUserName();
  }, [auth.token]);

  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <TextContainer>
          <WelcomeText>
            {loadingUser
              ? "로딩 중…"
              : userName
              ? `${userName}님, 환영합니다`
              : "환영합니다"}
          </WelcomeText>
        </TextContainer>

        <SearchContainer>
          <SearchText>📽 Find your movies️ !</SearchText>
          <Search>
            <SearchInput
              name="search"
              value={searchWord}
              onChange={handleChange}
            />
            <SearchButton>🔍</SearchButton>
          </Search>

          {isLoading ? (
            <LoadingText>데이터를 받아오는 중입니다.</LoadingText>
          ) : (
            searchWord && (
              <ContentsContainer>
                {movies.results?.map((data, index) => (
                  <SearchMovies data={data} key={index} />
                ))}
              </ContentsContainer>
            )
          )}
        </SearchContainer>
      </MainContainer>
    </>
  );
};

export default MainPage;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgb(38, 49, 90);
  padding: 20px;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const TextContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vh;
  background-color: rgb(9, 18, 31);
  @media (max-width: 768px) {
    height: 30vh;
  }
`;

const WelcomeText = styled.h2`
  color: white;
  font-weight: bold;
  text-align: center;
  padding: 0 10px;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(38, 49, 90);
`;

const SearchText = styled.h1`
  color: white;
  font-weight: bold;
  margin: 50px;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin: 20px;
  }
`;

const Search = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    gap: 10px;
  }
`;

const SearchInput = styled.input`
  width: 350px;
  height: 30px;
  padding-left: 20px;
  border: none;
  border-radius: 20px;
  @media (max-width: 768px) {
    width: 250px;
    height: 25px;
  }
`;

const SearchButton = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: rgb(220, 194, 99);
  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

const ContentsContainer = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  background-color: rgb(33, 35, 72);
  padding: 0 5px;
  width: 100%;
  flex-wrap: wrap;
`;

const LoadingText = styled.p`
  color: white;
  margin-top: 50px;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
