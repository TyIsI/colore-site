// import PropTypes from 'prop-types'
import styles from './Home.module.scss'

const Home = () => (
  <div className={styles.Home}>
    <h2><span className="mw-headline" id="What_is_Colore.3F"> What is Colore? </span></h2>
    <p>
      Colore provides a best of both world solution to the If-Else-versus-Objected-Oriented-Programming dilemma.
    </p>
    <p>
      Colore does so by providing a language-independent configurable dynamic way of mapping If-Else decision trees
      through
      metadata and acts as an agent to execute the relevant logic to a request.
    </p>
    <h2><span className="mw-headline" id="Key_Features"> Key Features </span></h2>
    <ul>
      <li>
        <b>language-independent</b>
      </li>
      <li>
        <b>dynamically/run-time configurable</b>
      </li>
      <li>
        <b>Aspect-Oriented</b>
      </li>
      <li>
        <b>Separation-of-Concern</b>
      </li>
      <li>
        <b>Inversion-of-Control</b>
      </li>
      <li>
        <b>Chain-of-Responsibility</b>.
      </li>
    </ul>
    <h2><span className="mw-headline" id="Benefits">Benefits</span></h2>
    <ul>
      <li> Colore enables developers to:
        <ul>
          <li>
            dynamically model applications independent of the actual execution environment.
          </li>
          <li>
            easily re-use code, implement separation of concern and optimize application execution,
          </li>
          <li>
            by using meta-data to separate application workflow logic from the business logic,
          </li>
          <li>
            and provide a means to more easily implement different output mechanisms without changes in application
            logic.
          </li>
        </ul>
      </li>
    </ul>
    <ul>
      <li>
        Colore applies a procedural model to Object-Oriented-Programming, by modeling the individual processing flows
        on a request/event-handler-based model.
      </li>
    </ul>
    <ul>
      <li>
        Colore was built on the concepts of:
        <ul>
          <li>
            Intelligent mapping/discovery of the Context of the request to be handled by the engine,
          </li>
          <li>
            Execute the relevant Logic based on the Context
          </li>
          <li>
            Rendering output based on request Context
          </li>
        </ul>
      </li>
    </ul>

  </div>
)

Home.propTypes = {}

Home.defaultProps = {}

export default Home
