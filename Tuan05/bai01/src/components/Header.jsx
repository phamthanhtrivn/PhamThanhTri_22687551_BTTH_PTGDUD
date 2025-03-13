import { images } from "../assets/assets"

const Header = () => {

    const menu = [
        "What to cook",
        "Recipes",
        "Ingredients",
        "Occasions",
        "About Us"
    ]

    return (
        <>
            <div className="flex items-center px-10 py-4 gap-10">
                <div className="mr-10">
                    <img src={images.logo} alt="logo" />
                </div>
                <div className="flex gap-4 bg-gray-300 py-2 px-3 rounded items-center mr-50 min-w-20">
                    <img className="w-4 h-[20px]" src={images.search_icon} alt="search_icon" />
                    <input type="text" placeholder="Salad"/>
                </div>
                <ul className="m-none p-none flex gap-5">
                    {menu.map((item, index) => (
                        <li className="" key={index}>{item}</li>
                    ))}
                </ul>
                <div className="flex gap-2 ml-10">
                    <img src={images.check} alt="tasklist" />
                    <p className="text-pink-500">Your Recipe Box</p>
                </div>
                <img src={images.avatar} alt="user_icon" />
            </div>
        </>
    )
}

export default Header;