import React from 'react'
import PropTypes from 'prop-types'
import { Subscribe } from 'unstated'
import Clock from './Clock'
import StartButton from './StartButton'
import Timer from '../containers/Timer.js'
import styles from './App.module.css'

const App = () => (
  <Subscribe to={[Timer]}>
    {timer =>
      <div>
        <header
          className={styles.header}
          style={{
            visibility: timer.state.status === 'STOPPED' ? '' : 'hidden',
            opacity: timer.state.status === 'STOPPED' ? 1 : 0
          }}
        >
          <h1 className={styles.title}>
            nixie-timer
            <i
              className={'fab fa-github ' + styles.githubIcon}
              onClick={() => { window.location.href = 'https://github.com/koirand/nixie-timer' }}
            />
          </h1>
        </header>
        <div className={styles.main}>
          <Clock />
          <div
            className={styles.buttonContainer}
            style={{
              visibility: timer.state.status === 'STOPPED' ? '' : 'hidden',
              opacity: timer.state.status === 'STOPPED' ? 1 : 0
            }}
          >
            <StartButton />
          </div>
        </div>
      </div>
    }
  </Subscribe>
)

App.propTypes = {
  timer: PropTypes.shape({
    action: PropTypes.func.isRequired,
    state: PropTypes.shape({
      status: PropTypes.string.isRequired
    })
  }).isRequired
}

export default App
