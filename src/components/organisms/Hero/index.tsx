import Image from 'next/image';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';

export default function Hero() {
  return (
    <div className="p-8">
      <div className="lg:flex grid grid-cols-1 lg:justify-between gap-4">
        <div className="flex justify-start flex-col gap-4">
          <h2 className='text-slate-800'>Hi! my name is</h2>
          <h1 className='text-5xl font-bold mt-2'>Agung Dwi Nugroho</h1>
          <div className='flex gap-2 text-4xl '>
            <h3 className='text-blue-600'>I'm a</h3>
            <Typewriter
              options={{
                strings: ['Back-end', 'Front-end', 'Full-stack'],
                autoStart: true,
                loop: true,
              }}
            />
            <h3>Developer!</h3>
          </div>
          <div>
            <p>I am a software engineer who specializes in designing, developing, and maintaining user experiences on web pages. Through this website, I will share many tips about developing web and mobile app.</p>
          </div>
          <div className='flex gap-4'>
            <Link href="/my-article" className='text-white bg-blue-600 px-8 py-4 text-small rounded-small'>Get Article</Link>
            <Link href="/my-project" className='text-blue-600 bg-slate-300 px-8 py-4 text-small rounded-small'>Learn More</Link>
          </div>
        </div>
        <div className='relative items-end'>
            <Image src="/images/dev.png" alt="hero" width={1000} height={800} />
            <span className='absolute -bottom-10 -z-10 left-1/2  -translate-x-1/2'>
              <svg width={500} height={500} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#2563eb" d="M32.7,-29.5C41.2,-15.4,46.2,-1.9,47.3,17.9C48.5,37.6,45.8,63.5,33.4,69.4C21.1,75.4,-0.9,61.4,-23.8,50.1C-46.7,38.8,-70.5,30.1,-72.1,17.9C-73.7,5.7,-53.1,-10.1,-37.4,-25.8C-21.6,-41.6,-10.8,-57.3,0.6,-57.8C12.1,-58.4,24.2,-43.6,32.7,-29.5Z" transform="translate(100 100)" />
              </svg>
            </span>
        </div>
      </div>
    </div>
  )
}