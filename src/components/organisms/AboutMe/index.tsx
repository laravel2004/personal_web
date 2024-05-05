import AccordionComponent from "@/components/molecules/Accordion";
import Image from "next/image";

export default function AboutMe() {
  return (
    <div>
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#2563eb" fill-opacity="1" d="M0,64L34.3,101.3C68.6,139,137,213,206,256C274.3,299,343,309,411,298.7C480,288,549,256,617,245.3C685.7,235,754,245,823,261.3C891.4,277,960,299,1029,266.7C1097.1,235,1166,149,1234,96C1302.9,43,1371,21,1406,10.7L1440,0L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
        </svg>
      </span>
      <div className="bg-blue-600">
        <div className="p-8 lg:p-16 grid grid-cols-1 md:grid-cols-2 items-center text-slate-100  gap-4">
          <div>
            
          </div>
          <div>
            <h2 className="text-slate-100 text-5xl font-bold">About Me</h2>
            <p className="mt-4">Hello! My name is Agung Dwi Nugroho. My interest in software development started when I was in high school. During high school I learned about HTML and CSS. </p>
            <p className="mt-2">After graduating from high school, I continued studying at PENS with the Informatics Engineering study program. When I was in college, I often received orders to create websites and in my second semester, I started applying for internships at companies.</p>
            <p className="mt-2">For now, I am focusing on learning about clean code and design patterns so that I can develop software better and also make scalable products.</p>
          </div>
        </div>
      </div>
    </div>
  )
}