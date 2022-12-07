import Link from 'next/link'

const NftList = ({ artwork }) => {
  return (
    <>
      { artwork.map(art => (
          <Link
            key={ art.id }
            className="artwork-list-item"
            href={ `/artwork/${ art.id }` }
          >
            <h3>{ art.name }</h3>
            <p>
              <img
                width={ 400 }
                src={ art.image }
                alt={ art.description }
              />
            </p>
          </Link>
      ))}
    </>
  );
};

export default NftList;
