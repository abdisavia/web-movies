
import RootLayout from './layout';
import MovieLayout from "@/components/Layouts/MovieLayout";
import Card from "@/components/Fragments/Card";
import getData from "./libs/getMovies/index.jsx"

export default async function Home() {
  const movies = await getData();  

  return (
    <RootLayout>
      <MovieLayout>
        <div className=''>
          <div className="m-5 grid grid-cols-4 gap-4">
            {movies.Search.map(movie => {
              return(
                <Card 
                  ImageUrl={movie.Poster}
                  title={movie.Title} 
                  desc={movie.Year}
                />
              )
            })}
          </div>
        </div>
      </MovieLayout>
    </RootLayout>
  )
}
