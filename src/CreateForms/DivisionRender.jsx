import { useState } from 'react';
import DivisionForm from './DivisionForm';
import SubDivisionForm from './SubDivisionForm';
import SubStationForm from './SubStationForm';
import { Heading, Text } from '@radix-ui/themes';


const DivisionRender = () => {
    const [selectedOption, setSelectedOption] = useState('Division');

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className='pl-5'>
             <div className='p-5 pl-0'>
                <Heading weight={'bold'}>
                    Add New {selectedOption}
                </Heading>
                <Text as='span' color='gray' size={2} className='text-center'>Fill in this form to add new '{selectedOption}'.</Text>
            </div>
           <div>
           <label htmlFor="creationForm">Choose your creation form:</label>
            <select
                className='rounded-md ml-2'
                id="creationForm"
                value={selectedOption}
                onChange={handleSelectChange}
            >
                <option value="Division">Division</option>
                <option value="Sub Division">Sub Division</option>
                <option value="Sub Station">Sub Station</option>
            </select>
           </div>


            {selectedOption == "Division" && <DivisionForm />}
            {selectedOption == "Sub Division" && <SubDivisionForm />}
            {selectedOption == "Sub Station" && <SubStationForm />}
        </div>
    );
};

export default DivisionRender;
