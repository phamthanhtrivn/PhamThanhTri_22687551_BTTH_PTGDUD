import { useEffect, useState } from "react"
import { images } from "../assets/assets"

const Home = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch("https://67c819aa0acf98d07084d58f.mockapi.io/recipes")
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <>
            <div className="flex justify-between gap-20 py-20 px-30">
                <div className="min-w-30">
                    <img src={images.filter} alt="filter" />
                </div>
                <div className="flex-1">
                    <div className="flex justify-between">
                        <h1 className="text-3xl font-bold">Salad (32)</h1>
                        <select className="px-4 py-2 border border-gray-300 w-40">
                            <option value="a-z">A-Z</option>
                        </select>
                    </div>
                    <div className="my-10 grid grid-cols-3 gap-20">
                        {data.map((item, index) => (
                            <div className="cursor-pointer hover:shadow-xl hover:scale-110 transition-all duration-300 rounded" key={index}>
                                <img className="w-full rounded" src={item.image} alt="" />
                                <div className="">
                                    <div className="flex justify-between gap-3 p-3 font-bold text-xl">
                                        <h4>{item.name}</h4>
                                        <img className="w-10 h-10" src={images.save} alt="save" />
                                    </div>
                                    <p className="mt-2 text-xs text-pink-700 p-3">{item.time} minutes</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home