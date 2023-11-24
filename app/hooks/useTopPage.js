import { useEffect, useState } from 'react';

const useTopPage = () => {
  const [isTopPage, setIsTopPage] = useState(true);

  useEffect(() => {
    const homePage = document.getElementById('home')
    setIsTopPage(homePage);
  }, [])

  return isTopPage;
}

export default useTopPage;