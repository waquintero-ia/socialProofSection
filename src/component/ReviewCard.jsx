import PropTypes from 'prop-types';

const ReviewCard = ({imageProfile, name, verified, review}) =>{
  return(
    <>
      <div className="review w-full h-248 bg-purple-900 rounded-[8px] pt-10 px-8 pb-35 flex flex-col gap-23 xl:h-234">
        <div className="review_title flex gap-23">
          <picture>
            <img className="w-10 h-10 rounded-full" src={imageProfile} alt={`profile image ${name}`} />
          </picture>
          <div className="title_name flex flex-col">
            <h2 className="text-white text-17 font-bold">
              {name}
            </h2>
            <p className="text-17 text-purple-100 leading-100">
              {verified}
            </p>
          </div>
        </div>
        <div className="review_description">
          <blockquote className="text-17 text-white font-medium leading-125 tracking-tight" aria-label="Colton Smith">
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