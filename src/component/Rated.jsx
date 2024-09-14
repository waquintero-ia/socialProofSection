const Rated = () =>{
  return(
    <>
      <div className="container_rated w-full flex justify-center items-center xl:w-[540px]">
        <div className="content_rated w-full grid grid-rows-3 gap-y-[16px]">
          <div className="rated w-full h-[78px] bg-purple-200 rounded-[8px] flex flex-col justify-center items-center gap-[15px] xl:flex-row xl:h-[56px] xl:w-[445px]">
            <picture className="starts w-[116.5px] flex justify-between">
              <img src="/images/icon-star.svg" alt="orange star" />
              <img src="/images/icon-star.svg" alt="orange star" />
              <img src="/images/icon-star.svg" alt="orange star" />
              <img src="/images/icon-star.svg" alt="orange star" />
              <img src="/images/icon-star.svg" alt="orange star" />
            </picture>
            <p className="text-[17px] font-bold tracking-normal text-purple-900">
              Rated 5 Stars in Reviews
            </p>
          </div>
          <div className="rated w-full h-[78px] bg-purple-200 rounded-[8px] flex flex-col justify-center items-center gap-[15px] xl:flex-row xl:h-[56px] xl:w-[445px]">
            <picture className="starts w-[116.5px] flex justify-between">
              <img src="/images/icon-star.svg" alt="orange star" />
              <img src="/images/icon-star.svg" alt="orange star" />
              <img src="/images/icon-star.svg" alt="orange star" />
              <img src="/images/icon-star.svg" alt="orange star" />
              <img src="/images/icon-star.svg" alt="orange star" />
            </picture>
            <p className="text-[17px] font-bold tracking-normal text-purple-900">
              Rated 5 Stars in Report Guru
            </p>
          </div>
          <div className="rated w-full h-[78px] bg-purple-200 rounded-[8px] flex flex-col justify-center items-center gap-[15px] xl:flex-row xl:h-[56px] xl:w-[445px]">
            <picture className="starts w-[116.5px] flex justify-between">
              <img src="/images/icon-star.svg" alt="orange star" />
              <img src="/images/icon-star.svg" alt="orange star" />
              <img src="/images/icon-star.svg" alt="orange star" />
              <img src="/images/icon-star.svg" alt="orange star" />
              <img src="/images/icon-star.svg" alt="orange star" />
            </picture>
            <p className="text-[17px] font-bold tracking-normal text-purple-900">
              Rated 5 Stars in BestTech
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Rated