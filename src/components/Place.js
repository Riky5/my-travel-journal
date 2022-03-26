import pin from '../pin.svg'
import './Place.css'

function Place({place}) {
  return (
    <section className='place-container'>
      <img src={place.imageUrl} alt={place.title} className="photo" />
      <div className='details-container'>
        <div className='location-container'>
          <img src={pin} alt="location-pin" className='pin' />
          <p>{place.location}</p>
          <a href={place.googleMapsUrl}>View on Google Maps</a>
        </div>
        <h1>{place.title}</h1>
        <h3>{`${place.startDate} - ${place.endDate}`}</h3>
        <p className='description'>{place.description}</p>
      </div>
    </section>
  );
}

export default Place;