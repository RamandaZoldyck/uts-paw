import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { expect, test } from 'vitest'
import App from './App.jsx'

test('rute tidak dikenal menampilkan 404', () => {
  render(
    <MemoryRouter initialEntries={['/tidak-ada']}>
      <App />
    </MemoryRouter>,
  )
  expect(screen.getByRole('heading', { name: '404' })).toBeInTheDocument()
})

test('halaman beranda menampilkan judul Daftar Buku', () => {
  render(
    <MemoryRouter initialEntries={['/']}>   
      <App />
    </MemoryRouter>,
  )
  expect(screen.getByRole('heading', { name: 'Daftar Buku' })).toBeInTheDocument()
})

test('halaman koleksi menampilkan Koleksi Buku', () => {
  render(
    <MemoryRouter initialEntries={['/koleksi']}>
      <App />
    </MemoryRouter>,
  )
  expect(
    screen.getByRole('heading', { name: 'Koleksi Buku' })
  ).toBeInTheDocument()
})  

test('halaman statistik menampilkan judul statistik', () => {
  render(
    <MemoryRouter initialEntries={['/statistik']}>
      <App />
    </MemoryRouter>,
  )
  expect(screen.getByRole('heading', { name: 'Statistik Buku' })).toBeInTheDocument()
})

test('halaman tentang menampilkan judul tentang', () => {
  render(
    <MemoryRouter initialEntries={['/tentang']}>
      <App />
    </MemoryRouter>,
  )
  expect(screen.getByRole('heading', { name: 'Tentang Aplikasi' })).toBeInTheDocument()
})