import { BiArrowFromLeft} from "react-icons/bi";

const Hero = () => {
  return (
    <section className='space-y-4 flex-col items-center justify-center text-center mx-auto p-8'>
      <h1 className='text-8xl font-bold capitalize sm:text-2xl '>
        A tracker for your job applications
      </h1>
      <p className='text-gray-600'>Apply,manage and organize in this app</p>
      <button className='btn-primary text-2xl mx-auto flex gap-1 place-items-center'>Start for free<BiArrowFromLeft/></button>
      <br />
      <small>No credit cards</small>
    </section>
  );
};

export default Hero;
