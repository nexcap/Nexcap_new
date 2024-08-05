import React from 'react'

const BlogTop = () => {
    return (
        <div className="w-full">
          <div className="flex flex-col justify-center items-center mb-5">
            {/* Container for the image background and text */}
            <div className="mt-10 w-full h-52 bg-cover bg-center bg-[url('https://horizon-ui.com/horizon-tailwind-react/static/media/Nft3.3b3e6a4b3ada7618de6c.png')]">
              <div className="w-full h-full flex justify-center items-center backdrop-brightness-50">
                <span className="text-amber-100 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[.25em] text-center">
                  BLOGS
                </span>
              </div>
            </div>
          </div>
        </div>
      );
}

export default BlogTop