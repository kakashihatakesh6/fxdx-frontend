/* eslint-disable @next/next/no-img-element */
import React from 'react'

const TestChart = () => {
    return (
        <div className="main flex w-full space-x-2">
            <div className='flex px-10'>
                <div className="flex w-1/3">
                    <div className="flex w-10 h-28">
                        <img src="/imageNew.jpg" className='w-full h-full' alt="image-new" />
                    </div>
                </div>

                <div className="flex w-1/3">
                    <div className="flex w-10 h-28">
                        <ul className='flex flex-col'>
                            <li>
                                <a href="test1">Test1</a>
                            </li>
                            <li>
                                <a href="test2">Test2</a>
                            </li>
                            <li>
                                <a href="test3">Test3</a>
                            </li>
                            <li>
                                <a href="test4">Test4</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex w-1/3">
                    <div className="flex w-10 h-28">
                        <img src="/image-new.jpg" className='w-full h-full' alt="image-new" />
                    </div>
                </div>
            </div>

                <div className="main">

                </div>
        </div>
    )
}

export default TestChart