import { navigate } from 'react-router-dom';

export const GlobalPostFunction = async (data, route) => {
    try {
        const response = await fetch(`http://localhost:3000/${route}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            const result = await response.json();
            console.log(`New site ${route} added:`, result);
            navigate(`/app/${route.toLowerCase()}/view`);
        } else {
            console.error(`Error adding ${route}:`, response.status);
        }
    } catch (error) {
        console.error('An error occurred:', error);
    }
};
