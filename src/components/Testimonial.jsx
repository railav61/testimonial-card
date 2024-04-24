import { useState } from "react";
import Card from "./Card";
import { FaArrowLeft,FaArrowRight } from "react-icons/fa";
function Testimonial(props){
    let review = props.data;
    let [i,setcount] = useState(0);
    function leftshifthandler(){
        if(i===0){
            setcount(review.length-1);
        }
        else{
            setcount(i-1);
        }
    }
    function rightshifthandler(){
        if(i===(review.length -1)){
            setcount(0);
        }
        else{
            setcount(i+1);
        }
    }
    function randomnum(){
        let x = Math.round(Math.random() * (review.length - 1));
        setcount(x);
    }
    return (
        <div className='h-[400px] w-[600px] mt-10 bg-white rounded-lg shadow-lg'>
            <Card review = {review[i]}></Card>
            <div className='flex flex-col items-center justify-center'>
                <div className='flex gap-4 text-2xl mt-10'>
                    <FaArrowLeft onClick={leftshifthandler} className='w-8 h-8 text-blue-500 cursor-pointer'/>
                    <FaArrowRight onClick={rightshifthandler} className='w-8 h-8 text-blue-500 cursor-pointer'/>
                </div>

                <div onClick={randomnum} className='flex items-center justify-center mt-5 w-28 h-10 bg-indigo-600 rounded-md text-white shadow-lg font-medium'>
                    <button className=''>Surprise Me</button>
                </div>
            </div>
        </div>)
}

export default Testimonial;