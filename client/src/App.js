import React from "react"
import Layout from "./HOC/Layout"
import PhaseDetail from "./pages/PhaseDetail"
import Roadmap from "./pages/Roadmap"
import { Routes, Route } from "react-router-dom"

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Roadmap />} />
        <Route path='/phase/:id' element={<PhaseDetail />} />
      </Routes>
    </Layout>
  )
}
