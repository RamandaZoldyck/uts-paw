import { Route, Routes } from 'react-router-dom'
import { KoleksiProvider } from 'src/context/KoleksiProvider.jsx'
import Layout from 'src/components/Layout.jsx'
import Beranda from 'src/pages/Beranda.jsx'
import Koleksi from 'src/pages/Koleksi.jsx'
import Detail from 'src/pages/Detail.jsx'
import Tambah from 'src/pages/Tambah.jsx'
import Statistik from 'src/pages/Statistik.jsx'
import Tentang from 'src/pages/Tentang.jsx'
import TidakDitemukan from 'src/pages/TidakDitemukan.jsx'

export default function App() {
  return (
    <KoleksiProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Beranda />} />
          <Route path="/koleksi" element={<Koleksi />} />
          <Route path="/koleksi/:id" element={<Detail />} />
          <Route path="/tambah" element={<Tambah />} />
          <Route path="/statistik" element={<Statistik />} />
          <Route path="/tentang" element={<Tentang />} />
          <Route path="*" element={<TidakDitemukan />} />
        </Route>
      </Routes>
    </KoleksiProvider>
  )
}