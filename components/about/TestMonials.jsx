import { testmonials } from '@/utils/testMonials'
import Image from 'next/image'
import React from 'react'

const TestMonials = () => {
    return (
        <section className="bg-blue-50 py-12 px-4">
            <h2 className="text-3xl font-semibold text-center mb-8">What Our Readers Say</h2>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

                {
                    testmonials.map((testmonial) => (
                        <div key={testmonial.name} className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4">
                            <Image
                                src={testmonial.img}
                                width={50}
                                height={50}
                                alt={testmonial.name}
                                className="w-16 h-16 rounded-full"
                            />
                            <div>
                                <p className="text-lg font-medium">{testmonial.feedback}</p>
                                <p className="text-gray-600 mt-2">- {testmonial.name}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default TestMonials