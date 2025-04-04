import React from "react";

export const MultiSelectBody = ({ isOpen, filteredOptions, handleSelect, searchQuery, handleSearch, isSearch, option, handleClose }) => {
    if (!isOpen) return null;

    return (
        <div className="absolute left-0 top-full w-full bg-white border border-gray-300 shadow-md rounded-md mt-1 z-50 max-h-60 overflow-y-auto"
            onMouseLeave={handleClose}>
            {option.length > 10 && isSearch && (
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={handleSearch}
                    className="w-full p-2 border-b text-t-h9 border-t-peach-300 focus:outline-none placeholder-t-h8"
                />
            )}
            {filteredOptions.map((opt, index) => (
                <div
                    key={`${opt.value}-${index}`}
                    className="p-2 cursor-pointer hover:bg-t-peach-300"
                    onClick={() => handleSelect(opt)}
                >
                    {opt.label}
                </div>
            ))}
        </div>
    );
};