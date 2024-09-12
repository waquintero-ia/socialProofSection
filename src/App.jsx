import './App.css'
import Presentation from './component/Presentation'
import Rated from './component/Rated'

function App() {

  return (
    <>
       <div className="container w-[100%] min-h-[1530px] pt-[82px] px-[24px] pb-[99px] gap-[49px]">
          <main>
            <div className="content_presentation_rated flex flex-col gap-[39px]">
              <Presentation />
              <Rated />
            </div>
              
          </main>
       </div>
    </>
  )
}

export default App
