// import PropTypes from 'prop-types'

import { Container } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import classNames from 'classnames'

import Header from './Header/Header'
import Navigation from './Navigation/Navigation'
import PageHeader from './PageHeader/PageHeader'
import Footer from './Footer/Footer'

import styles from './Layout.module.scss'

const Layout = () => (
  <Container className={classNames([styles.Layout])}>
    <Header />
    <Navigation />
    <PageHeader />
    <Outlet />
    <Footer />
  </Container>
)

Layout.propTypes = {}

Layout.defaultProps = {}

export default Layout
