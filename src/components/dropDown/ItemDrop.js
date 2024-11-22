import React from 'react'

export const ItemDrop = ({title}) => {
  return (
    <li  className="cursor-pointer block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
    {title}
    </li>
  )
}
