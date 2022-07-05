// import PropTypes from 'prop-types'
import styles from './FAQ.module.scss'

const FAQ = () => (
  <div className={styles.FAQ}>
    <h2>FAQ</h2>
    <ul>
      <ul>
        <li>Q: What is Colore?</li>
        <li>A: Colore is both the specification and the implemention of the framework. Colore allows (web)application developers to develop their applications faster, by describing the event/request handling flows through metadata and making those flows directly available. This is done in a modular, flexible way, allowing for independence of execution environment and giving the ability to handle content encoding separately.</li>
      </ul>
      <ul>
        <li>Q: What Colore isn&apos;t?</li>
        <li>A: Colore will not write your code/application for you. Colore is merely a concept which can greatly increase the speed of implementing your (web)application by enforcing the usage of classes/objects to implement functionality.</li>
      </ul>
      <ul>
        <li>Q: You say it&apos;s both a specification and an implementation, what does that mean?</li>
        <li>A: While Colore arose out of the need to have a framework which would greatly decrease code complexity in PHP application, the concept is applicable to other languages as well. That&apos;s why it was decided to also document it as a specification to allow other developers to implement the framework in their own favourite language.</li>
      </ul>
      <ul>
        <li>Q: Nice idea, but this sounds like a <a href="http://www.springsource.org/">Spring</a> clone!</li>
        <li>A: There are some similarities between Spring and Colore, for instance dependency injection and using metadata to describe classes to invoke, but the field of application is different in the sense that Colore aims to automate the flow in an application whereas Spring, in a nutshell, aims to simplify the use of classes in a J2EE environment by using interfaces.</li>
      </ul>
      <ul>
        <li>Q: Okay, so you built a Servlet system for PHP?</li>
        <li>A: To a certain extent, yes, but Colore makes it possible to map a request to a certain chain of Logic, a Context, while Servlets usually map to a worker class that invokes the rest of the required classes and makes it possible to use different container and content encoding (i.e. plain-text or AMF in an HTTP environment).</li>
      </ul>
    </ul>
  </div>
)

FAQ.propTypes = {}

FAQ.defaultProps = {}

export default FAQ
