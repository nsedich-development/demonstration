"use client";

import Query from './query';

import {
    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function ClientApi(){

    return (
        <QueryClientProvider client={queryClient}>
                <Query/>
        </QueryClientProvider>
            
        )
}