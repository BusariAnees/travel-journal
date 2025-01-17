export default function Header(props) {
    return (
      <>
        <main>
          <section>
            <div className="first-div">
              <img
                className="places-img"
                src={props.img.src}
                alt={props.img.alt}
              />
            </div>
            <div className="second-div">
              <ul>
                <span className="span">
                  <img
                    className="location-dot"
                    src="./location-dot-solid.svg"
                    alt=""
                  />
                  <p> {props.name}</p>
                  <a href={props.link}>
                    View on Google Maps
                  </a>
                </span>
                <h1>{props.header}</h1>
                <p className="date-p">{props.date}</p>
                <p className="description-p">
                  Climbing Mount Fuji at dawn was a surreal experience—the crisp
                  mountain air filling my lungs as I ascended through the mist.
                  The summit offered a breathtaking view of the vast landscape
                  below, bathed in the golden light of sunrise.
                </p>
              </ul>
            </div>
          </section>
        </main>
      </>
    );
  
}
