import { useParams } from '../router';
import { useSelector, useActions } from '../redux/store';

import Tracks from '../components/tracks';

export default function Music() {
  const { query, page = 1 } = useParams();
  const { searchMusic, setSearch } = useActions(['searchMusic', 'setSearch']);
  const music = useSelector(store => store.music);
  setSearch(query);
  searchMusic({query, page});

  return (
    <div className="card">
      <h5 className="card-header">Search: <small>{query}</small></h5>
      <div className="card-body">
        <Tracks music={music} />
      </div>
    </div>
  );
}
