"use client"

import SubsTableItem from '@/components/admin/SubsTableItem'
import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify';

const SubscriptionPage = () => {

    const [emails, setEmails] = useState([]);

    const fetchEmails = async () => {
        try {
            const response = await axios.get("/api/email");
            setEmails(response.data.emails || []);
        } catch (error) {
            console.error("Error fetching emails:", error);
        }
    };

    const deleteEmail = async (mongoId) => {
        try {
            const response = await axios.delete("/api/email", {
                params: {
                    id: mongoId
                }
            })

            if (response.data.success) {
                toast.success(response.data.message);
                fetchEmails()
            }
        } catch (error) {
            toast.error("Something went to wrong")
        }
    };


    useEffect(() => {
        fetchEmails();
    }, []);

    return (
        <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16">
            <h1 className="text-2xl font-semibold text-slate-500">All Subscription</h1>

            <div className="relative max-w-[600px] h-[80vh] overflow-x-auto mt-4 border-2 rounded border-slate-300 scroolbar-hide">

                <table className="w-full text-sm text-gray-500">
                    <thead className="text-xs text-left text-gray-700 uppercase bg-gray-50">
                        <tr className="border-b-2">
                            <th scope="col" className="px-6 py-3">
                                Email Subscription
                            </th>

                            <th scope="col" className="hidden sm:block px-6 py-3">
                                Date
                            </th>

                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {emails && emails.length > 0 ? (
                            emails.map((item, index) => (
                                <SubsTableItem key={index} email={item.email} mongoId={item._id} date={item.date} deleteEmail={deleteEmail} />
                            ))
                        ) : (
                            <tr>
                                <td colSpan="3" className="text-center text-2xl pt-10">No subscriptions found.</td>
                            </tr>
                        )}
                    </tbody>

                </table>

            </div>
        </div>
    )
}

export default SubscriptionPage