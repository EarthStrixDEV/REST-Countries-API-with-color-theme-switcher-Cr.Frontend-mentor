export default function MenuHeader() {
    return (
        <>
            <nav className="w-full flex flex-row justify-between items-center bg-gray-700 shadow-lg py-5 px-36">
                <h2 className="text-white font-bold text-lg">
                    Where in the world?
                </h2>
                <div className="flex flex-row">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="26"
                        className="theme_switch cursor-pointer mr-2"
                    >
                        <path
                            fill="#FFF"
                            fill-rule="evenodd"
                            d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"
                        />
                    </svg>
                    <p className="font-normal">Dark Mode</p>
                </div>
            </nav>
        </>
    );
}