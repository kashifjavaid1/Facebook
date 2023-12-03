"use client"
import Typewriter from 'typewriter-effect';
function About() {
    return(
        <>
        <div>
        <div className="text-center my-36 text-2xl">
      <h1 className='mb-4'>Typewriter animation React</h1>
      <h1>
       <Typewriter  I am 
  onInit={(typewriter) => {
    typewriter
      .typeString("Web Development")
      .pauseFor(1000)
      .deleteAll()
      .typeString("UI/UX Designer")
      .pauseFor(1000)
      .deleteAll()
      .typeString("Next.js Developer")
      .pauseFor(1000)
      .deleteAll()
      .typeString("React Developer")
      .pauseFor(1000)
      .deleteAll()
      .typeString("Mobile Developer")
      .callFunction(() => {
        console.log(
          "Web Development",
          "UI/UX Designer",
          "Next.js Developer",
          "React Developer",
          "Mobile Developer"
        );
      })
      .pauseFor(1000)
      .deleteAll()
      .callFunction(() => {
        console.log("All strings were deleted");
      })
      .start(true);
  }}
/>

         </h1>
         
         </div>

        </div>
        </>
    )
}
export default About;



<Typewriter
  onInit={(typewriter) => {
    typewriter.typeString('Hello World!')
      .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(2500)
      .deleteAll()
      .callFunction(() => {
        console.log('All strings were deleted');
      })
      .start();
  }}
/>