export const SelectBody = ({data, addLang}) => {
    return (
        <div
            className="absolute mt-[8px] w-full max-h-[300px] bg-white rounded-[8px] outline overflow-y-scroll">

            {data.map((item, i) => (
                <div key={i} onClick={() => addLang(item)}
                     className="text-[20px] px-[10px] py-[16px] cursor-pointer">{item}</div>
            ))}
        </div>
    );
};
