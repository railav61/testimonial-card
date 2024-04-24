
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
function Card(props){
    let review = props.review;
    return(
        <div className='flex flex-col justify-center items-center relative'>
            <div>
                <div className='absolute h-28 w-28 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 top-[-55px] left-7'></div>
                <img src={review.image} className='absolute top-[-50px] left-5 h-28 w-28 rounded-full' />
            </div>
            <div className='mt-5 text-center'>
                <h2 className='text-2xl font-medium'>{review.name}</h2>
                <p className='text-blue-400 text-xs font-medium opacity-70 uppercase'>{review.job}</p>
            </div>
            <div className='flex flex-col justify-center items-center mt-14'>
                <div className='mb-5'>
                <FaQuoteLeft className='text-blue-500' />
                </div>

                <div className='pl-10 pr-10 text-center'>
                    {review.bio}
                </div>

                <div className='mt-5'>
                <FaQuoteRight className='text-blue-500' />
                </div>
            </div>
        </div>
    )
}

export default Card;