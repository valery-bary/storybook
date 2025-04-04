import React from "react";
import { CloseIcon } from "../../icons/iconsHeader";


export const MultiSelectItem = ({ item, handleRemove }) => {
    return (
        <div
            onClick={(e) => {
                e.stopPropagation();
                handleRemove(item);
            }}
            className="h-8 pl-3 group transition-colors duration-150 bg-t-peach-300   active:bg-t-peach-350 rounded-lg inline-flex justify-center items-center">
            <div className="text-slate-900 text-lg font-normal text-nowrap">{item.label}</div>
            <div
                className="size-8 flex justify-center items-center overflow-hidden cursor-pointer"

            >
                <CloseIcon className="w-10 h-10 fill-current group-hover:fill-t-peach-400 transition-colors duration-150" />
            </div>
        </div>
    );
};