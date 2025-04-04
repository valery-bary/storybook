"use client"


import React, { useState, useEffect } from "react";

export default function FormControl({ title, description, errorMsg, children }) {

    const isError = !!errorMsg;
    const isDescription = !!description;




    return (
        <label className="flex text-t-h8 flex-col justify-start items-start gap-y-2 w-full ">
            {/* Заголовок */}
            <div className="flex justify-start items-center w-full">
                <span className="text-t-blue-900-drop-shadow text-lg font-normal font-['Jost'] leading-[21.6px]">
                    {title}
                </span>
            </div>

            {/* Поле ввода */}
            <div className="flex flex-col justify-start items-start  w-full">
                <div className="flex w-full justify-start items-center">
                    {React.cloneElement(children, {
                        className: `${children.props.className}  ${isError ? "t-form-control-error" : ""}`,
                    })}
                </div>

                {/* Ошибка */}
                {isError && (
                    <div className="px-4 w-full">
                        <span className="text-t-h8 text-t-red-300-error ">
                            {errorMsg}
                        </span>
                    </div>
                )}

                {/* Описание */}
                {isDescription && (
                    <div className="px-4 w-full">
                        <span className="text-t-h8 text-t-grey-500 ">
                            {description}
                        </span>
                    </div>
                )}
            </div>
        </label>
    );
}