import { Card } from 'react-bootstrap';
import { Article } from '../types/types';
import { useState, useEffect } from 'react';

const apiURL = 'https://api.spaceflightnewsapi.net/v4/articles/';
const articleID = new URLSearchParams(location.search);

const ArticleDetails = () => {
  const [details, setDetails] = useState<Article[]>([]);

  const getArticleDetails = () => {
    fetch(apiURL + articleID)
      .then((res) => {
        if (res.ok) {
          res.json();
        } else {
          throw new Error('error' + res.status);
        }
      })
      .then((articleDetails) => {
        
      })
      .catch((err) => {
        console.log('error', err);
      });
  };

  useEffect(() => {
    getArticleDetails()
  }, [])

  return (
    <Card>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ArticleDetails;
