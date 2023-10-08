import React from 'react'
import NavBar from '../components/Navbar/NavBar';
import CatalogueCards from '../components/CatalogueCards';
import { useDocTitle } from '../components/CustomHook';
const Catalogue = () => {
  useDocTitle('E-Learn')
  return (
    <div>
      <NavBar></NavBar>
      <CatalogueCards></CatalogueCards>
    </div>
  )
}

export default Catalogue
