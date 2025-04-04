import { ArrowDown } from "@/src/shared/icons/iconsTivali";
import React from "react";
import { MultiSelectItem } from "./MultiSelectItem.jsx";
import { CloseIcon } from "../../icons/iconsHeader.js";

export const MultiSelectHeader = ({ toggleDropdown, selectedValues, placeholder, isMulti, handleRemove, removeAll }) => {
    return (
        <div
            className="w-full  relative pe-14 z-10 rounded-md cursor-pointer flex justify-between items-center  bg-white transition-all duration-200"
            onClick={toggleDropdown}
        >
            {isMulti ? (
                selectedValues.length > 0 ? (
                    <div className="flex flex-wrap max-w-full w-full bg-white gap-1 pr-12  z-0 pointer-events-auto ">
                        {selectedValues.map((v, index) => (
                            <MultiSelectItem key={`${v.value}-${index}`} item={v} handleRemove={handleRemove} />
                        ))}
                    </div>
                ) : (
                    <span className="text-gray-500">{placeholder}</span>
                )
            ) : (
                selectedValues.length > 0 ? (
                    <span className="text-t-blue-800-text">
                        {selectedValues[0]?.label || placeholder}
                    </span>
                ) : (
                    <span className="text-t-blue-800-text">{placeholder}</span>
                )
            )}

            <div className="absolute right-[-8px]  z-5 flex  items-center pointer-events-auto">
                {isMulti && (selectedValues.length > 0) && (
                    <div
                        className="w-8 h-8 flex group items-center justify-center cursor-pointer z-8"
                        onClick={(e) => {
                            e.stopPropagation();
                            removeAll();
                        }}
                    >
                        <CloseIcon className="fill-t-blue-800-text  group-hover:fill-t-peach-400 transition-colors duration-150" />
                    </div>
                )}
                <div className="w-8 h-8 flex items-center justify-center pointer-events-none">
                    <ArrowDown className="fill-t-blue-800-text" />
                </div>
            </div>
        </div>
    );
};