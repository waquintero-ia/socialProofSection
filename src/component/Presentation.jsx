const Presentation = () => {
  return(
    <>
      <div className="container_presentation w-full flex justify-center items-center xl:w-[445px] xl:justify-start xl:items-start">
        <div className="content_presentation flex flex-col gap-[24px] text-center xl:text-left">
          <h1 className="text-[40px] font-bold text-purple-900 leading-[80%] tracking-tight xl:text-[56px] xl:leading-[85%]">
            10,000+ of our users love our products.  
          </h1>
          <p className="text-[19] font-medium text-purple-600 leading-[155%] tracking-wide xl:text-[18px] xl:tracking-normal xl:leading-[140%]" role="contentinfo">
            We only provide great products combined with excellent customer service.
            See what our satisfied customers are saying about our services.
          </p>
        </div>
      </div>
    </>
  )
}

export default Presentation