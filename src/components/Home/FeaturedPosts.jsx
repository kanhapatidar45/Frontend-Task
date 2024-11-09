

import React from 'react';
import { Button } from '@mui/material';
import ArrowIcon from '../Ui/ArrowIcon';

import buildingImage from '../../assets/Client-First - IMAGES/white-concrete-building-1838640.svg';
import ViewAllPost from './ViewAllPost';


const post = {
    title: '8 Figma design systems that you can download for free today',
    image: buildingImage,  // Use buildingImage directly
    date: 'April 12, 2024',
    category: 'By John Doe',
};

export default function FeaturedPosts() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold">Featured Posts</h2>
                    <h2 className="text-3xl font-bold">All Posts</h2>
                    <a href="#" className="text-purple-600 hover:text-purple-700 -ml-24 ">
                        View all
                    </a>
                </div>


               
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Single card for the featured post */}
                


                    <div className="bg-white shadow-md shadow-gray-400 p-4 mb-5">
                        <div className="bg-white  overflow-hidden =">
                            <img
                                className="h-48 w-full object-cover "
                                src={post.image}
                                alt={post.title}
                            />
                            <div className="p-6">
                                <div className="flex items-center text-sm text-gray-500 mb-2 -ml-5">
                                    <span>{post.category}</span>
                                    <span className="mx-2">|</span>
                                    <span>{post.date}</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-2 -ml-5">{post.title}</h3>
                                <p className="text-gray-600 mb-4 -ml-5">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                                </p>
                                <Button
                                    variant="contained"
                                    className="!font-sen !font-bold !text-custom-dark !bg-custom-yellow hover:!bg-custom-purple !mt-3 !-ml-5"
                                >
                                    Read More
                                    <ArrowIcon className="ml-2" />
                                </Button>
                            </div>
                        </div>
                    </div>
                   

                   {/**posts */}


                    <div className="flex ml-10">
                        <div className="space-y-4"> {/* Adds space between items */}
                            <div className="p-4 ">
                                <ViewAllPost />
                            </div>
                            <div className="p-4 ">
                                <ViewAllPost />
                            </div>
                            <div className="p-4 bg-custom-light-beige ">
                                <ViewAllPost />
                            </div>
                            <div className="p-4 ">
                                <ViewAllPost />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
