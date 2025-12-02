import { Card } from 'react-bootstrap';
import type { ArticleDetail } from '../types/types';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const apiURL = 'https://api.spaceflightnewsapi.net/v4/articles/';

const ArticleDetails = () => {
  const params = useParams();
  const articleID = params.id;
  console.log(articleID);
  const [details, setDetails] = useState<ArticleDetail>();

  const getArticleDetails = () => {
    fetch(apiURL + articleID)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('error' + res.status);
        }
      })
      .then((data: ArticleDetail) => {
        console.log(data);
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
    <Card>
      <Card.Img variant="top" src={details?.image_url} />
      <Card.Body>
        <Card.Title>{details?.title}</Card.Title>
        <Card.Text>{details?.summary}</Card.Text>
        <Card.Text>
          By:{' '}
          {details?.authors.map((a, index) => (
            <span key={index}>{a.name}</span>
          ))}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ArticleDetails;
