import { Layout } from '@/components/Layout'
import { Header } from '@/components/Sections/Header'
import { MoviesLists } from '@/components/Sections/MoviesLists'
import React from 'react'

function MoviesPage() {
  return (
    <Layout>
      <MoviesLists />
    </Layout>
  )
}

export default MoviesPage