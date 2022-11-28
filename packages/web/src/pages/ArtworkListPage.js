import { useNavigate } from 'react-router-dom';
import ArtworkList     from '../components/ArtworkList';
import useUser         from '../hooks/useUser';
import artwork         from './artwork-content';

const ArtworkListPage = () => {
  // use authenticated user
  const { user, isLoading } = useUser();
  const navigate = useNavigate();

  return (
    <>
      { user
        ?
          <>
            <h1>Artwork</h1>
            <ArtworkList
              artwork={ artwork }
            />
          </>
        :
          <button
            onClick={ () => navigate("/login") }
          >
            Log in to view Artwork
          </button>
      }
    </>
  );
};

export default ArtworkListPage;
