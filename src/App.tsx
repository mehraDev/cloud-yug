/* eslint-disable @typescript-eslint/space-before-function-paren */
import { Suspense } from 'react'
import './App.css'

import Dashhboard from './components/Dashboard'
import DashboardLazy from './components/seller/dashboard/Dashboard'
import theme from './store/theme'
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function App() {
  console.log(theme)
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <DashboardLazy />
      </Suspense>
    </div>
  )
}

export default App
