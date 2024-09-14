import './App.css'
import Presentation from './component/Presentation'
import Rated from './component/Rated'
import Reviews from './component/Reviews'

function App() {

  return (
    <>
       <div className="container w-[100%] pt-82 px-[6.4%] pb-99 xl:w-1110 xl:min-h-min xl:pt-0 xl:px-0 xl:pb-0">
          <main className='flex flex-col gap-49 xl:gap-50'>
            <div className="content_presentation_rated flex flex-col gap-39 xl:flex-row xl:justify-between">
              <Presentation />
              <Rated />
            </div>
              <Reviews />
          </main>
       </div>
    </>
  )
}

export default App
