import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setcounter] = useState(15)

  const addvalue = () => {
    console.log('Value Added', { counter })
    counter = counter + 1
    setcounter(counter)
  }

  const removevalue = () => {
    console.log('Value Removed', { counter })
    counter = counter - 1
    setcounter(counter)
  }

  return (
    <div className="flex flex-col items-center justify-center mix-h-screen bg-gradient-to-br from-[#1e3a8a] via-[#9333ea] to-[#f43f5e] px-4 py-6 sm:px-6 text-white transition-all duration-500">
      
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-2xl max-w-md w-full text-center animate-fade-in">
        
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 drop-shadow-md">
          Welcome to <span className="text-yellow-300">React.js</span>
        </h1>

        <h2 className="text-2xl sm:text-3xl font-semibold mb-8 bg-white/20 px-4 py-2 rounded-xl shadow-md">
          Counter Value: <span className="text-lime-300">{counter}</span>
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button
            onClick={addvalue}
            className="bg-green-500 hover:bg-green-600 text-black font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
          >
            ➕ Add Value
          </button>

          <button
            onClick={removevalue}
            className="bg-red-500 hover:bg-red-600 text-black font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
          >
            ➖ Remove Value
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
