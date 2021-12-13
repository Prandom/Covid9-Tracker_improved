import React from 'react'
import './news.css'
import { motion } from 'framer-motion';
const News = () => {
    return (
        <div className='news flex flex-col items-center justify-center bg-blue-400'>
            <h1 className='head mt-3 uppercase text-5xl text-gray-100 font-black right tracking-wider'>News</h1>
            <ul className="newslist container mont">
                <motion.li className="newsArticle "
                 animate={{
                    y:4,
                    opacity:1
                }}
                initial={{
                    opacity:0,
                    y:-50
                }}
                transition={{
                    duration:0.5
                }}>
                    <h3>Headline: Lorem, ipsum dolor.</h3>
                    <p className='content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime non alias, vitae assumenda incidunt distinctio ullam, itaque praesentium repudiandae sint nisi. Facere, nobis repellat. Voluptatum aliquam labore quasi exercitationem numquam molestiae. Quo reiciendis dicta tenetur quasi facere sequi minima, est omnis nostrum nisi architecto magni animi et sapiente, laudantium soluta eligendi dolor neque. Ex, sint corporis quo libero architecto ducimus. Labore natus earum deserunt ea odit! Accusantium odio exercitationem dignissimos officia consectetur laborum dolore ab nisi iure fuga magnam numquam dolorem veniam harum, nesciunt labore reiciendis molestiae dicta ea! Molestias corrupti possimus velit culpa recusandae expedita magnam perspiciatis dicta sint.</p>
                    <p className='link-cont'><a href="/#" className='links text-red-600'>Read More</a></p>
                </motion.li>
                <motion.li className="newsArticle"
                animate={{
                    x:4,
                    opacity:1
                }}
                initial={{
                    opacity:0,
                    x:-50
                }}
                transition={{
                    duration:0.65
                }}>
                    <h3>Headline: Lorem, ipsum dolor.</h3>
                    <p  className='content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime non alias, vitae assumenda incidunt distinctio ullam, itaque praesentium repudiandae sint nisi. Facere, nobis repellat. Voluptatum aliquam labore quasi exercitationem numquam molestiae. Quo reiciendis dicta tenetur quasi facere sequi minima, est omnis nostrum nisi architecto magni animi et sapiente, laudantium soluta eligendi dolor neque. Ex, sint corporis quo libero architecto ducimus. Labore natus earum deserunt ea odit! Accusantium odio exercitationem dignissimos officia consectetur laborum dolore ab nisi iure fuga magnam numquam dolorem veniam harum, nesciunt labore reiciendis molestiae dicta ea! Molestias corrupti possimus velit culpa recusandae expedita magnam perspiciatis dicta sint.</p>
                    <p className='link-cont'><a href="/#" className='links text-red-600'>Read More</a></p>
                </motion.li>
                <motion.li className="newsArticle"
                animate={{
                    x:4,
                    opacity:1
                }}
                initial={{
                    opacity:0,
                    x:-50
                }}
                transition={{
                    duration:0.75
                }}>
                    <h3>Headline: Lorem, ipsum dolor.</h3>
                    <p  className='content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime non alias, vitae assumenda incidunt distinctio ullam, itaque praesentium repudiandae sint nisi. Facere, nobis repellat. Voluptatum aliquam labore quasi exercitationem numquam molestiae. Quo reiciendis dicta tenetur quasi facere sequi minima, est omnis nostrum nisi architecto magni animi et sapiente, laudantium soluta eligendi dolor neque. Ex, sint corporis quo libero architecto ducimus. Labore natus earum deserunt ea odit! Accusantium odio exercitationem dignissimos officia consectetur laborum dolore ab nisi iure fuga magnam numquam dolorem veniam harum, nesciunt labore reiciendis molestiae dicta ea! Molestias corrupti possimus velit culpa recusandae expedita magnam perspiciatis dicta sint.</p>
                    <p className='link-cont'><a href="/#" className='links text-red-600'>Read More</a></p>
                </motion.li>
                <motion.li className="newsArticle"
                animate={{
                    x:4,
                    opacity:1
                }}
                initial={{
                    opacity:0,
                    x:-50
                }}
                transition={{
                    duration:0.85
                }}>
                    <h3>Headline: Lorem, ipsum dolor.</h3>
                    <p  className='content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime non alias, vitae assumenda incidunt distinctio ullam, itaque praesentium repudiandae sint nisi. Facere, nobis repellat. Voluptatum aliquam labore quasi exercitationem numquam molestiae. Quo reiciendis dicta tenetur quasi facere sequi minima, est omnis nostrum nisi architecto magni animi et sapiente, laudantium soluta eligendi dolor neque. Ex, sint corporis quo libero architecto ducimus. Labore natus earum deserunt ea odit! Accusantium odio exercitationem dignissimos officia consectetur laborum dolore ab nisi iure fuga magnam numquam dolorem veniam harum, nesciunt labore reiciendis molestiae dicta ea! Molestias corrupti possimus velit culpa recusandae expedita magnam perspiciatis dicta sint.</p>
                    <p className='link-cont'><a href="/#" className='links text-red-600'>Read More</a></p>
                </motion.li>
                <motion.li className="newsArticle"
                animate={{
                    x:4,
                    opacity:1
                }}
                initial={{
                    opacity:0,
                    x:-50
                }}
                transition={{
                    duration:1
                }}>
                    <h3>Headline: Lorem, ipsum dolor.</h3>
                    <p  className='content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime non alias, vitae assumenda incidunt distinctio ullam, itaque praesentium repudiandae sint nisi. Facere, nobis repellat. Voluptatum aliquam labore quasi exercitationem numquam molestiae. Quo reiciendis dicta tenetur quasi facere sequi minima, est omnis nostrum nisi architecto magni animi et sapiente, laudantium soluta eligendi dolor neque. Ex, sint corporis quo libero architecto ducimus. Labore natus earum deserunt ea odit! Accusantium odio exercitationem dignissimos officia consectetur laborum dolore ab nisi iure fuga magnam numquam dolorem veniam harum, nesciunt labore reiciendis molestiae dicta ea! Molestias corrupti possimus velit culpa recusandae expedita magnam perspiciatis dicta sint.</p>
                    <p className='link-cont'><a href="/#" className='links text-red-600'>Read More</a></p>
                </motion.li>
            </ul>
            
        </div>
    )
}

export default News
