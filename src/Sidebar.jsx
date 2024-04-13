import { Button, IconButton, Heading } from "@radix-ui/themes";
import { CircleFadingPlusIcon } from "lucide-react";
import { PanelLeftClose, MoreVertical, CirclePlus } from 'lucide-react';
import { Link } from "react-router-dom";

export default function Sidebar({ isExpanded, toggleSidebar, children }) {



    return (
        <aside className={`h-screen sticky top-0 overflow-y-auto mr-1`}>
            {isExpanded && (
                <nav className="h-full flex flex-col border-r bg-slate-700 ">

                    <span className="p-4 flex justify-between items-center">
                        <span className="mr-2 text-slate-200">
                            <Heading as="h1">INVENTORY</Heading>
                        </span>

                        {/* <PanelLeftClose className="text-slate-200" onClick={toggleSidebar} /> */}

                    </span>

                    <ul className="flex-1 px-3">{children}</ul>
                    <div className="border-t border-slate-200/25 text-slate-200 ">
                        <h6 className="py-1">Username</h6>
                        <span>user@email.com</span>
                    </div>

                </nav>
            )}

        </aside>
    );
}

export function SidebarItem({icon, text, isActive, createForm }) {
    const arr = ['Home'];
    
    return (
        <li className={`text-slate-200 p-1 ${isActive?"bg-slate-800":''}`}>
            <span className="flex flex-row justify-between">
                {icon}{text} 
                {isActive && !arr.includes(`${text}`) &&
                <Link to={createForm}>
                    <CirclePlus size={'22'}/>
                </Link>
                
                } 
                {/* {console.log(`${text}: `,arr.includes(`${text}`))} */}
            </span>
        </li>
    )
}