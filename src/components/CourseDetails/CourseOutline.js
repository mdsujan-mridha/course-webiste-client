import React from 'react';
import { useState } from 'react';
import ReactFlow from 'reactflow';
import 'reactflow/dist/style.css';

const initialNodes = [
    {
        id: '1',
        type: 'input',
        data: { label: 'পদার্থ বিজ্ঞান' },
        position: { x: 250, y: 25 },
    },

    {
        id: '2',
        // you can also pass a React component as a label
        data: { label: <div>প্রথম পত্র</div> },
        position: { x: 100, y: 125 },
    },
    {
        id: '4',
        // you can also pass a React component as a label
        data: { label: <div>ভেক্টর</div> },
        position: { x: 100, y: 200 },
    },
    {
        id: '5',
        // you can also pass a React component as a label
        data: { label: <div>গতিবিদ্যা</div> },
        position: { x: 100, y: 300 },
    },
    {
        id: '6',
        // you can also pass a React component as a label
        data: { label: <div>নিউটনিয়ান বলবিদ্যা</div> },
        position: { x: 100, y: 400 },
    },
    {
        id: '7',
        // you can also pass a React component as a label
        data: { label: <div>কাজ,ক্ষমতা ও শক্তি</div> },
        position: { x: 100, y: 500 },
    },
    {
        id: '8',
        // you can also pass a React component as a label
        data: { label: <div>মহাকর্ষ ও অভিকর্ষ</div> },
        position: { x: 100, y: 600 },
    },
    {
        id: '9',
        // you can also pass a React component as a label
        data: { label: <div>পর্যায় বৃত্ত গতি</div> },
        position: { x: 100, y: 700 },
    },
    {
        id: '10',
        // you can also pass a React component as a label
        data: { label: <div>শব্দ ও তরঙ্গ</div> },
        position: { x: 100, y: 800 },
    },
    {
        id: '11',
        // you can also pass a React component as a label
        data: { label: <div>আদর্শ গ্যাস ও গতিত্তত্ব</div> },
        position: { x: 100, y: 900 },
    },
    {
        id: '3',
        data: { label: <div>দ্বিতীয় পত্র</div> },
        position: { x: 450, y: 125 },
    },
    {
        id: '12',
        data: { label: <div>তাপগতিবিদ্যা</div> },
        position: { x: 450, y: 200 },
    },
    {
        id: '13',
        data: { label: <div>স্থির তড়িৎ</div> },
        position: { x: 450, y: 300 },
    },
    {
        id: '14',
        data: { label: <div>চল তড়িৎ</div> },
        position: { x: 450, y: 400 },
    },
    {
        id: '15',
        data: { label: <div>তড়িৎ প্রবাহের চৌম্বক ক্রিয়া ও চুম্বকত্ব</div> },
        position: { x: 450, y: 500 },
    },
    {
        id: '16',
        data: { label: <div>তড়ি’ চুম্বকীয় আবেশ ও পরিবর্তী প্রবাহ</div> },
        position: { x: 450, y: 600 },
    },
    {
        id: '17',
        data: { label: <div>জ্যামিতিক আলোকবিজ্ঞান</div> },
        position: { x: 450, y: 700 },
    },
    {
        id: '18',
        data: { label: <div>ভৌত আলোকবিজ্ঞান</div> },
        position: { x: 450, y: 800 },
    },
    {
        id: '19',
        data: { label: <div>আধুনিক পদার্থ বিজ্ঞানের সূচনা</div> },
        position: { x: 450, y: 900 },
    },
    {
        id: '20',
        data: { label: <div>পরমানুর মডেল এবং নিউক্লিয়ার পদার্থ বিজ্ঞান</div> },
        position: { x: 450, y: 1000 },
    },
    {
        id: '20',
        data: { label: <div> সেমিকন্ডাক্টর ও  ইলেক্ট্রনিক্স </div> },
        position: { x: 450, y: 1050 },
    },
    {
        id: '30',
        data: { label: <div> দুটি ভেক্টরের লব্ধি নির্ণয় </div> },
        position: { x: -150, y: 200 },
    },
    {
        id: '31',
        data: { label: <div> আপেক্ষিক ভেক্টর </div> },
        position: { x: -150, y: 250 },
    },


];

const initialEdges = [
    { id: 'e1-2', source: '1', target: '2' },
    { id: 'e1-3', source: '1', target: '3', animated: true },
    { id: 'e2-4', source: '2', target: '4', animated: true },
    { id: 'e2-5', source: '4', target: '5', animated: true },
    { id: 'e2-6', source: '5', target: '6', animated: true },
    { id: 'e2-7', source: '6', target: '7', animated: true },
    { id: 'e2-8', source: '7', target: '8', animated: true },
    { id: 'e2-9', source: '8', target: '9', animated: true },
    { id: 'e2-10', source: '9', target: '10', animated: true },
    { id: 'e2-11', source: '10', target: '11', animated: true },
    { id: 'e3-12', source: '3', target: '12', animated: true },
    { id: 'e12-13', source: '12', target: '13', animated: true },
    { id: 'e13-14', source: '13', target: '14', animated: true },
    { id: 'e14-15', source: '14', target: '15', animated: true },
    { id: 'e15-16', source: '15', target: '16', animated: true },
    { id: 'e16-17', source: '16', target: '17', animated: true },
    { id: 'e17-18', source: '17', target: '18', animated: true },
    { id: 'e18-19', source: '18', target: '19', animated: true },
    { id: 'e19-20', source: '19', target: '20', animated: true },
    { id: 'e4-30', source: '4', target: '30', animated: true },
    { id: 'e4-31', source: '4', target: '31', animated: true },

];




const CourseOutline = ({ data }) => {
    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);


    return (
        <div className='w-full h-screen'>
            <ReactFlow nodes={nodes} edges={edges} fitView  />;
        </div>
    );
};

export default CourseOutline;