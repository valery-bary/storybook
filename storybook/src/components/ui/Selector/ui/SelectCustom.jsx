import {useCallback, useEffect, useState} from "react";
import { SelectHeader } from "./SelectHeader";
import { SelectBody } from "./SelectBody"


export const testingData = [
    'English',
    'Hebrew',
    'Albanian',
    'Amharic',
    'Arabic',
    'Azerbaijani',
    'English',
    'Hebrew',
    'Albanian',
    'Amharic',
    'Arabic',
    'Azerbaijani',
]

export const SelectCustom = ({ data = testingData }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [langArray, setLangArray] = useState([]);

    useEffect(() => {
        console.log(langArray,'TEST')
    }, [langArray]);

    const isOpenHandler = useCallback(() => {
        setIsOpen(!isOpen);
    }, [isOpen, setIsOpen]);

    const addLang = useCallback((lang) => {
        const newState = new Set([...langArray, lang])
        console.log(newState)
        setLangArray([...newState])
    }, [setLangArray, langArray])

    const removeAll = () => {
        setLangArray([])
    }

    const remove = (item) => {
        setLangArray(langArray.filter((lang) => lang !== item))
    }

    return (
        <div className="relative w-full">
            <SelectHeader isOpenHandler={isOpenHandler} isOpen={isOpen} langArray={langArray} removeAll={removeAll} remove={remove} />
            {isOpen && <SelectBody data={data} addLang={addLang} />}
        </div>

    );
};