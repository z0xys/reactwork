import { NavLink, useLocation } from "react-router-dom";
import GenericTable from "../GenericTable";
import { Button, Heading, Grid } from '@radix-ui/themes';
import { useState, useEffect } from "react";

export default function Projects() {
    let location = useLocation();
    let createForm = location.pathname.replace('/view', '/create');

    const [data, setData] = useState([]);

    const cols = [
        { field: "projectCode" },
        { field: "projectName" },
        { field: "projectManager" },
        { field: "address" },
        { field: "projectDuration" },
        { field: "gstNumber" },
        { field: "agreementNumber" },
        { field: "date" },
        { field: "extendedDuration" },
        { field: "billingAddress" },
        { field: "remarks" }
    ]

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:3000/Projects');
            if (response.ok) {
                const result = await response.json();
                setData(result);
            } else {
                console.error('Error fetching data:', response.status);
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    useEffect(() => {
        fetchData(); 
    }, []);


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
                <GenericTable data={data} cols={cols} />
            </div>
        </div>
    )
}