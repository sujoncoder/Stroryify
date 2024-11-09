import React from 'react'
import { FaRegTrashCan } from "react-icons/fa6";

const SubsTableItem = ({ email, date, mongoId, deleteEmail }) => {
    const emailDate = new Date(date);
    return (
        <tr className="bg-white border-b text-left">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                {email ? email : "No email"}
            </th>

            <td className="px-6 py-4 hidden sm:block">{emailDate.toDateString()}</td>

            <td onClick={() => deleteEmail(mongoId)} className="px-6 py-4 cursor-pointer">
                <FaRegTrashCan className="w-6 h-6 text-red-500" />
            </td>
        </tr>
    )
}

export default SubsTableItem