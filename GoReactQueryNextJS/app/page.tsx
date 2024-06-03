import React from 'react'
import Header from '@/components/Header'

export default function Home(){
  const name = "Nicholas Sedich"
  return (
    <div>
      <Header name={name} />
      <section className="py-24">
        <div className="container">
          <h1>/home</h1>
        </div>
      </section>
    </div>
  )
}