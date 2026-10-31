import { Link } from 'react-router-dom'


export default function KartuItem({ item }) {
  console.log(item)

  const { id, judul, kategori, penulis, tahunTerbit, status} = item
  return (
    <article className="kartu">
      <h3>
        <Link to={`/koleksi/${id}`}>{judul}</Link>
      </h3>
      <p>Kategori: {kategori}</p>
      <p>Penulis: {penulis}</p>
      <p>Tahun Terbit: {tahunTerbit}</p>
      <p>Status: {status}</p>
    </article>
  )
}