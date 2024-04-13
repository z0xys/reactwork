import { useState } from 'react';
import DivisionForm from './DivisionForm';
import SubDivisionForm from './SubDivisionForm';
import SubStationForm from './SubStationForm';

const DivisionRender = () => {
    const [selectedOption, setSelectedOption] = useState('Division');

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div>
            <label htmlFor="creationForm">Choose your creation form:</label>
            <select
                id="creationForm"
                value={selectedOption}
                onChange={handleSelectChange}
            >
                <option value="Division">Division</option>
                <option value="SubDivision">Sub Division</option>
                <option value="SubStation">Sub Station</option>
            </select>

            {selectedOption == "Division" && <DivisionForm />}
            {selectedOption == "SubDivision" && <SubDivisionForm />}
            {selectedOption == "SubStation" && <SubStationForm />}
        </div>
    );
};

export default DivisionRender;
