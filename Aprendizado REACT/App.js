import React {Component} from 'react'
import ReactDOM from 'react-dom'
import '../react-tutorial/src/App.css'

class App extends Component {
    render() {
        return (
            <div className='App'>
                <h1>Hello, React!</h1>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))
