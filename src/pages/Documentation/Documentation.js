// import PropTypes from 'prop-types'
import styles from './Documentation.module.scss'

const Documentation = () => (
  <div className={styles.Documentation}>
    <h2>
      Welcome to the Colore documentation.
    </h2>
    <p>
      A few starting points:
    </p>
    <ul>
      <li>
        <a href="/background" title="Background">Background</a>
      </li>
      <li>
        <a href="/specification" title="Specification">Specification</a>
      </li>
      <li>
        <a href="/implementations" title="Implementations">Implementations</a>
      </li>
    </ul>
  </div>
)

Documentation.propTypes = {}

Documentation.defaultProps = {}

export default Documentation
