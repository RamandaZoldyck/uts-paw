import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import './Tambah.css'

const AWAL = { judul: '', kategori: '', penulis: '', tahunTerbit: '', status: '' }

export default function Tambah() {
  const { tambah } = useKoleksi()
  const navigate = useNavigate()
  const [form, setForm] = useState(AWAL)
  const [galat, setGalat] = useState('')

  const ubah = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const simpan = (e) => {
    e.preventDefault()
    if (form.judul.trim().length < 3) {
      setGalat('Judul wajib diisi, minimal 3 karakter.')
      return
    }
    tambah({ ...form, 
        judul: form.judul.trim(),
        kategori: form.kategori.trim(),
        penulis: form.penulis.trim(),
        tahunTerbit: form.tahunTerbit.trim(),
        status: form.status.trim() 
    })
    
    navigate('/koleksi')
  }

  return (
    <form className="formulir" onSubmit={simpan} noValidate>
      <h1>Tambah Buku</h1>

      <label htmlFor="judul">Judul</label>
      <input id="judul" name="judul" value={form.judul} onChange={ubah} />
      {galat && <p role="alert">{galat}</p>}

      <label htmlFor="kategori">Kategori</label>
      <input id="kategori" name="kategori" value={form.kategori} onChange={ubah}>
      </input>

      <label htmlFor="penulis">Penulis</label>
      <input id="penulis" name="penulis" value={form.penulis} onChange={ubah} />

      <label htmlFor="tahunTerbit">Tahun Terbit</label>
      <input id="tahunTerbit" name="tahunTerbit" type="number" value={form.tahunTerbit} onChange={ubah} />

      <label htmlFor="status">Status</label>
      <select id="status" name="status" value={form.status} onChange={ubah}>
        <option value="Ingin Dibeli">Ingin Dibeli</option>
        <option value="Dimiliki">Dimiliki</option>
        <option value="Sedang Dibaca">Sedang Dibaca</option>
      </select>

      <button type="submit">Simpan</button>
    </form>
  )
}