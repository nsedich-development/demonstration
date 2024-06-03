"use client"

import React from 'react'

import {
    useQuery,
    useQueryClient,
  } from '@tanstack/react-query'

export default function Query() {

  const queryClient = useQueryClient()
  const [intervalMs, setIntervalMs] = React.useState<number>(1000)
  const [value, setValue] = React.useState('')

  const { status, data, error, isFetching } = useQuery({
    queryKey: ['photos'],
    queryFn: async () => {
      const res = await fetch('http://localhost:8080/photos')
      const allPostsData = await res.json()
      return allPostsData
    },
    // Refetch the data every second
    refetchInterval: intervalMs,
  })

  if (status === 'pending') return <h1>Loading...</h1>

  return (
    <> 
        {data.map(({AlbumId,ID,Title,Url,ThumbnailUrl})=>(
                <li key={ID}>{ID}</li>
        ))}
    </>
  )
}