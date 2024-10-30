import { LineChart as LChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, } from 'recharts';



const LineChart = () => {
    const studentsMarks = [
        { id: 1, name: "Student 1", math: 85, physics: 78, chemistry: 92 },
        { id: 2, name: "Student 2", math: 76, physics: 85, chemistry: 80 },
        { id: 3, name: "Student 3", math: 90, physics: 88, chemistry: 94 },
        { id: 4, name: "Student 4", math: 68, physics: 75, chemistry: 70 },
        { id: 5, name: "Student 5", math: 82, physics: 89, chemistry: 88 },
        { id: 6, name: "Student 6", math: 91, physics: 84, chemistry: 90 },
        { id: 7, name: "Student 7", math: 79, physics: 92, chemistry: 86 },
        { id: 8, name: "Student 8", math: 88, physics: 79, chemistry: 85 },
        { id: 9, name: "Student 9", math: 74, physics: 83, chemistry: 78 },
        { id: 10, name: "Student 10", math: 95, physics: 91, chemistry: 93 }
    ];
    return (
        <div>
            <LChart width={500} height={400} data={studentsMarks}  margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip></Tooltip>
                <Line dataKey="math" stroke="red"  ></Line>
                <Line dataKey="chemistry" stroke="blue"></Line>
                <Line dataKey="physics" stroke="green"></Line>
            </LChart>
        </div>
    );
};

export default LineChart;