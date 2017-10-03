import React from 'react'
import Link from 'gatsby-link'
import classnames from 'classnames'

import HeaderLinks from './HeaderLinks/HeaderLinks'
import HeaderBadges from './HeaderBadges/HeaderBadges'

import styles from './Header.module.css'

const Header = () => (
  <div className={styles.header}>
    <div className={classnames(styles.headerColumn)}>
      <h1 className={styles.headerTitle}>
        <Link to="/" className={styles.headerLink}>
          aquellex.ws
        </Link>
      </h1>
    </div>
    <div className={classnames(styles.headerColumn, styles.headerColumnRight)}>
      <HeaderLinks />
      <HeaderBadges />
    </div>
  </div>
)

export default Header
