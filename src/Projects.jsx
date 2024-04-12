import GenericTable from "./GenericTable";


export default function Projects(){


    return(
        <div className="flex flex-col h-screen p-5">
        <h1>PROJECTS TABLE</h1>
        
        <div className="h-5/6 flex-1" >
        <GenericTable/>
        </div>
        </div>
    )
}