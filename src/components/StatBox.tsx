import { Stats } from "@/data/statdefinition";


const StatBox: React.FC = () => {
    const stats = Object.keys(Stats);

    return (
        <div>
            {stats.map((feature, _) => (
                <p key={feature} className="text-gray-500">{feature}</p>
            ))}
        </div>
    );
};

export default StatBox;
