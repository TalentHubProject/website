"use client";

import React, {useEffect, useState} from "react";

export default function Page() {
    const [creations, setCreations] = useState([]);

    useEffect(() => {
        // get a lot of images
        fetch("https://picsum.photos/v2/list?page=2&limit=100")
            .then((response) => response.json())
            .then((data) => {
                setCreations(data);
            });
    }, []);

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden col-span-1 row-span-2">
                    <img
                        src="https://picsum.photos/id/237/200/300"
                        alt="Default image"
                        className="w-full h-56 object-cover"
                    />
                    <div className="p-4">
                        <p className="uppercase tracking-wide text-sm font-bold text-gray-700">
                            Default image
                        </p>
                        <p className="text-3xl text-gray-900">200x300</p>
                    </div>
                </div>
                {creations.map((creation, index) => (
                    <div key={index.valueOf()} className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <img
                            src={creation.download_url}
                            alt={creation.author}
                            className="w-full h-56 object-cover"
                        />
                        <div className="p-4">
                            <p className="uppercase tracking-wide text-sm font-bold text-gray-700">
                                {creation.author}
                            </p>
                            <p className="text-3xl text-gray-900">
                                {creation.width}x{creation.height}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
