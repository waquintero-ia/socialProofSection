import PropTypes from 'prop-types';
import Star from './Star';

const RatedCard = ({star, title}) => {
  return(
    <>
      <div className="rated w-full h-78 bg-purple-200 rounded-[8px] flex flex-col justify-center items-center gap-15 xl:flex-row xl:h-14 xl:w-445">
        <div className="starts w-116.5 flex justify-between">
          {
            star.map((star, index) => (
              <Star
                key={`star-${title}-${star}-${index}`} 
              />
            ))
          }
        </div>
          <p className="text-17 font-bold tracking-normal text-purple-900">
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