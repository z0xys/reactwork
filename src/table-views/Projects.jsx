import { NavLink, useLocation } from "react-router-dom";
import GenericTable from "../GenericTable";
import { Button, Heading, Grid } from '@radix-ui/themes';

export default function Projects() {
    let location = useLocation();
    let createForm = location.pathname.replace('/view','/create');

    return (
        <div className="flex flex-col h-screen p-5 pr-2">
            <div className="flex flex-row justify-between pb-2">
                <Heading as="h2">All Projects</Heading>
                   <Grid columns="2" gap="2">
                   <NavLink to={createForm}>
                   <Button>Add</Button>
                   </NavLink>
                    <Button>Edit</Button>
                   </Grid>
            </div>
            <div className="h-5/6 flex-1" >
                
                <GenericTable />
            </div>
        </div>
    )
}