"use client"

import React from 'react';
import DefaultAuthor from "../../assets/default_author.png";
import Image from 'next/image';

const BlogTableItem = ({ mongoId, authorImg, title, author, date, deleteBlog }) => {
    const blogDate = new Date(date);
    return (
        <tr className="bg-white border-b">
            <th scop="row" className="items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                <Image src={authorImg ? authorImg : DefaultAuthor} width={100} height={100} alt="author" className="w-12 h-12" />
                <p>{author ? author : "No author"}</p>
            </th>

            <td className="px-6 py-4">
                {title ? title : "Not title"}
            </td>

            <td className="px-6 py-4">
                {blogDate.toDateString()}
            </td>

            <td onClick={() => deleteBlog(mongoId)} className="px-6 py-4 cursor-pointer">
                X
            </td>
        </tr>
    )
}

export default BlogTableItem