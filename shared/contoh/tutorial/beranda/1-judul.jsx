import mahasiswa from '../../mahasiswa.json'

export default function Beranda() {
  return (
    <section>
      <h1>bukuMu</h1>
      <p>Tema: {mahasiswa.tema}</p>
    </section>
  )
}
