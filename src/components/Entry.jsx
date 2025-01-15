export default function Header() {
  return (
    <>
      <main>
        <section>
          <div className="first-div">
            <img
              className="places-img"
              src="./mount-fuji.webp"
              alt="mount fuji"
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
                <p> JAPAN</p>
                <a href="https://maps.app.goo.gl/9sHrxQ5sUTW8yi3S7">
                  View on Google Maps
                </a>
              </span>
              <h1>Mount Fuji</h1>
              <p className="date-p">20 jan 2024 - 30 jan 2024</p>
              <p className="description-p">
                Climbing Mount Fuji at dawn was a surreal experience—the crisp
                mountain air filling my lungs as I ascended through the mist.
                The summit offered a breathtaking view of the vast landscape
                below, bathed in the golden light of sunrise.
              </p>
            </ul>
          </div>
        </section>
        <section>
          <div className="first-div">
            <img
              className="places-img"
              src="./great-wall.webp"
              alt="wall of china"
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
                <p> CHINA</p>
                <a href="https://maps.app.goo.gl/KF1coPb1yyednBRv5">
                  View on Google Maps
                </a>
              </span>
              <h1>Great wall of China</h1>
              <p className="date-p">12 August 2024 - 20 August 2024</p>
              <p className="description-p">
                Walking along the Great Wall of China was like stepping into
                history, the ancient stone path winding through mist-covered
                mountains. Each step felt like a connection to the past.
              </p>
            </ul>
          </div>
        </section>
        <section>
          <div className="first-div">
            <img
              className="places-img"
              src="./great-wall.webp"
              alt="wall of china"
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
                <p> ITALY</p>
                <a href="https://maps.app.goo.gl/99P8hUCuPeT4AswNA">
                  View on Google Maps
                </a>
              </span>
              <h1>Colosseum</h1>
              <p className="date-p">5 January 2025 - 12 2025</p>
              <p className="description-p">
                Exploring the Colosseum was like walking through the heart of
                ancient Rome, where every stone seemed to whisper stories of
                gladiators and emperors.
              </p>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
