import React from 'react'
import { AwesomeButton } from 'react-awesome-button'

import { LikeButton } from './components/LikeButton'
import { DownloadButton } from './components/DownloadButton'

import logo from './logo.svg'
import './App.css'
import 'react-awesome-button/dist/styles.css'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello World!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <LikeButton />
        <DownloadButton />
        <div>
          <AwesomeButton size="small" type="primary">
            Small
          </AwesomeButton>
        </div>
        <div>
          <AwesomeButton size="medium" type="primary">
            Medium
          </AwesomeButton>
          <AwesomeButton size="large" type="secondary">
            Large
          </AwesomeButton>
        </div>
      </header>
    </div>
  )
}

export default App
