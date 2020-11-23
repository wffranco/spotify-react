export default function Track({ track, ...rest }) {
  const { artists, album } = track;

  return (
    <div className="card track" {...rest}>
      <Images album={album} />
      <div className="card-body">
        <Song track={track} />
        <Album album={album} />
        <Artists artists={artists} />
      </div>
    </div>
  );
}

function Artists({artists}) {
  const names = artists.map(({name}) => name).join(', ');
  return <h6  className="card-text"><small>{ names }</small></h6>
}

function Album({album}) {
  const { name, release_date } = album;
  return (
    <div className="d-flex">
      <h6 className="card-title text-truncate mr-auto" title={name}>{ name }</h6>
      <div className="card-text ml-2"><small className="text-muted text-nowrap">{ release_date }</small></div>
    </div>
  );
}

function Images({album, ...rest}) {
  const { name, images: [image] } = album;
  return <img src={image.url} alt={name} {...rest} className="card-img-top" />;
}

function Song({track}) {
  const { name, duration_ms } = track;
  return (
    <div className="d-flex">
      <h5 className="card-title text-truncate mr-auto" title={name}>{ name }</h5>
      <div className="card-text ml-2"><small className="text-muted text-nowrap">{ msToTime(duration_ms) }</small></div>
    </div>
  );
}

function msToTime(time = 0) {
  // console.log('ms:', time);
  time = parseInt(time/1000);
  const group = [time % 60];
  time = parseInt(time/60);
  group.unshift(time);
  const t = group.map(val => val.toString().padStart(2, '0')).join(':');
  // console.log('time:', t);
  return t;
}
