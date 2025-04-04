import React, { useState, useEffect, useRef, useMemo } from "react";
import { MultiSelectHeader } from "./MultiSelectHeader.jsx";
import { MultiSelectBody } from "./MultiSelectBody.jsx";

const MultiSelect = ({
    placeholder = "Select...",
    closeMenuOnSelect = true,
    isMulti = false,
    option = [],
    className = "t-form-control ",
    isSearch = false,
    changeValue = () => { },
    value
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedValues, setSelectedValues] = useState([]);
    const dropdownRef = useRef(null);
    const [isFocused, setIsFocused] = useState(false);
    const hasMounted = useRef(false);

    useEffect(() => {
        hasMounted.current = true;
    }, []);

    const saveChangesIfNeeded = () => {
        const initial = isMulti
            ? (Array.isArray(value) ? value : [])
            : (value ? [value] : []);
        const hasChanged = JSON.stringify(selectedValues) !== JSON.stringify(initial);

        if (hasChanged) {
            if (isMulti) {
                changeValue(selectedValues);
            } else {
                changeValue(selectedValues[0] || null);
            }
        }
    };

    const availableOptions = useMemo(() => {
        return option.filter(opt => !selectedValues.some(val => val.value === opt.value));
    }, [option, selectedValues]);

    const toggleDropdown = () => {
        setIsOpen(prev => {
            const newState = !prev;

            if (!newState && hasMounted.current) {
                saveChangesIfNeeded();
                setIsFocused(false);
            } else if (newState) {
                setIsFocused(true);
            }

            return newState;
        });
    };

    const handleSelect = (selectedValue) => {
        if (!selectedValue) return;

        setSelectedValues(prevValues => {
            let newValues;
            if (isMulti) {
                const isAlreadySelected = prevValues.some(val => val.value === selectedValue.value);
                newValues = isAlreadySelected
                    ? prevValues.filter(val => val.value !== selectedValue.value)
                    : [...prevValues, selectedValue];
            } else {
                newValues = [selectedValue];
            }
            setTimeout(() => {

                changeValue(isMulti ? newValues : newValues[0] || null);
            }, 0);

            return newValues;
        });

        if (!isMulti && closeMenuOnSelect) {
            setIsOpen(false);
            setIsFocused(false);
        }
    };

    const handleRemove = (valueToRemove) => {
        const newValues = selectedValues.filter(val => val.value !== valueToRemove.value);

        changeValue(isMulti ? newValues : newValues[0] || null);
        setSelectedValues(newValues);
    };

    const removeAll = () => {
        setSelectedValues([]);
        changeValue([]);
    };

    const handleSearch = (e) => setSearchQuery(e.target.value.toLowerCase());

    const filteredOptions = availableOptions.filter(opt =>
        typeof opt.label === "string" &&
        opt.label.toLowerCase().includes(searchQuery)
    );

    useEffect(() => {
        if (isMulti) {
            setSelectedValues(Array.isArray(value) ? value : []);
        } else {
            setSelectedValues(value && typeof value === "object" ? [value] : []);
        }
    }, [value, isMulti]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                if (isOpen) {
                    saveChangesIfNeeded();
                }
                setIsOpen(false);
                setIsFocused(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen, selectedValues, value]);

    const handleClose = () => {
        if (isOpen) {
            saveChangesIfNeeded();
            setIsOpen(false);
            setIsFocused(false);
        }
    };

    return (
        <div className={`relative w-full ${className} flex flex-col !h-auto min-h-min-11 py-1 w-full   ${isFocused ? "!border-[1px] !border-t-blue-500 !shadow-[0px_2px_8px_0px_t-blue-900-drop-shadow] outline-0" : "border-gray-300"
            }`} ref={dropdownRef}>
            <MultiSelectHeader
                toggleDropdown={toggleDropdown}
                selectedValues={selectedValues}
                placeholder={placeholder}
                isMulti={isMulti}
                handleRemove={handleRemove}
                removeAll={removeAll}
            />
            <MultiSelectBody
                isOpen={isOpen}
                filteredOptions={filteredOptions}
                handleSelect={handleSelect}
                searchQuery={searchQuery}
                handleSearch={handleSearch}
                isSearch={isSearch}
                option={option}
                handleClose={handleClose}
            />
        </div>
    );
};

export default MultiSelect;