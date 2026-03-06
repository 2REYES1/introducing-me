

function NewsCard(props) {
    return (
        <div className="flex flex-col w-[95%]">       
            <div id="news-title-section" className="bg-[#B2D365] max-w-[50%] text-center text-xl font-['Orbit'] shadow-[0.2rem_0.2rem_0_rgba(0,0,0,0.25)] border-3 border-black text-black translate-y-3">
                {props.newsTitle} 
            </div>
            <div id="content-section" className="bg-[#6D6D6D] border-2 border-black font-['Orbit'] max-h-[100px] overflow-y-auto text-sm shadow-[0.375rem_0.375rem_0_rgba(0,0,0,0.25)]">
                <p className="p-3 text-left">
                  {props.content}  
                </p>
            
            </div>
            <div id="date-section" className="w-full flex justify-end">
                <p className="font-['Orbit'] text-sm bg-black p-2 -translate-y-3 shadow-[0.2rem_0.2rem_0_rgba(0,0,0,0.25)]">
                    {props.date}
                </p>
            </div>
            
        </div>
    );
}

export default NewsCard;