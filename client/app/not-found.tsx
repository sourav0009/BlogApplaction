export default function NotFound() {
    return (
        <div className="min-h-screen w-screen bg-gray-50 flex items-center justify-center">
            <div className="container flex flex-col md:flex-row items-center justify-between px-5 text-gray-700">
                <div className="w-full md:w-1/2 px-5 md:px-8 mb-12 md:mb-0 text-center md:text-left">
                    <div className="text-6xl md:text-7xl text-green-500 font-extrabold mb-4">404</div>
                    <p className="text-xl md:text-3xl font-light leading-normal mb-8">
                        Sorry, we couldn not find the page you are looking for.
                    </p>
                    <a
                        href="/"
                        className="px-5 inline-block py-3 text-sm font-medium leading-5 shadow-2xl text-white transition-all duration-400 border border-transparent rounded-lg focus:outline-none bg-green-600 active:bg-red-600 hover:bg-red-700"
                    >
                        Back to homepage
                    </a>
                </div>
                <div className="w-full md:w-1/2 flex justify-center">
                    <svg
                        id="aa03ddf9-f8f2-4819-a4ce-be9b0a220741"
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full h-auto max-w-md"
                        viewBox="0 0 1119.60911 699"
                    >
                        <title>server down</title>
                        <circle cx="292.60911" cy="213" r="213" fill="#f2f2f2" />
                        {/* Rest of your SVG content */}
                    </svg>
                </div>
            </div>
        </div>
    );
}
