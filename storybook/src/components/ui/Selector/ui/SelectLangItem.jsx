import CloseIcon from '../assets/close.svg'

export const SelectLangItem = (item, remove) => {
    return (
        <div className="bg-[#FFE9E4] text-[#001433] rounded-[8px] text-[18px] py-[5px] pl-[12px] inline-flex items-center">
            {item}
            <button className="w-[32px] h-[32px] flex justify-center items-center" onClick={(e) => {  e.stopPropagation(); remove(item) }}>
                <img src={CloseIcon.src} width="8" height="8" alt=""/>
            </button>
        </div>
    );
};