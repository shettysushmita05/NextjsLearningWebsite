'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonials=[
{
quote:"I've been taking piano lessons at [Music School] for over two years now, and I can honestly say it's been a life-changing experience. The teachers are incredibly patient and knowledgeable. They not only focus on developing my technical skills but also help me develop a deeper understanding of music theory. I'm finally playing pieces I've always dreamed of mastering!",
name: 'Sarah L',
title: 'Ios Student',
},

{
  quote:"My daughter, Emily, has been a violin student at [Music School] for the past year. The growth I've seen in her playing has been extraordinary. The school's environment is warm and welcoming, and the instructors are always supportive and encouraging. Emily has gained so much confidence in her playing, and her passion for music has grown exponentially.",
  name: "Mark T",
title: "Programming Student"
},

{
  quote:"As someone who has always loved singing but was too shy to pursue it seriously, joining [Music School] was the best decision I ever made. The vocal coaches helped me find my voice and improve my technique in such a nurturing way. The classes are fun, challenging, and always encouraging. I feel more confident than ever on stage!",
  name: "Isabella G",
title: "Front end Student",
},

{
  quote:"I came to [Music School] as a complete beginner, and now I’m playing guitar in a band. The instructors are fantastic at tailoring lessons to my pace, and they make learning fun. Whether you're a beginner or an advanced musician, there’s always something to learn here.",
  name: "Michael D",
title: "Back end Student",

  
},
{
  quote:"Joining [Music School] was the best decision I made for my drumming skills. The drum instructors are so talented and make each class exciting. They challenge me but also ensure I understand each concept fully before moving forward. I’ve grown so much as a musician and have even started performing at local events!",
  name: "Chloe W",
title: "App Development Student",

}

];


function MusicSchoolTestimonials() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden ">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear our story : Journey of success</h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
        <InfiniteMovingCards
        items={musicSchoolTestimonials}
        direction="right"
        speed="slow"
      />
        </div>
      
      </div>
    </div>
  )
}

export default MusicSchoolTestimonials