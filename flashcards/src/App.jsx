import './App.css'
import Layout from './components/Layout.jsx'
import flag from '/japaneseflag.png'

function App() {
  return (
    <div>
      <img src= {flag} alt="Japanese Flag " style={{border: '1px solid #000'}}/>
      
      <h1>Essential Japanese Phrases To Get Around</h1>
      <h2>Are you planning to visit Japan soon?<br/>
          Here are some helpful phrases you can use on your trip!😊
      </h2>
      <Layout/>
    </div>
    
  )
}

export default App
