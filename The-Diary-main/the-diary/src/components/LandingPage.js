import React, {useState} from 'react';
import { Link, animateScroll as scroll, } from 'react-scroll'
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import bgImg from './assets/diary2.png'
import { CheckIcon } from '@heroicons/react/outline';
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
} from 'react-icons/fa'
function LandingPage({setState}) {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  const handleClose =()=> setNav(!nav)
  return (
  <>
    <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
          <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>The Diary.</h1>
          <ul className='hidden md:flex'>
          <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
          <li><Link to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
          <li><Link to="support" smooth={true} offset={-150} duration={500}>Features</Link></li>
          <li><Link to="faqs" smooth={true} offset={-40} duration={500}>FAQs</Link></li>
          <li><Link to="foot" smooth={true} offset={-50} duration={500}>Support</Link></li>
          </ul>
          <div className='md:hidden mr-4' onClick={handleClick}>
            {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}
          
          </div>
        </div>

      <ul className= {!nav ? "hidden" : "md:hidden absolute bg-zinc-200 w-full px-8"}  >
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="home" smooth={true} duration={500}>Home</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="support" smooth={true} offset={-50} duration={500}>Features</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="platforms" smooth={true} offset={-100} duration={500}>FAQs</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="pricing" smooth={true} offset={-50} duration={500}>Support</Link></li>
      </ul>
       </div>
    </div>

    <div name='home' className='w-full h-screen bg-white flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                <p className='text-2xl'>A Social Media Website with</p>
                <h1 className='py-3 text-5xl md:text-7xl font-bold'>Awesome Features</h1>
                <p className='text-2xl'>Create your new Diary account</p>
                <button className='py-3 px-3 sm:w-[60%] my-4 font-semibold rounded-full border-white bg-pink-600' onClick={() => setState(1)}>GET STARTED</button>
            </div>
            <div>
                <img className='w-full' src={bgImg} alt="/" />
            </div>
        </div>
    </div>

    <div name='about' className='w-full my-32'>
          <div className='max-w-[1240px] mx-auto'>
              <div className='text-center'>
                  <h2 className='text-5xl font-bold'>Million+ Users across the Globe</h2>
                  <p className='text-3xl py-6 text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque asperiores earum placeat veritatis dignissimos itaque.</p>
              </div>
  
              <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
                  <div className='border py-8 rounded-xl shadow-xl' >
                      <p className='text-6xl font-bold text-indigo-600'>100%</p>
                      <p className='text-gray-400 mt-2'>Secure</p>
                  </div>
                  <div  className='border py-8 rounded-xl shadow-xl' >
                      <p className='text-6xl font-bold text-indigo-600'>NNN</p>
                      <p className='text-gray-400 mt-2'>Header</p>
                  </div>
                  <div className='border py-8 rounded-xl shadow-xl' >
                      <p className='text-6xl font-bold text-indigo-600'>100K+</p>
                      <p className='text-gray-400 mt-2'>Diarists</p>
                  </div>
              </div>
          </div>
      </div>

      <div name='support' className='w-full my-32'>
    <div className='max-w-[1240px] mx-auto px-2'>
      <h2 className='text-5xl font-bold text-center'>
        
        All-In-One Platform</h2>
      <p className='text-2xl py-8 text-gray-500 text-center'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis,
        ab. Officia sunt nulla aspernatur culpa, eaque tenetur excepturi
        nostrum tempore.
      </p>

      <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4'>

        <div className='flex'>
          <div>
            <CheckIcon className='w-7 mr-4 text-green-600' />
          </div>
          <div>
            <h3 className='font-bold text-lg'>  Header</h3>
            <p className='text-lg pt-2 pb-4'>
             ggggggggggggggggggggggg
             ggggggggggggggggggggggg
             ggggggggggggggggggggggg
            </p>
          </div>
        </div>
        <div className='flex'>
          <div>
            <CheckIcon className='w-7 mr-4 text-green-600' />
          </div>
          <div>
            <h3 className='font-bold text-lg'>Header</h3>
            <p className='text-lg pt-2 pb-4'>
             ggggggggggggggggggggggg
             ggggggggggggggggggggggg
             ggggggggggggggggggggggg
            </p>
          </div>
        </div>
        <div className='flex'>
          <div>
            <CheckIcon className='w-7 mr-4 text-green-600' />
          </div>
          <div>
            <h3 className='font-bold text-lg'>Header</h3>
            <p className='text-lg pt-2 pb-4'>
             ggggggggggggggggggggggg
             ggggggggggggggggggggggg
             ggggggggggggggggggggggg
            </p>
          </div>
        </div>
        <div className='flex'>
        
          <div>
            <CheckIcon className='w-7 mr-4 text-green-600 ' />
          </div>
          <div>
            <h3 className='font-bold text-lg space-xl'>Header</h3>
            <p className='text-lg pt-2 pb-4'>
             ggggggggggggggggggggg
             ggggggggggggggggggggg
             ggggggggggggggggggggg
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div name='faqs'>
<section class="pt-24 pb-36 overflow-hidden">
<div class="container mx-auto px-3">
<h2 class="mb-14 font-heading font-semibold text-center text-6xl sm:text-7xl text-gray-900">Frequently asked question</h2>
<div class="max-w-2xl mx-auto bg-gradient-cyan p-0.5">
  <div class="flex flex-wrap">
    <div class="w-full">
      <a href="#">
        <div class="pb-0.5 bg-gradient-cyan">
          <div class="py-3.5 px-5 bg-white">
            <div class="flex flex-wrap items-center justify-between -m-2">
              <div class="w-auto p-2">
                <p class="font-heading font-semibold text-lg text-gray-900">Is it really unlimited downloads?</p>
              </div>
              <div class="w-auto p-2">
                <svg width="18" height="18" viewbox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.5 3.75L15.75 9M15.75 9L10.5 14.25M15.75 9L2.25 9" stroke="#111827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
    <div class="w-full">
      <a href="#">
        <div class="pb-0.5 bg-gradient-cyan">
          <div class="py-3.5 px-5 bg-white">
            <div class="flex flex-wrap justify-between -m-2">
              <div class="flex-1 p-2">
                <p class="mb-5 font-heading font-semibold text-lg text-gray-900">Do you offer discounts on annual plans?</p>
                <p class="text-base text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis euismod ornare aenean ut justo elit amet. Gravida pulvinar ac elementum praesent vel quis accumsan, proin rhoncus.</p>
              </div>
              <div class="w-auto p-2">
                <svg width="18" height="18" viewbox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.75 7.5L9 2.25M9 2.25L14.25 7.5M9 2.25V15.75" stroke="#111827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
    <div class="w-full">
      <a href="#">
        <div class="pb-0.5 bg-gradient-cyan">
          <div class="py-3.5 px-5 bg-white">
            <div class="flex flex-wrap items-center justify-between -m-2">
              <div class="w-auto p-2">
                <p class="font-heading font-semibold text-lg text-gray-900">What kind of file do you offer with the packages?</p>
              </div>
              <div class="w-auto p-2">
                <svg width="18" height="18" viewbox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.5 3.75L15.75 9M15.75 9L10.5 14.25M15.75 9L2.25 9" stroke="#111827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
    <div class="w-full">
      <a href="#">
        <div class="pb-0.5 bg-gradient-cyan">
          <div class="py-3.5 px-5 bg-white">
            <div class="flex flex-wrap items-center justify-between -m-2">
              <div class="w-auto p-2">
                <p class="font-heading font-semibold text-lg text-gray-900">Can I invite my team members?</p>
              </div>
              <div class="w-auto p-2">
                <svg width="18" height="18" viewbox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.5 3.75L15.75 9M15.75 9L10.5 14.25M15.75 9L2.25 9" stroke="#111827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
    <div class="w-full">
      <a href="#">
        <div>
          <div class="py-3.5 px-5 bg-white">
            <div class="flex flex-wrap items-center justify-between -m-2">
              <div class="w-auto p-2">
                <p class="font-heading font-semibold text-lg text-gray-900">What is your refund policy?</p>
              </div>
              <div class="w-auto p-2">
                <svg width="18" height="18" viewbox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.5 3.75L15.75 9M15.75 9L10.5 14.25M15.75 9L2.25 9" stroke="#111827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</div>
</div>
</section>
</div>

<div name="foot">
    <div className='w-full mt-24 bg-slate-900 text-gray-300 py-y px-2'>
        <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
            
            <div>
                <h6 className='font-bold uppercase pt-2'>Support</h6>
                <ul>
                    <li className='py-1'>Guides</li>
                    <li className='py-1'>API Status</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2'>Company</h6>
                <ul>
                    <li className='py-1'>About</li>
                    <li className='py-1'>Blog</li>
                    <li className='py-1'>Partners</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2n'>Legal</h6>
                <ul>
                    <li className='py-1'>Claims</li>
                    <li className='py-1'>Privacy</li>
                    <li className='py-1'>Terms</li>
                    <li className='py-1'>Policies</li>
                    <li className='py-1'>Conditions</li>
                </ul>
            </div>
            <div className='col-span-2 pt-8 md:pt-2'>
                <p className='font-bold uppercase'>Subscribe to our newsletter</p>
                <p className='py-4'>The latest news, articles, and resources, sent to your inbox weekly.</p>
                <form className='flex flex-col sm:flex-row text-center'>
                    <input className='w-full p-2 mr-4 rounded-md mb-4' type="email" placeholder='Enter email..'/>
                    <button className='px-5 py-2 mb-3 text-center'>Subscribe</button>
                </form>
            </div>
        </div>

        <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
        <p className='py-4'>2022  LLC. All rights reserved</p>
        <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaTwitch />
            <FaGithub />
        </div>
        </div>
    </div>
    </div>
    </>
  )
};
export default LandingPage