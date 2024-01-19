import React from 'react'

export const History = () => {
    return (
        <div className="w-full max-w-xl mt-20 border-t-2 pt-4">
            <h2 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-4">History</h2>
            <div className="space-y-2">
                <div className="flex items-center justify-between bg-white dark:bg-gray-800 p-4 rounded-md shadow">
                    <a className="text-blue-500 underline" href="#">
                        itiny.link/abc123
                    </a>
                    <button>Copy</button>
                </div>

            </div>
        </div>
    )
}
