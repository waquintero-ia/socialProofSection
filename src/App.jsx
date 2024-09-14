import './App.css'
import Presentation from './component/Presentation'
import Rated from './component/Rated'
import Reviews from './component/Reviews'

function App() {

  return (
    <>
       <div className="container w-[100%] min-h-[1530px] pt-[82px] px-[24px] pb-[99px] xl:w-[1110px] xl:min-h-min xl:pt-0 xl:px-0 xl:pb-0">
          <main className='flex flex-col gap-[49px] xl:gap-[50px]'>
            <div className="content_presentation_rated flex flex-col gap-[39px] xl:flex-row xl:justify-between">
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
