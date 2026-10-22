
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [healthMessage, setHealthMessage] = useState('Checking backend...')

  useEffect(() => {
    fetch('http://localhost:8080/health/check')
      .then((res) => res.text())
      .then((data) => setHealthMessage(data))
      .catch((err) => setHealthMessage('Failed to connect to backend: ' + err.message))
  }, [])

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
      <h1>GitHub Repository Explainer</h1>
      <p><strong>Backend Status:</strong> {healthMessage}</p>
    </div>
  )
}

export default App