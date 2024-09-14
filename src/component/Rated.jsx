import rated from '../data/rated.json'
import RatedCard from './RatedCard'

const Rated = () =>{
  return(
    <>
      <div className="container_rated w-full flex justify-center items-center xl:w-540">
        <div className="content_rated w-full grid grid-rows-3 gap-y-4">
           {
             rated.map(rated => (
              <RatedCard 
                key={rated.title} 
                star={rated.stars}
                title={rated.title}
              />
            ))
           }
        </div>
      </div>
    </>
  )
}

export default Rated