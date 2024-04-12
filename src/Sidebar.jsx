

export default function Sidebar({children}){


    return (
        <>
        <aside className=" h-screen  mr-10">
            <nav className="h-full flex flex-col border-r border-red-500 shadow-sm">
                <div className="p-4 pb-4 flex justify-between items-center">
                <div className="">INVENTORY</div>
                {/* <button>Closebtn</button> */}

                </div>

                <ul className="flex-1 px-3">{children}</ul>
                
            </nav>
        </aside>
        </>
    )


}

export function SidebarItem({text, active}){
    return(
        <li className="p-1">
            <span>{text}</span>
        </li>
    )
}