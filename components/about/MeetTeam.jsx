import { members } from '@/utils/memberData'
import Image from 'next/image'
import React from 'react'

const MeetTeam = () => {
    return (
        <section className="max-w-6xl mx-auto py-12 px-4">
            <h2 className="text-3xl font-semibold text-center mb-8">Meet the Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                {
                    members.map((member) => (
                        <div key={member.name} className="bg-white p-6 rounded-lg shadow-lg text-center">
                            <Image
                                src={member?.img}
                                width={500}
                                height={500}
                                alt={member.name}
                                className="w-24 h-24 rounded-full mx-auto mb-4"
                            />
                            <h3 className="text-xl font-semibold">{member.name}</h3>
                            <p className="text-gray-600">{member.role}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default MeetTeam