import React from 'react'
import { Route } from 'react-router-dom'
import About from './About'
import Home from './Home'

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" component={Home} exact={true} />
      <Route path="/about" component={About} />
    </div>
  )
}

export default App;