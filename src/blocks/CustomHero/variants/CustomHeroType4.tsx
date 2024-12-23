import React from 'react';

export const CustomHeroType4 = () => {
    return (
        <section className="w-full min-h-[90vh] flex flex-col items-center justify-center bg-cover bg-no-repeat" style={{ backgroundImage: 'url(https://res.cloudinary.com/dz3facqgc/image/upload/v1734076098/vcnlnmgiijermbyaty6u.jpg)' }}>
            <div className="w-full px-6 lg:w-4/5 mx-auto text-center">
                <h1 className="text-white text-4xl lg:text-5xl font-bold leading-tight lg:leading-[4.5rem]">
                    Transforming the region’s <span className="text-primary">media</span> landscape
                </h1>
                <p className="text-white text-base lg:text-lg leading-relaxed mt-5 w-full md:w-4/5 mx-auto">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maiores esse temporibus actium quas
                    soluta quis sed rerum.
                </p>

                <div className="flex flex-col md:flex-row items-center gap-6 justify-center mt-8">
                    <button className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition">
                        Contact Us
                    </button>
                    <button className="flex items-center gap-2 text-white border-b-2 border-transparent hover:text-primary hover:border-primary transition group">
                        Know More
                        {/* <GoArrowRight className="text-lg group-hover:ml-2 transition-all duration-300 group-hover:text-primary" /> */}
                    </button>
                </div>
            </div>
        </section>
    );
};