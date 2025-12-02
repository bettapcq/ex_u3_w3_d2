/* eslint-disable react-hooks/exhaustive-deps */
import { Card, Container, Row, Col } from 'react-bootstrap';
import type { Article } from '../types/types';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const apiURL = 'https://api.spaceflightnewsapi.net/v4/articles/';

const ArticleDetails = () => {
  const params = useParams();
  const articleID = params.id;
  console.log(articleID);
  const [details, setDetails] = useState<Article>();

  const getArticleDetails = () => {
    fetch(apiURL + articleID)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('error' + res.status);
        }
      })
      .then((data) => {
        console.log('risultato dati: ', data);
        setDetails(data);
      })
      .catch((err) => {
        console.log('error', err);
      });
  };

  useEffect(() => {
    getArticleDetails();
  }, []);

  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <h1 className="text-center">Dettagli articolo</h1>
          <Card>
            <Card.Img variant="top" src={details?.image_url} />
            <Card.Body>
              <Card.Title>{details?.title}</Card.Title>
              <Card.Text>{details?.summary}</Card.Text>
              <Card.Text>
                By:
                {details?.authors?.map((a, index) => (
                  <span key={index}>{a.name}</span>
                ))}
              </Card.Text>
              <Card.Text className="text-muted">
                Published: {details?.published_at}
              </Card.Text>
              <Card.Text className="text-muted">
                Updated: {details?.updated_at}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ArticleDetails;
