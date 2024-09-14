import ReviewCard from "./ReviewCard"
import review from "../data/review.json"

const Reviews = () =>{
  return(
    <>
      <div className="container_reviews w-full flex justify-center items-center">
        <div className="reviews_content w-full grid grid-rows-3 gap-y-[16px] xl:grid-cols-3 xl:grid-rows-none xl:gap-x-[30px]">
          {
            review.map(review => (
              <ReviewCard 
                key={review.title} 
                imageProfile={review.imageProfile}
                name={review.name}
                verified={review.verified}
                review={review.review}
              />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Reviews