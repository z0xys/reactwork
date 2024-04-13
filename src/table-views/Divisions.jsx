import { NavLink, useLocation } from "react-router-dom";
import GenericTable from "../GenericTable";
import { Button, Heading, Grid } from '@radix-ui/themes';
import { useState, useEffect } from "react";

export default function Divisions() {
    let location = useLocation();
    let createForm = location.pathname.replace('/view', '/create');

    const [divisionsData, setDivisionsData] = useState([]);
    const [subDivisionsData, setSubDivisionsData] = useState([]);
    const [subStationsData, setSubStationsData] = useState([]);

    const divisionsCols = [
        { field: "divisionName" },
        { field: "remarks" },
    ]
    const subDivisionsCols = [
        { field: "subDivisionName" },
        { field: "remarks" },
    ]
    const subStationsCols = [
        { field: "subStationName" },
        { field: "remarks" },
    ]

    const fetchDivisionsData = async () => {
        try {
            const response = await fetch('http://localhost:3000/Divisions');
            if (response.ok) {
                const result = await response.json();
                setDivisionsData(result);
            } else {
                console.error('Error fetching data:', response.status);
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    const fetchSubDivisionsData = async () => {
        try {
            const response = await fetch('http://localhost:3000/SubDivisions');
            if (response.ok) {
                const result = await response.json();
                setSubDivisionsData(result);
            } else {
                console.error('Error fetching data:', response.status);
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }


    }

    const fetchSubStationsData = async () => {
        try {
            const response = await fetch('http://localhost:3000/SubStations');
            if (response.ok) {
                const result = await response.json();
                setSubStationsData(result);
            } else {
                console.error('Error fetching data:', response.status);
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    }

    useEffect(() => {
        fetchDivisionsData();
        fetchSubDivisionsData();
        fetchSubStationsData();
    }, []);


    return (
        <div className="flex flex-col h-screen p-5 pr-2">
            <div className="flex flex-row justify-between pb-2">
                <Heading as="h2">All Divisions</Heading>
                <Grid columns="2" gap="2">
                    <NavLink to={createForm}>
                        <Button>Add</Button>
                    </NavLink>
                    <Button>Edit</Button>
                </Grid>
            </div>
            <div className="h-5/6 flex-1" >
                <GenericTable data={divisionsData} cols={divisionsCols} />
            </div>

            <div className="flex flex-row justify-between pb-2">
                <Heading as="h2">All Sub Divisions</Heading>
                <Grid columns="2" gap="2">
                    <NavLink to={createForm}>
                        <Button>Add</Button>
                    </NavLink>
                    <Button>Edit</Button>
                </Grid>
            </div>
            <div className="h-5/6 flex-1" >
                <GenericTable data={subDivisionsData} cols={subDivisionsCols} />
            </div>

            <div className="flex flex-row justify-between pb-2">
                <Heading as="h2">All Sub Stations</Heading>
                <Grid columns="2" gap="2">
                    <NavLink to={createForm}>
                        <Button>Add</Button>
                    </NavLink>
                    <Button>Edit</Button>
                </Grid>
            </div>
            <div className="h-5/6 flex-1" >
                <GenericTable data={subStationsData} cols={subStationsCols} />
            </div>
        </div>
    )
}