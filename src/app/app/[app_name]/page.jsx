
import React from "react";
import { get_app } from "@/lib/fetchPosts.js"

export default async function AppPreviewPage({params}) {

    const { app_name } = await params;
    console.log('Route params:', app_name);
    const app_details =await get_app(app_name);

    return (
        <main className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-5xl mx-auto">

                {/* Title */}
                <h1 className="text-3xl font-bold mb-3">
                    {app_details.hTitle}
                </h1>

                {/* Small summary */}
                <p className="text-gray-600 mb-6">
                    {app_details.app_details}
                </p>

                {/* Video Demo */}
                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">Video Demo</h2>
                    <div className="w-full h-64 bg-gray-300 flex items-center justify-center rounded-md">
                        <span className="text-gray-700">Video Placeholder</span>
                    </div>
                </section>

                {/* Screenshots */}
                <section className="mb-10">
                    <h2 className="text-xl font-semibold mb-3">Screenshots</h2>

                    <div className="flex flex-wrap gap-4">
                        <div className="w-40 h-72 bg-gray-300 rounded-md flex items-center justify-center">
                            Image 1
                        </div>
                        <div className="w-40 h-72 bg-gray-300 rounded-md flex items-center justify-center">
                            Image 2
                        </div>
                        <div className="w-40 h-72 bg-gray-300 rounded-md flex items-center justify-center">
                            Image 3
                        </div>
                    </div>
                </section>

                {/* Overview */}
                <section className="mb-10">
                    <h2 className="text-xl font-semibold mb-3">Overview of TikTok Premium APK for Android</h2>

                    <p className="text-gray-700 leading-relaxed mb-4">
                        TikTok is the destination for mobile videos. On TikTok, short-form videos are exciting, spontaneous,
                        and genuine. Whether you’re a sports fanatic, a pet enthusiast, or just looking for a laugh, there’s
                        something for everyone on TikTok.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-4">
                        All you have to do is watch, engage with what you like, and skip what you don’t, and you’ll find an
                        endless stream of short videos that feel personalized just for you.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-4">
                        We make it easy to discover and create your original videos by providing easy-to-use tools to view
                        and capture your daily moments. Take your videos to the next level with special effects, filters,
                        music, etc.
                    </p>
                </section>

                {/* Features */}
                <section className="mb-10">
                    <h2 className="text-xl font-semibold mb-3">Features of the App</h2>

                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Watch an endless amount of videos explicitly customized for you</li>
                        <li>Explore videos just one scroll away</li>
                        <li>Pause recording multiple times in a video</li>
                        <li>Get entertained and inspired by a community of creators</li>
                        <li>Add your favorite music to videos</li>
                        <li>Express yourself with your creative effects and editing</li>
                    </ul>
                </section>

                {/* Previous Versions */}
                <section className="mb-10">
                    <h2 className="text-xl font-semibold mb-4">Previous Versions</h2>

                    <div className="flex flex-col gap-4">

                        {/* VERSION BLOCK (repeat manually) */}
                        <div className="bg-white p-4 rounded-md shadow-sm flex flex-col sm:flex-row sm:items-center justify-between">
                            <div>
                                <div className="font-semibold">November 06, 2025</div>
                                <div className="text-gray-600">File Name: TikTok v42.4.15.apk</div>
                                <div className="text-gray-600">Version: 42.4.15</div>
                            </div>
                            <a
                                href="#"
                                className="mt-3 sm:mt-0 px-4 py-2 bg-green-600 text-white rounded-md"
                            >
                                Download
                            </a>
                        </div>

                        <div className="bg-white p-4 rounded-md shadow-sm flex flex-col sm:flex-row sm:items-center justify-between">
                            <div>
                                <div className="font-semibold">November 03, 2025</div>
                                <div className="text-gray-600">File Name: TikTok v42.4.2.apk</div>
                                <div className="text-gray-600">Version: 42.4.2</div>
                            </div>
                            <a
                                href="#"
                                className="mt-3 sm:mt-0 px-4 py-2 bg-green-600 text-white rounded-md"
                            >
                                Download
                            </a>
                        </div>

                        {/* Add as many versions as you want exactly like this */}

                    </div>
                </section>

                {/* Comments Section */}
                <section className="mb-16">
                    <h2 className="text-xl font-semibold mb-4">Comments</h2>

                    {/* Comment Form */}
                    <form className="bg-white p-4 rounded-md shadow-sm mb-8 flex flex-col gap-4">
                        <div className="flex flex-col">
                            <label className="mb-1 font-medium">Name *</label>
                            <input className="border rounded-md px-3 py-2" />
                        </div>

                        <div className="flex flex-col">
                            <label className="mb-1 font-medium">Email *</label>
                            <input className="border rounded-md px-3 py-2" />
                        </div>

                        <div className="flex flex-col">
                            <label className="mb-1 font-medium">Comment *</label>
                            <textarea className="border rounded-md px-3 py-2 h-28"></textarea>
                        </div>

                        <button
                            type="submit"
                            className="px-4 py-2 bg-indigo-600 text-white rounded-md self-start"
                        >
                            Submit Comment
                        </button>
                    </form>

                    {/* Comments List (Static) */}
                    <div className="flex flex-col gap-4">
                        <div className="bg-white p-4 rounded-md shadow-sm">
                            <div className="font-semibold">John Doe</div>
                            <div className="text-gray-600 text-sm">Posted on Nov 10, 2025</div>
                            <p className="mt-2 text-gray-700">Great app! Works flawlessly.</p>
                        </div>

                        <div className="bg-white p-4 rounded-md shadow-sm">
                            <div className="font-semibold">Maria</div>
                            <div className="text-gray-600 text-sm">Posted on Nov 9, 2025</div>
                            <p className="mt-2 text-gray-700">Thanks for sharing this version!</p>
                        </div>
                    </div>
                </section>

            </div>
        </main>
    );
}
