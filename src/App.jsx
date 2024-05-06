import { useEffect, useState } from 'react';
import './App.css'
import CardDesign from './Component/Cards/CardDesign'
import Header from './Component/Header/Header'
import axios from 'axios';

function App() {
  const [resourceData, setResourceData] = useState({});
  // State to handle loading state
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:1001/api/utils/getResourceIndex');
      setResourceData(response.data?.data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="min-h-screen w-full bg-gray-100">
      <Header resourceData={resourceData}></Header>
      <CardDesign resourceData={resourceData}></CardDesign>
    </div>
    </>
  )
}

export default App
