import './App.css'
import Presentation from './component/Presentation'

function App() {

  return (
    <>
       <div className="container w-[100%] min-h-[1530px] pt-[82px] px-[24px] pb-[99px]">
          <main>
            <div className="content_presentation_rated flex flex-col gap-[39px]">
              <Presentation />
              
            </div>
            
          </main>
       </div>
    </>
  )
}

export default App
