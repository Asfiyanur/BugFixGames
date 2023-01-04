import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import { CharCard, Content, NavTitle, Title } from "./News.style";

const News = () => {
  const [characters, setCharacters] = useState([]);
  const base_url = "https://rickandmortyapi.com/api/character";

  const getData = async () => {
    try {
      const { data } = await axios(base_url);
      setCharacters(data.results);
      console.log(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <NavTitle>
        <Title>News</Title>
        <Content>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat et
          nesciunt laborum cumque sunt?
        </Content>
      </NavTitle>
      <CharCard>
        {characters.map((char) => {
          return <Card key={char.id} {...char} />;
        })}
      </CharCard>
    </>
  );
};

export default News;
