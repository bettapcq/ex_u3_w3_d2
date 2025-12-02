import { useEffect, useState } from 'react';
import { type ApiResponse, type Article } from '../types/types';
import { Col, Container, Row } from 'react-bootstrap';
import SingleArticle from './SingleArticle';

const apiURL = 'https://api.spaceflightnewsapi.net/v4/articles';

const Home = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  const getArticles = () => {
    fetch(apiURL)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('errore' + res.status);
        }
      })
      .then((data: ApiResponse) => {
        console.log(data);
        setArticles(data.results);
      })
      .catch((err) => {
        console.log('errore nella risposta', err);
      });
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <Container>
      <Row className="flex-column">
        <Col>
          <h1>Titolo Articoli</h1>
        </Col>
        <Col>
          <Row>
            {articles.map((element) => {
              return (
                <Col key={element.id} xs={12} md={6} lg={4}>
                  <SingleArticle articleFromProps={element} />
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
