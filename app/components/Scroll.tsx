import React from "react";

interface ScrollProps {
  images: any[]; // or define a proper type if you know the structure
}

export default function Scroll({ images }: ScrollProps) {
  // Since images isn't being used, you can either use it or remove the prop
  // For now, I'll add a comment to acknowledge it
  console.log(images); // Remove this after you decide what to do with images
  
  return (
    <div className="flex min-h-screen items-center bg-background">
      <div className="container mx-auto space-y-6">
        <h2 className="text-3xl font-semibold text-white text-center"></h2>
        <ul className="flex snap-x snap-mandatory gap-x-6 overflow-x-auto pb-6">
          <li className="w-2/3 flex-shrink-0 snap-center">
            <div className="space-y-6 rounded-lg border border-white/30 p-6">
              <div className="flex items-center gap-x-5">
                <div className="h-12 w-12 rounded-full bg-gray-300"></div>
                <h3 className="text-xl font-medium text-white">Feature #1</h3>
              </div>
              <div className="space-y-1">
                <div className="h-4 w-10/12 bg-white/30"></div>
                <div className="h-4 w-7/12 bg-white/30"></div>
                <div className="h-4 w-8/12 bg-white/30"></div>
              </div>
            </div>
          </li>
          <li className="w-2/3 flex-shrink-0 snap-center">
            <div className="space-y-6 rounded-lg border border-white/30 p-6">
              <div className="flex items-center gap-x-5">
                <div className="h-12 w-12 rounded-full bg-gray-300"></div>
                <h3 className="text-xl font-medium text-white">Feature #2</h3>
              </div>
              <div className="space-y-1">
                <div className="h-4 w-10/12 bg-white/30"></div>
                <div className="h-4 w-7/12 bg-white/30"></div>
                <div className="h-4 w-8/12 bg-white/30"></div>
              </div>
            </div>
          </li>
          <li className="w-2/3 flex-shrink-0 snap-center">
            <div className="space-y-6 rounded-lg border border-white/30 p-6">
              <div className="flex items-center gap-x-5">
                <div className="h-12 w-12 rounded-full bg-gray-300"></div>
                <h3 className="text-xl font-medium text-white">Feature #3</h3>
              </div>
              <div className="space-y-1">
                <div className="h-4 w-10/12 bg-white/30"></div>
                <div className="h-4 w-7/12 bg-white/30"></div>
                <div className="h-4 w-8/12 bg-white/30"></div>
              </div>
            </div>
          </li>
          <li className="w-2/3 flex-shrink-0 snap-center">
            <div className="space-y-6 rounded-lg border border-white/30 p-6">
              <div className="flex items-center gap-x-5">
                <div className="h-12 w-12 rounded-full bg-gray-300"></div>
                <h3 className="text-xl font-medium text-white">Feature #4</h3>
              </div>
              <div className="space-y-1">
                <div className="h-4 w-10/12 bg-white/30"></div>
                <div className="h-4 w-7/12 bg-white/30"></div>
                <div className="h-4 w-8/12 bg-white/30"></div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}