import { useEffect, useState } from "react";


const Stories = () => {
    const [stories, setStories] = useState([]);


    useEffect(() => {
        fetch('../../public/stories.json')
            .then(res => res.json())
            .then(data => setStories(data));
    }, [])
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 ">
            {
                stories.map((story,i) => 
                    <article className="flex bg-white transition hover:shadow-xl shadow-sm" key={i}>
                        <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                            <time
                                dateTime="2022-10-10"
                                className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
                            >
                                <span>ব্যাচ</span>
                                <span className="w-px flex-1 bg-gray-900/10" />
                                <span>{story.batch}</span>
                            </time>
                        </div>
                        <div className="hidden sm:block sm:basis-56">
                            <img
                                alt=""
                                src={story?.image || "https://i.ibb.co/T2cmY4D/doctor-6.png"}
                                className="aspect-square h-full w-full object-cover"
                            />
                        </div>
                        <div className="flex flex-1 flex-col justify-between">
                            <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                                <a href="#">
                                    <h3 className="font-bold uppercase text-gray-900">
                                       {story.name}
                                    </h3>
                                </a>
                                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                                    {story.achievement}
                                </p>
                            </div>
                            <div className="sm:flex sm:items-end sm:justify-end">
                                <a
                                    href="#"
                                    className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
                                >
                                    Read
                                </a>
                            </div>
                        </div>
                    </article>

                )
            }

            
        </div>
    );
};

export default Stories;