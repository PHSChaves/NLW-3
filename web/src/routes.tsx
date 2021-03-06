import {BrowserRouter, Route} from 'react-router-dom';

import Landing from './components/lp/landing';
import Orphanages from './components/orphanages/orphanages';
import OrphanageSingle from './components/orphanagesingle/orphanagesingle';
import CreateOrphanage from './components/create-orphanage/createorphanage';

function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/app" component={Orphanages} />
            <Route path="/orphanages/create" exact component={CreateOrphanage} />
            <Route path="/orphanage/:id" exact component={OrphanageSingle} />
        </BrowserRouter>
    )

}

export default Routes;