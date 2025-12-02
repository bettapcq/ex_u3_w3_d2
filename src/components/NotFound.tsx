import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const NotFound = function () {
  const navigate = useNavigate();

  return (
    <div className="text-center">
      <h3>404 - Pagina non trovata</h3>
      <Button
        onClick={() => {
          navigate('/');
        }}
      >
        Torna in Home
      </Button>
    </div>
  );
};

export default NotFound;
