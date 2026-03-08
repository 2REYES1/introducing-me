function ExperienceCard(props){
    return (
        <div className="flex flex-col w-[95%]">     
             
            <div id="role-title-section" className="bg-[#B2D365] text-center text-md font-['Orbit'] shadow-[0.2rem_0.2rem_0_rgba(0,0,0,0.25)] border-3 border-black text-black translate-y-4 p-2 z-5">
                {props.role} 
            </div>

            <div id="company-name-section" className="flex">
                <p className="font-['Silkscreen'] text-sm bg-gray-700 py-2 px-4 -translate-x-2 translate-y-3 shadow-[0.2rem_0.2rem_0_rgba(0,0,0,0.25)]">
                    {props.company}
                </p>
            </div>

            <div id="content-section" className="bg-[#6D6D6D] border-2 border-black font-['Orbit'] max-h-[200px] overflow-y-auto text-sm shadow-[0.375rem_0.375rem_0_rgba(0,0,0,0.25)] pt-2 pb-2">
                <p className="p-3 text-left">
                <span className="text-black font-bold">Tags: </span>
                {props.technologies?.join(", ")}
                </p>

                <div className="p-3 text-left">
                  {props.description?.map((item, index) => (
                    <div key={index} className="py-1">∘ {item}</div>
                  ))} 
                </div>

            
            </div>
            <div id="date-section" className="w-full flex justify-end translate-x-2">
                <p className="font-['Orbit'] text-sm bg-black p-2 -translate-y-3 shadow-[0.2rem_0.2rem_0_rgba(0,0,0,0.25)]">
                    {props.startDate} - {props.endDate}
                </p>
            </div>
            
        </div>
    );
}

export default ExperienceCard;