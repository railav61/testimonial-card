import Testimonial from "./components/Testimonial";
import data from './data'
function App() {
   return (
    <div className='flex flex-col flex-wrap justify-center items-center min-h-screen bg-slate-300'>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='font-medium text-4xl'>Our Testimonials</h1>
        <div className='h-1 w-48 bg-gradient-to-r from-sky-400 to-indigo-600 mt-2 rounded-md'></div>
      </div>
      <div>
        <Testimonial 
        data = {data}
        />
      </div>
    </div>
  );
}
export default App;
