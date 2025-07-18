import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading';
import getBaseUrl from '../../utils/baseUrl';
import { MdIncompleteCircle } from 'react-icons/md'
import RevenueChart from './RevenueChart';

const Dashboard = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});
    const navigate = useNavigate()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response =  await axios.get(`${getBaseUrl()}/api/admin`, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`,
                        'Content-Type': 'application/json',
                    },
                })

                setData(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error:', error);
            }
        }

        fetchData();
    }, []);


    if(loading) return <Loading/>

  return (
    <>
     <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mb-8">
              {/* Total Books Card */}
              <div className="relative bg-gradient-to-br from-purple-500 to-purple-700 p-6 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <div className="flex items-center justify-between">
                  <div className="text-white">
                    <h3 className="text-sm font-medium opacity-90">Total Books</h3>
                    <p className="text-3xl font-bold mt-2">{data?.totalBooks}</p>
                    <div className="flex items-center mt-2 text-purple-100">
                      <span className="text-xs">+12% from last month</span>
                    </div>
                  </div>
                  <div className="bg-white bg-opacity-20 p-3 rounded-xl">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-20 h-20 bg-white bg-opacity-10 rounded-full -mr-10 -mt-10"></div>
              </div>

              {/* Total Sales Card */}
              <div className="relative bg-gradient-to-br from-emerald-500 to-emerald-700 p-6 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <div className="flex items-center justify-between">
                  <div className="text-white">
                    <h3 className="text-sm font-medium opacity-90">Total Sales</h3>
                    <p className="text-3xl font-bold mt-2">${data?.totalSales}</p>
                    <div className="flex items-center mt-2 text-emerald-100">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                      <span className="text-xs">+18% from last month</span>
                    </div>
                  </div>
                  <div className="bg-white bg-opacity-20 p-3 rounded-xl">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-20 h-20 bg-white bg-opacity-10 rounded-full -mr-10 -mt-10"></div>
              </div>

              {/* Trending Books Card */}
              <div className="relative bg-gradient-to-br from-orange-500 to-red-600 p-6 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <div className="flex items-center justify-between">
                  <div className="text-white">
                    <h3 className="text-sm font-medium opacity-90">Trending Books</h3>
                    <p className="text-3xl font-bold mt-2">{data?.trendingBooks}</p>
                    <div className="flex items-center mt-2 text-orange-100">
                      <span className="text-xs bg-white bg-opacity-20 px-2 py-1 rounded-full">+13% this month</span>
                    </div>
                  </div>
                  <div className="bg-white bg-opacity-20 p-3 rounded-xl">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                    </svg>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-20 h-20 bg-white bg-opacity-10 rounded-full -mr-10 -mt-10"></div>
              </div>

              {/* Total Orders Card */}
              <div className="relative bg-gradient-to-br from-blue-500 to-blue-700 p-6 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <div className="flex items-center justify-between">
                  <div className="text-white">
                    <h3 className="text-sm font-medium opacity-90">Total Orders</h3>
                    <p className="text-3xl font-bold mt-2">{data?.totalOrders}</p>
                    <div className="flex items-center mt-2 text-blue-100">
                      <span className="text-xs">+5% from last week</span>
                    </div>
                  </div>
                  <div className="bg-white bg-opacity-20 p-3 rounded-xl">
                    <MdIncompleteCircle className='w-8 h-8 text-white'/>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-20 h-20 bg-white bg-opacity-10 rounded-full -mr-10 -mt-10"></div>
              </div>
            </section>
            <section className="grid md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-3 xl:grid-flow-col gap-8">
              <div className="flex flex-col md:col-span-2 md:row-span-2 bg-white shadow-xl rounded-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-purple-500 to-blue-600 px-6 py-4">
                  <h3 className="text-white font-bold text-lg">Revenue Analytics</h3>
                  <p className="text-purple-100 text-sm">Monthly performance overview</p>
                </div>
                <div className="p-6 flex-grow">
                  <RevenueChart />
                </div>
              </div>
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-6 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="text-white">
                    <h3 className="text-sm font-medium opacity-90">Pending Orders</h3>
                    <p className="text-3xl font-bold mt-2">02</p>
                    <span className="text-xs bg-white bg-opacity-20 px-2 py-1 rounded-full mt-2 inline-block">Urgent</span>
                  </div>
                  <div className="bg-white bg-opacity-20 p-3 rounded-xl">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-teal-400 to-cyan-600 p-6 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="text-white">
                    <h3 className="text-sm font-medium opacity-90">Website Visits</h3>
                    <p className="text-3xl font-bold mt-2">139</p>
                    <span className="text-xs text-teal-100">Today</span>
                  </div>
                  <div className="bg-white bg-opacity-20 p-3 rounded-xl">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="row-span-3 bg-white shadow-xl rounded-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-bold text-lg">Top Customers</h3>
                      <p className="text-indigo-100 text-sm">By average order value</p>
                    </div>
                    <div className="bg-white bg-opacity-20 px-3 py-1 rounded-lg">
                      <span className="text-white text-xs font-medium">This Month</span>
                    </div>
                  </div>
                </div>
                <div className="overflow-y-auto" style={{maxHeight: '24rem'}}>
                  <ul className="p-6 space-y-4">
                    <li className="flex items-center">
                      <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                        <img src="data:image/jpeg;base64,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" alt=""/>
                      </div>
                      <span className="text-gray-600">Trịnh Hữu An</span>
                      <span className="ml-auto font-semibold">9.3</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                        <img src="data:image/jpeg;base64,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" alt=""/>
                      </div>
                      <span className="text-gray-600">Khải Lê</span>
                      <span className="ml-auto font-semibold">8.9</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                        <img src="data:image/jpeg;base64,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" alt=""/>
                      </div>
                      <span className="text-gray-600">Quang Huy</span>
                      <span className="ml-auto font-semibold">8.7</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                        <img src="data:image/jpeg;base64,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" alt=""/>
                      </div>
                      <span className="text-gray-600">Ngọc Hiểu</span>
                      <span className="ml-auto font-semibold">8.2</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                        <img src="https://randomuser.me/api/portraits/women/78.jpg" alt=""/>
                      </div>
                      <span className="text-gray-600">Quốc Minh</span>
                      <span className="ml-auto font-semibold">8.2</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                        <img src="data:image/jpeg;base64,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" alt=""/>
                      </div>
                      <span className="text-gray-600">Đức Thành</span>
                      <span className="ml-auto font-semibold">8.1</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjPBjQksKVfQYMCYfAfEXOO-_CmQxPHzUHmw&s" alt=""/>
                      </div>
                      <span className="text-gray-600">Nhật Quang</span>
                      <span className="ml-auto font-semibold">7.9</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_SfWqMut8-vXwAZSW0CiXwNks8ob5_3aE5A&s" alt=""/>
                      </div>
                      <span className="text-gray-600">Duy Lâm</span>
                      <span className="ml-auto font-semibold">7.7</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
    </>
  )
}

export default Dashboard