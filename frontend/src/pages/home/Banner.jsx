import React from 'react'
import { FaRocket, FaStar, FaArrowRight } from 'react-icons/fa'
import bannerImg from '../../assets/banner.png'

export const Banner = () => {
  const handleSubscribe = () => {
    document.getElementById('footer-subscribe')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'center'
    });
  };

  const scrollToBooks = () => {
    const booksSection = document.querySelector('[data-section="books"]');
    if (booksSection) {
      booksSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='relative overflow-hidden'>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-dark-bg dark:via-slate-800 dark:to-slate-900"></div>
      
      {/* Animated Background Shapes */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl animate-float dark:bg-primary/5"></div>
      <div className="absolute top-0 right-4 w-96 h-96 bg-purple-300/20 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute -bottom-8 left-20 w-80 h-80 bg-pink-300/20 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{animationDelay: '4s'}}></div>

      <div className='relative flex flex-col md:flex-row-reverse py-16 lg:py-24 justify-center items-center gap-12 min-h-[70vh]'>
        {/* Image Section */}
        <div className='md:w-1/2 w-full flex items-center md:justify-end animate-slide-up'>
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-purple-600 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500 animate-pulse-soft"></div>
            
            {/* Main image container */}
            <div className="relative bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20 dark:border-white/10 shadow-2xl">
              <img
                src={bannerImg}
                alt="Featured Books Collection"
                className="max-w-xs md:max-w-sm lg:max-w-md w-full h-auto object-contain transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
                style={{ maxHeight: '400px' }}
              />
              
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-primary to-primary-light text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce-subtle">
                <FaStar className="inline mr-1" />
                Bestseller
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-pink-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce-subtle" style={{animationDelay: '1s'}}>
                <FaRocket className="inline mr-1" />
                Trending
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className='md:w-1/2 w-full animate-slide-up' style={{animationDelay: '0.3s'}}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-fade-in">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            Tuần này có gì mới
          </div>

          {/* Main Heading */}
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-slide-up' style={{animationDelay: '0.6s'}}>
            <span className="bg-gradient-to-r from-gray-900 via-primary to-purple-600 dark:from-white dark:via-primary-light dark:to-purple-400 bg-clip-text text-transparent">
              Khám Phá
            </span>
            <br />
            <span className="text-gray-800 dark:text-white">
              Thế Giới Sách
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary to-purple-600 dark:from-primary-light dark:to-purple-400 bg-clip-text text-transparent">
              Tuyệt Vời
            </span>
          </h1>

          {/* Description */}
          <p className='text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed animate-slide-up' style={{animationDelay: '0.9s'}}>
            Đã đến lúc cập nhật danh sách đọc sách của bạn với những 
            <span className="font-semibold text-primary dark:text-primary-light"> tác phẩm mới nhất và hay nhất</span> trong thế giới văn học. 
            Từ những cuốn tiểu thuyết giật gân đầy kịch tính đến những hồi ký cuốn hút.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 mb-8 animate-slide-up" style={{animationDelay: '1.2s'}}>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary dark:text-primary-light">1000+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Đầu sách</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary dark:text-primary-light">500+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Tác giả</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary dark:text-primary-light">50K+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Độc giả</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 animate-slide-up" style={{animationDelay: '1.5s'}}>
            <button
              onClick={handleSubscribe}
              className='group relative overflow-hidden bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-primary text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/30'
            >
              <span className="relative z-10 flex items-center gap-2">
                Đăng Ký Ngay
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </button>

            <button
              onClick={scrollToBooks}
              className='group bg-white/20 dark:bg-white/10 backdrop-blur-sm border border-white/30 dark:border-white/20 text-gray-800 dark:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 hover:bg-white/30 dark:hover:bg-white/20 hover:shadow-lg'
            >
              <span className="flex items-center gap-2">
                Khám Phá Ngay
                <div className="w-2 h-2 bg-current rounded-full animate-ping"></div>
              </span>
            </button>
          </div>

          {/* Trust indicators */}
          <div className="mt-8 flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 animate-fade-in" style={{animationDelay: '1.8s'}}>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 text-xs animate-pulse" style={{animationDelay: `${i * 0.1}s`}} />
              ))}
              <span className="ml-1">4.9/5 từ 1000+ đánh giá</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner;