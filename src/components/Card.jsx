import Aos from "aos";
import { useEffect, useState } from "react";


const Card = () => {

    const [events, setEvents] = useState([]);

    useEffect(() => {
        Aos.init({
            duration: 1000,
        });
    }, [])



    useEffect(() => {
        fetch('../../public/events.json')
            .then(res => res.json())
            .then(data => setEvents(data));
    }, [])

    console.log({ events });

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 m-10" data-aos="fade-up" data-aos-delay="100">
                {
                    events.slice(0,5).map((event, i) => 
                        <article className="group gap-3" key={i} data-aos="fade-up" data-aos-delay="200" >
                            <img
                                alt=""
                                src={event?.image || "https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"}
                                className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
                            />

                            <div className="p-4">
                                <a href="#">
                                    <h3 className="text-lg font-bold text-gray-900">{event?.title}</h3>
                                </a>
                                <small className="text-black">{ event?.date}</small>

                                <p className="mt-2 line-clamp-3 text-sm/relaxed  text-black">
                                    {event?.description}
                                </p>
                            </div>
                        </article>
                    )
                }
            </div>
       </div>
    );
};

export default Card;