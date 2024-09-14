const Reviews = () =>{
  return(
    <>
      <div className="container_reviews w-full flex justify-center items-center">
        <div className="reviews_content w-full grid grid-rows-3 gap-y-[16px] xl:grid-cols-3 xl:grid-rows-none xl:gap-x-[30px]">
          <div className="review w-full h-[248px] bg-purple-900 rounded-[8px] pt-[40px] px-[32px] pb-[35px] flex flex-col gap-[23px] xl:h-[234px]">
            <div className="review_title flex gap-[23px]">
              <picture>
                <img className="w-[40px] h-[40px] rounded-full" src="/images/image-colton.jpg" alt="profile image colton" />
              </picture>
              <div className="title_name flex flex-col">
                <h2 className="text-white text-[17px] font-bold">
                  Colton Smith
                </h2>
                <p className="text-[17px] text-purple-100 leading-[100%]">
                  Verified Buyer
                </p>
              </div>
            </div>
            <div className="review_description">
              <blockquote className="text-[17px] text-white font-medium leading-[125%] tracking-tight" aria-label="Colton Smith">
                &ldquo; 
                We needed the same printed design as the one we had ordered a week prior. 
                Not only did they find the original order, but we also received it in time. 
                Excellent! 
                &rdquo;
              </blockquote>
            </div>
          </div>
          <div className="review w-full h-[248px] bg-purple-900 rounded-[8px] pt-[40px] px-[32px] pb-[35px] flex flex-col gap-[23px] xl:h-[234px]">
            <div className="review_title flex gap-[23px]">
              <picture>
                <img className="w-[40px] h-[40px] rounded-full" src="/images/image-irene.jpg" alt="profile image colton" />
              </picture>
              <div className="title_name flex flex-col">
                <h2 className="text-white text-[17px] font-bold">
                  Irene Roberts
                </h2>
                <p className="text-[17px] text-purple-100 leading-[100%]">
                  Verified Buyer
                </p>
              </div>
            </div>
            <div className="review_description">
              <blockquote className="text-[17px] text-white font-medium leading-[125%] tracking-tight" aria-label="Irene Roberts">
                &ldquo; 
                  Customer service is always excellent and very quick turn around. Completely
                  delighted with the simplicity of the purchase and the speed of delivery.
                  &ldquo;
              </blockquote>
            </div>
          </div>
          <div className="review w-full h-[248px] bg-purple-900 rounded-[8px] pt-[40px] px-[32px] pb-[35px] flex flex-col gap-[23px] xl:h-[234px]">
            <div className="review_title flex gap-[23px]">
              <picture>
                <img className="w-[40px] h-[40px] rounded-full" src="/images/image-anne.jpg" alt="profile image colton" />
              </picture>
              <div className="title_name flex flex-col">
                <h2 className="text-white text-[17px] font-bold">
                  Anne Wallace
                </h2>
                <p className="text-[17px] text-purple-100 leading-[100%]">
                  Verified Buyer
                </p>
              </div>
            </div>
            <div className="review_description">
              <blockquote className="text-[17px] text-white font-medium leading-[125%] tracking-tight" aria-label="Anne Wallace">
                &ldquo;
                Put an order with this company and can only praise them for the very high
                standard. Will definitely use them again and recommend them to everyone!
                &ldquo;
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Reviews