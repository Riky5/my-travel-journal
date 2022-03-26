import './Place.css'

function Place({place}) {
  return (
    <section className='place-container'>
      <img src={place.imageUrl} className="photo" />
      <div className=''>
        <h4>{place.location}</h4>
        <a href={place.googleMapsUrl}></a>
        <h1>{place.title}</h1>
        <h5>{`${place.startDate} - ${place.endDate}`}</h5>
        <p>{place.description}</p>
      </div>
    </section>
  );
}

export default Place;