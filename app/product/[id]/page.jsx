"use client"
import React from 'react'
export default function page({params}) {
  console.log(params)
  return (
    <div>
      Helllo to product page at id no... {params.id}
    </div>
  )
}
