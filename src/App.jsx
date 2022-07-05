import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import Layout from 'components/Layout/Layout'

import Loading from 'pages/Loading/Loading'

import './App.css'

const Background = lazy(() => import('pages/Background/Background'))
const Contact = lazy(() => import('pages/Contact/Contact'))
const Documentation = lazy(() => import('pages/Documentation/Documentation'))
const Downloads = lazy(() => import('pages/Downloads/Downloads'))
const Examples = lazy(() => import('pages/Examples/Examples'))
const FAQ = lazy(() => import('pages/FAQ/FAQ'))
const Home = lazy(() => import('pages/Home/Home'))
const Implementations = lazy(() => import('pages/Implementations/Implementations'))
const Links = lazy(() => import('pages/Links/Links'))
const Specification = lazy(() => import('pages/Specification/Specification'))
const Wiki = lazy(() => import('pages/Wiki/Wiki'))

function App () {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter base="/">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="background" element={<Background />} />
            <Route path="contact" element={<Contact />} />
            <Route path="documentation" element={<Documentation />} />
            <Route path="downloads" element={<Downloads />} />
            <Route path="examples" element={<Examples />} />
            <Route path="FAQ" element={<FAQ />} />
            <Route path="implementations" element={<Implementations />} />
            <Route path="links" element={<Links />} />
            <Route path="specification" element={<Specification />} />
            <Route path="wiki" element={<Wiki />} />
            <Route path="*" element={<Home />} />
          </Route>
          <Route path="/loading" element={<Loading />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
