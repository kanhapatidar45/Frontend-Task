import React from 'react';
import { Button } from '@mui/material';

export default function PostCard({ image, title, description, date }) {
    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img
                src={image}
                alt={title}
                className="w-full h-64 object-cover"
            />
            <div className="p-6">
                <p className="text-gray-500 text-sm mb-2">{date}</p>
                <h3 className="text-xl font-semibold mb-3">{title}</h3>
                <p className="text-gray-600 mb-4">{description}</p>
                <Button
                    variant="outlined"
                    color="primary"
                    sx={{ textTransform: 'none' }}
                >
                    Read More
                </Button>
            </div>
        </div>
    );
}