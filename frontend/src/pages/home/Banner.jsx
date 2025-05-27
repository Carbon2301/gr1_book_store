import React from 'react'

import bannerImg from '../../assets/banner.png'

export const Banner = () => {
  return (
    <div className='flex flex-col md:flex-row-reverse py-16 justify-center items-center gap-12'>
        <div className='md:w-1/2 w-full flex items-center md:justify-end'>
            <img
                src={bannerImg}
                alt="banner"
                className="max-w-xs md:max-w-sm lg:max-w-md w-full h-auto object-contain"
                style={{ maxHeight: '350px' }}
            />
        </div>

        <div className='md:w-1/2 w-full'>
            <h1 className='md:text-5xl text-2xl font-medium mb-7'>Sách mới tuần này</h1>
            <p className='mb-10'>Đã đến lúc cập nhật danh sách đọc sách của bạn với một số tác phẩm
                mới nhất và hay nhất trong thế giới văn học. Từ những cuốn tiểu thuyết giật gân
                đầy kịch tính đến những hồi ký cuốn hút, loạt sách mới phát hành trong tuần này
                có điều gì đó dành cho tất cả mọi người.
            </p>

            <button
              className='btn-primary'
              onClick={() => {
                document.getElementById('footer-subscribe')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Subscribe
            </button>
        </div>

    </div>
  )
}

export default Banner;