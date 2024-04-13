export default function Sidebar({ isExpanded, toggleSidebar, children }) {
    

    return (
        <aside className={`h-screen ${isExpanded ? 'mr-10' : ''}`}>
            {isExpanded && (
                <nav className="h-full flex flex-col border-r border-red-500 shadow-sm">
                    <div className="p-4 pb-4 flex justify-between items-center">
                        <div className="">INVENTORY</div>
                        <button onClick={toggleSidebar}>Closebtn</button>
                    </div>
                    <ul className="flex-1 px-3">{children}</ul>
                </nav>
            )}
        </aside>
    );
}

export function SidebarItem({ text, isActive }) {
    return (
        <li className="p-1" style={{color: isActive ? 'green' : 'red'}}>
            <span>{text}</span>
        </li>
    )
}