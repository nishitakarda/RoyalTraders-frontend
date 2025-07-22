import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/frontend_assets/assets';

const About = () => {
  return (
    <div className='px-4 sm:px-12 pt-16 border-t text-gray-800'>
      <div className='text-4xl font-bold text-center pt-8 border-t'>
        <Title text1="AbOUT" text2="US" />
      </div>

      {/* Tagline */}
      <p className='text-center mt-4 text-xl font-medium text-gray-600'>
        Purity. Tradition. Excellence.
      </p>

      {/* About Section */}
      <div className='my-14 flex flex-col md:flex-row gap-16 items-center'>
        <img
          className='w-full md:max-w-[500px] object-cover rounded-xl shadow-lg'
          src={assets.about_img}
          alt="Royal Traders Dry Fruits"
        />
        <div className='flex flex-col justify-center gap-8 md:w-2/4 text-lg leading-relaxed text-gray-700'>
          <p className='text-2xl font-semibold'>
            Welcome to <span className='text-yellow-700'>Royal Traders</span>
          </p>
          <p>
            At Royal Traders, we bring you the **finest selection of dry fruits**, handpicked from the best farms across the country.
            Our legacy is built on trust, quality, and a passion for health and taste.
          </p>
          <p>
            With years of experience in sourcing, packaging, and delivering premium-grade dry fruits, our name stands for **luxury and wellness** combined.
          </p>
          <p>
            Whether you're gifting loved ones or nourishing your family, Royal Traders ensures **every bite speaks quality**.
          </p>
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div className='text-3xl font-bold text-center py-10'>
        WHY CHOOSE ROYAL TRADERS?
      </div>

      <div className='flex flex-col md:flex-row text-lg mb-24 gap-8'>
        {/* Quality */}
        <div className='border p-8 flex flex-col gap-4 rounded-xl shadow-md hover:shadow-xl transition'>
          <b className='text-xl text-yellow-800'>Uncompromising Quality</b>
          <p className='text-gray-700'>
            Only the **best of the best** make it to your hands. Our products go through rigorous quality checks.
          </p>
        </div>

        {/* Royal Packaging */}
        <div className='border p-8 flex flex-col gap-4 rounded-xl shadow-md hover:shadow-xl transition'>
          <b className='text-xl text-yellow-800'>Royal Packaging</b>
          <p className='text-gray-700'>
            Experience **luxury in every pack**. Our elegant, hygienic, and eco-friendly packaging ensures freshness and style.
          </p>
        </div>

        {/* Trusted Brand */}
        <div className='border p-8 flex flex-col gap-4 rounded-xl shadow-md hover:shadow-xl transition'>
          <b className='text-xl text-yellow-800'>Trusted By Generations</b>
          <p className='text-gray-700'>
            Royal Traders is a name that families have relied on for **purity, tradition, and taste** — year after year.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
