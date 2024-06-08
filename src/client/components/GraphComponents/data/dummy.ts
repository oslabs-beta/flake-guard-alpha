interface Dataset {
    label: string;
    data: number[];
    borderColor: string;
}

interface LineChartData {
    labels: string[];
    datasets: Dataset[];
}

export const lineChartData: LineChartData = {
    labels: [
        "Monday", 
        "Tuesday", 
        "Wednesday", 
        "Thursday", 
        "Friday", 
        "Saturday", 
        "Sunday"
    ], 
    datasets: [
        {
            label: "Steps", 
            data: [300, 500, 4500, 6000, 8000, 7000, 9000],
            borderColor: "rgb(75, 192, 192)",
        },
    ],
};
