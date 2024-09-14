import PropTypes from 'prop-types';

const ReviewCard = ({imageProfile, name, verified, review}) =>{
  return(
    <>
      <div className="review w-full h-[248px] bg-purple-900 rounded-[8px] pt-[40px] px-[32px] pb-[35px] flex flex-col gap-[23px] xl:h-[234px]">
        <div className="review_title flex gap-[23px]">
          <picture>
            <img className="w-[40px] h-[40px] rounded-full" src={imageProfile} alt={`profile image ${name}`} />
          </picture>
          <div className="title_name flex flex-col">
            <h2 className="text-white text-[17px] font-bold">
              {name}
            </h2>
            <p className="text-[17px] text-purple-100 leading-[100%]">
              {verified}
            </p>
          </div>
        </div>
        <div className="review_description">
          <blockquote className="text-[17px] text-white font-medium leading-[125%] tracking-tight" aria-label="Colton Smith">
            &ldquo; 
            {review}
            &rdquo;
          </blockquote>
        </div>
      </div>
    </>
  )
}

ReviewCard.propTypes = {
  imageProfile: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  verified: PropTypes.string.isRequired,
  review: PropTypes.string.isRequired,
};

export default ReviewCard