import React from 'react'

function testimonials() {
  const testimonialData = [
    {
      id: 1,
      name: "Ravish Agnihotri",
      message: "Joseph joined my Cloud Portfolio as a associate software engineer. He has been a consistent performer. Initially it took time for him to get into the corporate culture. However as time passed he adapted the corporate nuances really well and started delivering efficiently. His strengths are being Calm and Patient in difficult situation. Clear communication, Team Player and possess a matured Outlook when it comes to dealing with difficult situations. In last 2 years, he has very well picked up AWS Cloud, DevOps and automation skills. Lastly, when on stage with Guitar in hand, He rocks like a true performer. Wishing him all the best for his future. If our paths cross again, I would definitely like to work with him again.", 
      organization: "Volkswagen"
    },
    {
      id: 2,
      name: "Mayank Soni",
      message: "It has been a pleasure to work with Joseph on the Landing Zone Project for past one and a half years at VWIT. I can say that Joseph was one of the most dedicated, insightful and knowledgeable members of the team. His extensive knowledge and expertise on the AWS Cloud and hard work towards assigned responsibilities and assignment have contributed significantly to the Landing Zone Project. Joseph's dedication and sincerity in his work are exceptional. I would highly recommend Joseph for future opportunities.",
      organization: "Volkswagen"
    },
    {
      id: 3,
      name: "Ritik Kesharwani",
      message: "Joseph and I were colleagues on the same team, and I wholeheartedly endorse him for his exceptional coding skills and profound AWS knowledge. He consistently produces top-notch work of the highest quality. What sets Joseph apart is that his actions truly speak louder than words.",
      organization: "Volkswagen"
    }
  ];

  return (
    <div className="py-16 bg-radial-[at_100%_0%] from-rebecca-purple to-black to-60% px-4 sm:px-44">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4 font-FjallaOne">
            Recommendations
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 gap-8">
          {testimonialData.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-gray-900 rounded-lg pt-6 px-4 pb-2 shadow-lg relative "
            >
              {/* Quote Icon */}
              <div className="absolute -top-5 -left-5 text-white opacity-20">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>

              {/* Message */}
              <div className="mb-2">
                <p className="text-gray-300 text-sm leading-relaxed italic">
                  "{testimonial.message}"
                </p>
              </div>

              {/* Author Info */}
              <div className="border-t border-gray-700 pt-2 font-FjallaOne">
                <h4 className="text-white font-semibold text-lg mb-1">
                  {testimonial.name}
                </h4>
                <p className="text-gray-500 text-sm font-medium">
                  {testimonial.organization}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-end mt-4">
          <a 
            href="https://arc.net/l/quote/otxrbpbh"
            target='_blank' 
            className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
          >
            View on LinkedIn &rarr;
          </a>
        </div>
      </div>
    </div>
  )
}

export default testimonials