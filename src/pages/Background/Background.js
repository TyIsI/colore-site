// import PropTypes from 'prop-types'
import styles from './Background.module.scss'

const Background = () => (
  <div className={styles.Background}>
    <p>
      Challenges:
    </p>
    <ul>
      <li>
        PHP does not enforce a clear path of execution, allowing PHP code to be mixed with HTML/display elements.
      </li>
      <li>
        In order to solve this, a clear pipeline/path of execution needed to be established.
      </li>
      <li>
        None of the existing frameworks provided a solution for re-use of the same logic for multiple input and output
        types.
      </li>
      <li>
        Upon receiving a request, a generic framework would have to first figure out the input type it received in a
        intelligent manner and then use the correct input decoder based on the actual input type.
      </li>
      <li>
        In the case of a Flash client, using Flash-remoting to communicate, this would be a specific Remote Call; a
        request from a webbrowser could in essence be considered to be the same request, but with added visual
        rendering.
      </li>
      <li>
        A uniform way of specifying a request needed to be specified.
      </li>
      <li>
        A uniform way was needed to describe sets of shared logic used in different sets.
        <ul>
          <li> I.e. /showreservations and /makereservation could both required user authentication.
          </li>
        </ul>
      </li>
      <li>
        Any input type dependent logic had to dynamically be executed based on the initial inspection of the request.
      </li>
      <li>
        Colore was therefor inspired/based on the principle of Digital Signal Processors.
      </li>
    </ul>
    <p>Solution:</p>
    <p>
      Because remote calls from a client could clearly be mapped out to a chain of logic, Colore was therefor centered
      around the concept of providing a solution to mapping out and executing these individual chains of logic.
    </p>
    <p>
      Colore does so by implementing a Master-Worker pattern and makes use of the following patterns and concepts:
    </p>
    <ul>
      <li>
        <a rel="nofollow" className="external text" href="http://en.wikipedia.org/wiki/Aspect-oriented_programming">
          Aspect-Oriented Programming
        </a>
      </li>
      <li>
        <a rel="nofollow" className="external text" href="http://en.wikipedia.org/wiki/Chain-of-responsibility_pattern">
          Chain-of-Responsibility pattern
        </a>
      </li>
      <li>
        <a rel="nofollow" className="external text" href="http://en.wikipedia.org/wiki/Dependency_injection">
          Dependency Injection
        </a>
      </li>
      <li>
        <a rel="nofollow" className="external text" href="http://en.wikipedia.org/wiki/Flow-based_programming">
          Flow-based Programming
        </a>
      </li>
      <li> <a rel="nofollow" className="external text" href="http://en.wikipedia.org/wiki/Inversion_of_control">
        Inversion of Control
      </a>
      </li>
      <li> <a rel="nofollow" className="external text" href="http://en.wikipedia.org/wiki/Separation_of_concern">
        Separation of Concern
      </a>
      </li>
    </ul>

  </div>
)

Background.propTypes = {}

Background.defaultProps = {}

export default Background
