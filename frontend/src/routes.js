import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Homepage from './pages/Homepage/Homepage';
import ExampleProfile from './pages/ExampleProfile/ExampleProfile';
import ExamplesList from './pages/ExampleList/ExamplesList';
import TermsAndConditions from './pages/TermsAndConditions/TermsAndConditions';
import AboutUs from './pages/AboutUs/AboutUs';

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={ Homepage }/> {/* sem o exact, o router não irá diferenciar essa das outras Routes, pois o Router compara o começo da rota somente (startsWith)*/ }
            <Route path="/exemplo/:exampleID" component={ ExampleProfile }/>
            <Route path="/exemplos" exact component={ ExamplesList }/>
            <Route path="/termos-e-condicoes" exact component={ TermsAndConditions }/>
            <Route path="/sobre" exact component={ AboutUs }/>
        </BrowserRouter>
    );
}