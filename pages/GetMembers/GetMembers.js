import { useState, useEffect } from 'react';
import Select from 'react-select';
const GetMembers = () => {
  

  const [options, setOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);



  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://creative-project-manager-server.vercel.app/members');
      const data = await response.json();
      const transformedData = data.map((item) => ({
        value: item.id,
        label: item.name,
      }));
      setOptions(transformedData);
    };

    fetchData();
  }, []);

  const handleSelect = (selectedOption) => {
    setSelectedOptions(selectedOption);
  };

    return (
        <div>
          <div class="mb-4">
      <label class="block text-sky-500 font-bold mb-2" for="category">
        Team Members
      </label>
      <div>
      <Select
        options={options}
        isMulti
        value={selectedOptions}
        onChange={handleSelect}
      />
      {selectedOptions.length > 0 && (
        <div>
          {selectedOptions.map((option) => (
            <div key={option.value}>
            </div>
          ))}
        </div>
      )}
    </div>

    </div>

        </div>
    );
};



export default GetMembers;
