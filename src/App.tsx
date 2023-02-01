import './App.css'

function App() {
  return (
    <div className="App">
      <div className="LoginForm">
        <h1 className="FormTitle">
          Login
        </h1>

        <div>
          <h4 className="FormText">
            Email
          </h4>
          <input type="email" className="FormField" />
        </div>

        <div>
          <h4 className="FormText">
            Password
          </h4>
          <input type="password" className="FormField" />
        </div>

        <div>
          <button className="SubmitForm">Enter</button>
        </div>
      </div>
    </div>
  )
}

export default App
