import { useEffect, useState } from 'react';
import './App.css'
import CardDesign from './Component/Cards/CardDesign'
import Header from './Component/Header/Header'
import axios from 'axios';
import { BACKEND_BASE_URL } from '../config';

function App() {
  const [resourceData, setResourceData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const fetchData = async () => {
    try {
      const response = await axios.get(`${BACKEND_BASE_URL}/api/utils/getResourceIndex`);
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
