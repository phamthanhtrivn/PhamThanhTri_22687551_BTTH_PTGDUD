
import { images } from "../assets/assets"

const Footer = () => {
    return (
        <>
            <div className="bg-gray-800 flex gap-40 justify-between text-white py-5 px-10">
                <div>
                    <p className="text-lg font-bold mb-3">About Us</p>
                    <p className="font-medium mb-2">Welcome to our website, a wonderful place to explore and learn how to cook like a pro</p>
                    <div className="flex gap-8 mb-20">
                        <input type="text" placeholder="Enter your email" className="bg-white text-black px-2 py-1 rounded w-70" />
                        <button className="bg-pink-700 px-2 py-1 rounded">Send</button>
                    </div>
                    <div className="flex gap-8 items-center text-xs">
                        <img src={images.chefifywhite} alt="chefifywhite" />
                        <p>2023 Chefify Company</p>
                        <p>Terms of Service Privacy Policy</p>
                    </div>
                </div>
                <div>
                    <div className="mb-5">
                        <h4 className="text-lg font-bold mb-2">Learn More</h4>
                        <ul className="flex flex-col gap-2">
                            <li>Our Cooks</li>
                            <li>See Our Features</li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-3">Shop</h4>
                        <ul className="flex flex-col gap-2">
                            <li>Gift Subcription</li>
                            <li>Send Us Feedback</li>
                        </ul>
                    </div>
                </div>
                <div className="">
                    <h4 className="text-lg font-bold mb-3">Recipes</h4>
                    <ul className="flex flex-col gap-2">
                        <li>What to Cook This Week</li>
                        <li>Pasta</li>
                        <li>Dinner</li>
                        <li>Healthy</li>
                        <li>Vegetarian</li>
                        <li>Vegan</li>
                        <li>Christmas</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Footer;