import React from "react";

export default function App() {
    const list = [
        {
            li1Item1: "1",
            li1Item2: "2",
            li1Item3: "3",
        },
        {
            li1Item1: "4",
            li1Item2: "5",
            li1Item3: "6",
        },
        {
            li1Item1: "7",
            li1Item2: "8",
            li1Item3: "9",
        }
        
    ];

    return (
        <div className="mt-5">
            {list.map((item, index) => (
                <ul key={index} className="list-disc list-inside">
                    <li>{item.li1Item1}</li>
                    <li>{item.li1Item2}</li>
                    <li>{item.li1Item3}</li>
                </ul>
            ))}
        </div>
    );
}
