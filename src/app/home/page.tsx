import axios from 'axios'
import { useState } from 'react'

export default function HomePage() {
  const [endpoint, setEndpoint] = useState('https://jsonplaceholder.typicode.com/todos/1')
  const [data, setData] = useState<any>(null)

  return (
    <main className='flex h-screen min-h-screen w-full flex-col items-center justify-center py-16'>
      <div className='mb-8 flex items-center gap-2'>
        <input
          className='w-96 rounded-md border border-gray-400 p-2'
          type='text'
          placeholder='https://api.example.com'
          value={endpoint}
          onChange={(e) => setEndpoint(e.target.value)}
        />
        <button
          className='ml-2 rounded-md bg-blue-300 p-2'
          onClick={() => {
            axios.get(endpoint).then((res) => {
              setData({
                status: res.status,
                data: res.data,
              })
            })
          }}
        >
          CORS Test
        </button>
      </div>
      {data && (
        <div className='w-full max-w-3xl overflow-auto rounded-md border border-gray-400 p-2'>
          {JSON.stringify(data)}
        </div>
      )}
    </main>
  )
}
