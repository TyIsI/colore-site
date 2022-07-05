// import PropTypes from 'prop-types'

import { Row, Col, Image, Nav } from 'react-bootstrap'
import classNames from 'classnames'
import { LinkContainer } from 'react-router-bootstrap'
import { useLocation } from 'react-router'

import { capitalizeFirstLetter } from 'utils'

import imgPageHeader from '../../../assets/images/page-header.jpg'

import styles from './PageHeader.module.scss'

const menuItems = ['examples', 'downloads', 'wiki']

const PageHeader = () => {
  const location = useLocation()

  const keyIndex = menuItems.findIndex(item => item === location.pathname.split('/')[1])
  const activeKey = keyIndex > -1 ? menuItems[keyIndex] : null

  return (
    <Row className={classNames(['spacious', styles.PageHeader])}>
      <Col>
        <Image className={classNames([styles.ImagePageHeader])} src={imgPageHeader} />
        {/* <Row>
          <Col> */}
        <Nav activeKey={activeKey} className={classNames(['spacious', 'justify-content-end', styles.PageHeaderNav])}>
          {menuItems.map(item => {
            return (
              <li key={item}>
                <Nav.Item>
                  <LinkContainer to={`/${item}`}>
                    <Nav.Link eventKey={`${item}`} className={classNames([styles.PageHeaderItem, activeKey === item ? styles.CurrentPageHeaderItem : null])}>{capitalizeFirstLetter(item)}</Nav.Link>
                  </LinkContainer>
                </Nav.Item>
              </li>
            )
          })}
        </Nav>
        {/* </Col>
        </Row> */}
      </Col>
    </Row>
  )
}

PageHeader.propTypes = {}

PageHeader.defaultProps = {}

export default PageHeader
