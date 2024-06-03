import { Suspense } from 'react'
import { revalidatePath } from 'next/cache'
import Header from '@/components/Header'
import ClientApi from '@/components/ClientAPI'

async function ListsPhotos(props: any){
    return (
        <ul>
            {props.data.map(({AlbumId,ID,Title,Url,ThumbnailUrl})=>(
                <li key={ID}>{ID}</li>
            ))}
        </ul>
    )
}

async function ListsComments(props: any){
    return (
        <ul>
            {props.data.map(({postId, id, name, email, body})=>(
                <li key={id}>{id}</li>
            ))}
        </ul>
    )
}

async function myPhotos() {
    const res = await fetch("http://localhost:8080/photos")
    const allPostsData = await res.json()
	revalidatePath('/users')
    return allPostsData
}

async function myComments() {
    const res = await fetch("https://jsonplaceholder.typicode.com/comments")
    const allPostsData = await res.json()
    return allPostsData
}

export default async function userLists(){

    const getPhotos = myPhotos()
    const getComments = myComments()

    const [photos, comments] = await Promise.all([getPhotos, getComments])

    //const photos = await getPhotos;
    //const comments = await getComments;
    
    return (
        <section className="py-24">
          <div className="container">
            <Header name="Server/Client"></Header>
            <div className="grid grid-cols-4 gap-4">
                <div>
                    <h1>Feed Photos</h1>
                    <Suspense fallback={<p>Loading feed photos...</p>}>
                        <ListsPhotos data={photos} />
                    </Suspense>
                </div>
                <div>
                    <h1>Feed Comments</h1>
                    <Suspense fallback={<p>Loading feed comments...</p>}>
                        <ListsComments data={comments} />
                    </Suspense>
                </div>
                <div>
                    <h1>Client Side</h1>
                    <ClientApi/>
                </div>
            </div>
          </div>
        </section>
      )
}