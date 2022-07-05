// import PropTypes from 'prop-types'
import styles from './Implementations.module.scss'

const Implementations = () => (
  <div className={styles.Implementations}>
    <h2>Implementations</h2>
    <p>The following implementations are under development:</p>
    <ul>
      <li><a href="https://github.com/Colore/Colore-PHP" target="_blank" rel="noreferrer">Colore-PHP</a> (mature)</li>
      <li><a href="https://github.com/Colore/Colore-JS" target="_blank" rel="noreferrer">Colore-JS</a> (design phase)</li>
      <li><a href="https://github.com/Colore/Colore-J2EE" target="_blank" rel="noreferrer">Colore-J2EE</a> (refactor in fork)</li>
    </ul>
  </div>
)

Implementations.propTypes = {}

Implementations.defaultProps = {}

export default Implementations
