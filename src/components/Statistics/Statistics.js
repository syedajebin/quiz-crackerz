import React, { useEffect, useState } from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
const Statistics = () => {
    const [topics, setTopics] = useState([])
    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/quiz')
        .then(res => res.json())
            .then(data => {
                // const loadedTopioc = data.data
                const loadedData = data.data.map(topic => {
                    const singleData = {
                        name: topic.name,
                        total:topic.total
                    }
                    return singleData;
                })
                console.log("This is..", loadedData);
                setTopics(loadedData)
        })
    }, [])
    console.log("Topics",topics)
    return (
        <div className='container '>
            <h5 className='bg-warning mx-auto px-2 py-3 text-white my-4 text-center rounded' style={{ width: '190px' }}>QUIZ TOPICS STATISTICS</h5>



            <ResponsiveContainer  height={400} className="mx-auto quizBar">
                <BarChart

                    height={300}
                    data={topics}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <Bar dataKey="total" fill="#6a73b6" />
                    <XAxis dataKey="name" />
                    <YAxis />

                    <Tooltip />

                </BarChart>
            </ResponsiveContainer>







        </div>
    );
};

export default Statistics;