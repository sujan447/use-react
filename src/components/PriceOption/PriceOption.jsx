import PropTypes from "prop-types";
import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
    const { name, price, features } = option;
    return (
        <div className="bg-blue-200 p-4 rounded-md flex flex-col ">
            <h2 className="text-center">
                <span className="text-6xl">{price}</span>
                <span className="text-3xl ">/mon</span>
            </h2>
            <h4 className="text-4xl text-center my-6">{name}</h4>
            <div className="space-y-2 pl-2 flex-grow">
                {
                    features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
                }
            </div>
            <button className="mt-12 bg-orange-400 p-4 w-full rounded-lg text-white font-bold hover:bg-orange-800">Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}
export default PriceOption;