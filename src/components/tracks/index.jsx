import Track from './Track';
import Paginator from './paginator';
import './index.scss';

export default function Tracks({ music = {} }) {
  if (!music) return <></>;

  if (music.loading) return (
    <div className="d-flex align-items-center">
      <div className="spinner-border ml-auto mr-2" role="status" aria-hidden="true"></div>
      <strong className="mr-auto">Loading...</strong>
    </div>
  );

  if (music.error) return (
    <div className="alert alert-danger" role="alert">
      Ocurrió un error en la api de Spotify.
    </div>
  );

  const { items: tracks = [] } = music.tracks||{};
  if (!tracks.length) return (
    <div className="alert alert-danger" role="alert">
      No hay resultados para mostrar.
    </div>
  );

  return (
    <>
      <div className="card-deck track-list">
        { tracks.map((track) => (<Track key={track.id} track={track} />)) }
      </div>
      <Paginator />
    </>
  );
}
