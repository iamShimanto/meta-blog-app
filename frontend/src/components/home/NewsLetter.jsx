import React from "react";

const NewsLetter = () => {
  return (
    <>
      <section className="my-16">
        <div className="container bg-[url(/images/newsletter.png)] bg-cover bg-no-repeat py-16 text-center">
          <h2 className="text-2xl font-bold text-white leading-8">
            Sign up for our newsletter
          </h2>
          <p className="text-lg font-normal text-white leading-7 my-3">
            Get the latest news, updates, and offers straight to your inbox
          </p>
          <button className="px-8 py-2.5 bg-white text-black rounded-full text-base font-bold leading-6 cursor-pointer hover:bg-primary duration-300">
            Sign up
          </button>
        </div>
      </section>
    </>
  );
};

export default NewsLetter;
