'use client'

import { useState } from 'react'

export default function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full mx-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          My Capacitor App
        </h1>
        
        <div className="text-center">
          <div className="bg-gray-100 rounded-lg p-6 mb-6">
            <p className="text-lg text-gray-600 mb-2">Counter:</p>
            <p className="text-4xl font-bold text-blue-600">{count}</p>
          </div>
          
          <div className="space-y-3">
            <button
              onClick={() => setCount(count + 1)}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg transition duration-200"
            >
              Tăng +1
            </button>
            
            <button
              onClick={() => setCount(count - 1)}
              className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-4 rounded-lg transition duration-200"
            >
              Giảm -1
            </button>
            
            <button
              onClick={() => setCount(0)}
              className="w-full bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-4 rounded-lg transition duration-200"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}