// import Card from "./Card"

const Banner = () => {
    return (
        <div>
            <section className="relative bg-[url(https://i.ibb.co/c8FWTV0/school.jpg)] bg-cover bg-center bg-no-repeat">
                <div className="absolute inset-0  sm:bg-transparent sm:from-black/60 sm:to-white/50 sm:bg-gradient-to-r " />
                <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
                    <div className="max-w-xl text-center sm:text-left ">
                        <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
                            এসো মিলি  প্রাণের বন্ধনে,
                            <strong className="block font-extrabold text-red-600">
                                {" "}
                                মনের উচ্ছ্বাসে {" "}
                            </strong>
                        </h1>
                        <p className="mt-4 max-w-lg sm:text-xl/relaxed">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
                            tenetur fuga ducimus numquam ea!
                        </p>
                        <div className="mt-8 flex flex-wrap gap-4 text-center">
                            <a
                                href="#"
                                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                            >
                                Get Started
                            </a>
                            <a
                                href="#"
                                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>

            </section>

           

        </div>
    );
};

export default Banner;