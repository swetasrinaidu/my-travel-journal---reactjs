
export default function Card(props){
     return(
        <div className="card">
            <img src={props.imageUrl} alt="" className="card-image" />
            <div className="card-stats">
               <img className="location-logo" src="https://i.pinimg.com/474x/cb/17/c6/cb17c606f41f47aa505e6d203df8716d.jpg"alt="" />

                <h3>{props.location.toUpperCase()}  </h3>
                <h2>{props.title}</h2>
                <h4>{props.startDate} - {props.endDate}</h4>
                <p className="card-describe">{props.description}</p>
                <a href={props.googleMapsUrl}>View on google map</a>

            </div>
        </div>
     )
}
