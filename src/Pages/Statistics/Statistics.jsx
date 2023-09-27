import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { PieChart, Pie, Cell, } from 'recharts';

const Statistics = () => {
    const totalDonation = useLoaderData();
    const [yourDonation, setYourDonation] = useState([])

    useEffect(() => {
        const donation = JSON.parse(localStorage.getItem('donation')) || [];
        setYourDonation(donation);
    }, [])

    const data = [
        { name: 'Total Donation', value: totalDonation.length - yourDonation.length },
        { name: 'Your Donation', value: yourDonation.length },
    ];

    const COLORS = ['#FF444A', '#00C49F'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(1)}%`}
            </text>
        );
    };


    return (
        <div className='flex flex-col justify-center items-center mt-8 md:mt-16 mb-16 md:mb-32'>
            <PieChart width={350} height={350}>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    // outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
            <div className='mt-8'>
                <ul className='flex flex-col md:flex-row justify-center md:gap-14 text-[#0B0B0B] text-lg'>
                    <li className='flex items-center gap-4'>Your Donation<div className='w-24 bg-[#00C49F] h-3'></div></li>
                    <li className='flex items-center gap-4'>Total Donation<div className='w-24 bg-[#FF444A] h-3'></div></li>
                    <li></li>
                </ul>
            </div>
        </div>
    );
};

export default Statistics;