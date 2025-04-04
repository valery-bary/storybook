import ArrowIcon from "../assets/arrow.svg";
import CloseIcon from "../assets/close.svg";


import {SelectLangItem} from "./SelectLangItem";

export const SelectHeader = ({isOpenHandler,isOpen, langArray, removeAll, remove}) => {

    console.log(ArrowIcon)

    return (
        <div className="outline px-[16px] py-[10px] rounded-[8px] bg-white cursor-pointer"
             onClick={() => isOpenHandler()}>
            <div className="flex justify-between items-center text-[20px]">

                {langArray.length ? (
                    <div className="flex flex-wrap gap-[4px]">
                        { langArray.map((lang, index) => SelectLangItem(lang, remove )) }
                    </div>
                ) : (
                    <span>Выберите языки</span>
                )}

                <div className="flex ">
                    { langArray.length ? (
                        <button
                            onClick={(e) =>  {e.stopPropagation();removeAll()}}
                            className={` ${isOpen ? 'rotate-180' : ''}  w-[40px] h-[40px] flex items-center justify-center `}>
                            <img src={CloseIcon.src} alt=""/>
                        </button>
                    ): null}
                    <button
                        className={` ${isOpen ? 'rotate-180' : ''}  w-[40px] h-[40px] flex items-center justify-center `}>
                        <img src={ArrowIcon.src} alt=""/>
                    </button>

                </div>
            </div>
        </div>
    );
};