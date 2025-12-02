import { Card } from 'react-bootstrap';
import type { Article } from '../types/types';
import { Link } from 'react-router-dom';

interface SingleArticleProps {
  articleFromProps: Article;
}

const SingleArticle = function ({ articleFromProps }: SingleArticleProps) {
  const date = new Date(articleFromProps.published_at);

  return (
    <Card className="my-3">
      <Card.Img variant="top" src={articleFromProps.image_url} />
      <Card.Body>
        <Card.Title>{articleFromProps.title}</Card.Title>
        <Card.Text>
          By:{' '}
          {articleFromProps.authors.map((a, index) => (
            <span key={index}>{a.name}</span>
          ))}
        </Card.Text>
        <footer className="blockquote-footer">
          {date.toLocaleDateString()}
        </footer>
        <div className="text-center">
          <Link
            to={`/details/${articleFromProps.id}`}
            className="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
          >
            Open article
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default SingleArticle;
