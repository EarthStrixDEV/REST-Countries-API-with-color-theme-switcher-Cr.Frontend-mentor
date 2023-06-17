import { useState, useEffect } from "react";
import MainHeader from "./MainHeader";
export default function Header({ onStateComponent }) {
    const [Toggle, setToggle] = useState(false);
    const [ChildComponent, setChildComponent] = useState("");

    function handleSetToggle() {
        setToggle(!Toggle);
    }

    const handleStateSelected = (region) => {
        setChildComponent(region);
        onStateComponent(region);
    };

    return (
        <>
            <MainHeader />
            <header className="flex flex-row justify-between items-center my-5 w-full px-36">
                <div className="flex flex-row items-center bg-gray-700 shadow-lg p-2 w-96 rounded-lg">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-search mx-3"
                        viewBox="0 0 16 16"
                    >
                        {" "}
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />{" "}
                    </svg>
                    <input
                        type="text"
                        name="search"
                        className="bg-gray-700 p-2 text-white text-base focus:outline-0"
                        placeholder="Search for a country..."
                    />
                </div>
                <button
                    className="bg-gray-700 flex flex-row justify-between items-center p-4 rounded-xl cursor-pointer"
                    onClick={handleSetToggle}
                >
                    <p className="text-gray-400 text-sm pr-9 pl-2">
                        Filter by Region
                    </p>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-arrow-down"
                        viewBox="0 0 16 16"
                    >
                        {" "}
                        <path
                            fill-rule="evenodd"
                            d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                        />{" "}
                    </svg>
                </button>
                {Toggle ? (
                    <div className="bg-gray-700 flex flex-col justify-start items-start p-4 rounded-xl absolute right-36 top-36">
                        <button
                            onClick={() => handleStateSelected("Africa")}
                            className="text-sm text-slate-400 pr-24 pl-2 py-1 cursor-pointer hover:bg-slate-800 w-full rounded-lg text-start"
                        >Africa</button>
                        <button
                            onClick={() => handleStateSelected("Americas")}
                            className="text-sm text-slate-400 pr-24 pl-2 py-1 cursor-pointer hover:bg-slate-800 w-full rounded-lg text-start"
                        >America</button>
                        <button
                            onClick={() => handleStateSelected("Asia")}
                            className="text-sm text-slate-400 pr-24 pl-2 py-1 cursor-pointer hover:bg-slate-800 w-full rounded-lg text-start"
                        >Asia</button>
                        <button
                            onClick={() => handleStateSelected("Europe")}
                            className="text-sm text-slate-400 pr-24 pl-2 py-1 cursor-pointer hover:bg-slate-800 w-full rounded-lg text-start"
                        >Europe</button>
                        <button
                            onClick={() => handleStateSelected("Oceania")}
                            className="text-sm text-slate-400 pr-24 pl-2 py-1 cursor-pointer hover:bg-slate-800 w-full rounded-lg text-start"
                        >Oceania</button>
                    </div>
                ) : (
                    <div className="absolute"></div>
                )}
            </header>
        </>
    );
}