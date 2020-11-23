import { useState } from 'react';
import { useHistory } from '../../router';

import Icon from '../icon';

function Search() {
  const [search, setSearch] = useState('');
  const history = useHistory();
  // const { searchMusic } = useActions(['searchMusic']);

  function submit(e) {
    if (e) e.preventDefault();
    console.log('submit:', search);
    if (search) history.push(`/search/${search.trim()}`);
  }

  return (
    <form className="form-inline my-2 my-lg-0" onSubmit={submit}>
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Buscar" aria-label="Buscar" aria-describedby="button-addon2"
          value={search} onChange={(e) => setSearch(e.target.value)}
        />
        <div className="input-group-append">
          <button className="btn btn-outline-light btn-search" type="button" id="button-addon2">
            <Icon type="search" />
          </button>
        </div>
      </div>
    </form>
  );
}

export default Search;
