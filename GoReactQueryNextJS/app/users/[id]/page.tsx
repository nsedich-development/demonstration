export default function userDetails({ 
    params,
}: {
    params: { id: string };
}){
    return (
        <section className="py-24">
          <div className="container">
            <h1>Details about the user {params.id} </h1>
          </div>
        </section>
      )
}