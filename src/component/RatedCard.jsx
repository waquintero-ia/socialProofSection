import PropTypes from 'prop-types';
import Star from './Star';

const RatedCard = ({star, title}) => {
  return(
    <>
      <div className="rated w-full h-[78px] bg-purple-200 rounded-[8px] flex flex-col justify-center items-center gap-[15px] xl:flex-row xl:h-[56px] xl:w-[445px]">
        <picture className="starts w-[116.5px] flex justify-between">
          {
            star.map((star, index) => (
              <Star
                key={`star-${title}-${star}-${index}`} 
              />
            ))
          }
        </picture>
          <p className="text-[17px] font-bold tracking-normal text-purple-900">
            {
              `Rated ${star.reduce((s,p) => {return s + p} )} Stars in ${title}`
            }
          </p>
      </div>
    </>
  )
}

RatedCard.propTypes = {
  star: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default RatedCard