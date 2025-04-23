import { Stat } from "@/data/statdefinition";

type Props = {
    selectedStat: Stat | undefined;
};


const StatList: React.FC<Props> = ({selectedStat}) => {
    return (
        <div className="border border-gray-300 p-4 rounded-2xl bg-white shadow-lg">

            <p></p>
            </div>
    )
};

export default StatList;
