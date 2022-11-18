import { useParams, useNavigate } from 'react-router-dom';
import NotFoundPage               from './NotFoundPage';
import useUser                    from '../hooks/useUser';
import artwork                    from './artwork-content';

const ArtworkPage = () => {
  // use authenticated user
  const { user, isLoading } = useUser();
  const navigate = useNavigate();

  const { artworkId } = useParams();
  const art = artwork.find(art => art.id === artworkId);
  if (!art) {
    return <NotFoundPage />;
  }

  return (
    <>
      { user
        ?
          <>
            <h1>{ art.name }</h1>
            <img
              width={ 800 }
              src={ art.image }
              alt={ art.description }
            />
            <h3>Attributes</h3>
            <ul>
              { art.attributes.map((attribute, i) => (
                  <li key={ i }>{ attribute }</li>
              ))}
            </ul>
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

export default ArtworkPage;
