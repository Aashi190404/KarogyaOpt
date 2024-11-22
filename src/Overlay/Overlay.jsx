import './styles.css'

export default function Overlay() {
  return (
    <div className="container">
      <header>
        <div className="brand">
          <img src="brand.svg" />
          <p>
            BIOTECH <strong>HEALTH</strong>
          </p>
        </div>
        <div>
          <ul>
            <li>Learn</li>
            <li>Numbers</li>
            <li>Engage</li>
          </ul>
        </div>
        <button>KNOW MORE</button>
      </header>

      <div className="main-wrapper">
        <section className="section section-1">
          <div className="wrapper">
            <h2>
              Revolutionary <strong>KAROGYA !</strong>
            </h2>
            <p>
              Introducing a revolutionary system that transforms the way we approach organ donation.
              🌟 Experience a <b>new era of hope and connection</b>—where the journey to saving a
              life becomes personal and meaningful. With this groundbreaking platform, you can
              directly connect with donors, ensuring a smoother and <b>more transparent process</b>.
              <b>Your life, your choices</b>, your chance at a <b>brighter future</b>. Together,
              let's make <b>every heartbeat count. ❤️</b>
            </p>
          </div>
        </section>
        <br></br>
        <section className="section section-2">
          <div className="wrapper">
            <h2>
              The <strong>Future</strong> of Organ Donation
            </h2>
            <p>
              Inspired by the <b>legendary Daanveer Karn</b>, we believe in bringing fairness and
              transparency to every aspect of life. 💛 Why should clarity be reserved for a few,
              while something as crucial as your <b>health</b> is overlooked? It’s time to change
              that. Introducing <b>KAROGYA</b>, a revolutionary platform designed to bring{' '}
              <b>complete transparency right to your doorstep</b>.{' '}
              <b>
                🌟 Don’t gamble with your life through ignorance—choose KAROGYA to truly understand
                your donor and your receiver. But that's not all!
              </b>
            </p>
            <ul>
              <li>
                {' '}
                <b>Seamlessly connect with donors</b> using our <b>chat app</b> feature, ensuring
                clarity and ease every step of the way.{' '}
              </li>
              <li>
                {' '}
                Rest assured, as all reports are meticulously verified by advanced{' '}
                <b>AI technology </b> before any matching takes place.{' '}
                <b>Your safety is our priority!</b>{' '}
              </li>
              <li>
                {' '}
                Ensure fairness with <b>minimum costs</b> set directly by the donor—because saving
                lives should never come with hidden charges.{' '}
              </li>
              <li>
                {' '}
                Hospitals receive an <b>extra advantage</b> with our dedicated <b>forum</b> feature,
                enabling seamless collaboration and communication between institutions.{' '}
              </li>
              <li>
                {' '}
                <b>Worried about expenses?</b> Don’t be! Our <b>Donation Page</b> empowers you with
                support, ensuring no financial burden holds you back.{' '}
              </li>{' '}
            </ul>
            <p>
              Take control of your health, your choices, and your future. Together, let’s honor the
              spirit of selflessness and make every life count. ❤️
            </p>
          </div>
        </section>

        <section className="section section-3">
          <div className="card-wrapper">
            <div className="card">
              <h2>No Scam</h2>
              <p>
                Don't worry about being scammed. All the users are verified. Be it the donoor the
                receiver!
              </p>
            </div>
            <div className="card">
              <h2>Priority</h2>
              <p>
                Need blood within a day? Don't worry we also have emergency queue!Register with us
                beforehand.
              </p>
            </div>
          </div>
          <div className="numbers-title">
            <h2>
              HEALTH <strong>BY THE NUMBERS</strong>
            </h2>
            <p>Successful in providing organs to countless. And the number is still increasing.</p>
          </div>
        </section>
      </div>

      <footer>
        <div className="footer-left">
          <h3>Transparency for all!</h3>
          <p>Is what we believe in!</p>
          <div className="social">
            <img src="instagram.svg" width={30} />
            <img src="youtube.svg" width={30} />
            <img src="linkedin.svg" width={30} />
          </div>
          <p className="copyright"> Thanks for your visit! Have a happy and healthy life!</p>
        </div>
        <div className="footer-right">
          <img src="brand.svg" width={60} />

          <ul>
            <li>Privacy policy</li>
            <li>Terms of service</li>
            <li>Cookie policy</li>
            <li>Disclaimer</li>
          </ul>
        </div>
      </footer>
    </div>
  )
}
