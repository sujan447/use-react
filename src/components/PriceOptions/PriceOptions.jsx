import PriceOption from "../PriceOption/PriceOption";



const PriceOptions = () => {
    const priceOptions = [
        {
            id: 1,
            name: "Basic Membership",
            price: 29.99,
            features: [
                "Access to gym equipment",
                "Group fitness classes",
                "Locker room access"
            ]
        },
        {
            id: 2,
            name: "Standard Membership",
            price: 49.99,
            features: [
                "All Basic Membership features",
                "Personal training sessions (1 per month)",
                "Access to sauna and steam room"
            ]
        },
        {
            id: 3,
            name: "Premium Membership",
            price: 69.99,
            features: [
                "All Standard Membership features",
                "Unlimited personal training sessions",
                "Access to exclusive workshops and events",
                "Free guest passes"
            ]
        },
        {
            id: 4,
            name: "Student Membership",
            price: 19.99,
            features: [
                "Access to gym equipment",
                "Discounted group fitness classes",
                "Flexible payment options"
            ]
        },
        {
            id: 5,
            name: "Family Membership",
            price: 99.99,
            features: [
                "All Premium Membership features",
                "Includes up to 4 family members",
                "Family fitness events and activities"
            ]
        }
    ];



    return (
        <div>
            <h1 className="text-5xl">
                Best Price in the town
            </h1>
            <div className="grid md:grid-cols-3 gap-5 m-12">
            {
                priceOptions.map(option=> <PriceOption key={option.id} option={option}></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;