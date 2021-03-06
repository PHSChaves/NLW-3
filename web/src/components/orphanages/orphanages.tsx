import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {FiPlus, FiArrowRight} from 'react-icons/fi';
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';

import MarkerImg from '../../img/local.svg'; //Esse é o icone que queremos por no mapa
import './orphanages.css';
import mapIcon from '../../utils/mapIcon';
import api from '../../services/api';

interface Orphanage {
    id: number;
    latitude: number;
    longitude: number;
    name:string;
}


function OrphanagesMap () {

    const [orphanages, SetOrphanages] = useState<Orphanage[]>([]);

    console.log(orphanages);

    useEffect(() => {
        api.get('orphanages').then(response => {
            SetOrphanages(response.data);
        });
    }, []);

    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={MarkerImg} alt=""/>

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Poá</strong>
                    <span>São Paulo</span>
                </footer>
            </aside>
            

            <MapContainer  //MapContainer é uma 'classe' para que possamos definir mapas dentro de uma aplicação

                center={[-23.5361908,-46.3522796]} //posição central do mapa
                zoom={15} //zoom do mapa
                style={{ width: '100%', height: '100%' }}>

                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> 

                {orphanages.map(orphanage => {
                    return (
                        <Marker //esse é o marcador da posição que queremos
                            key={orphanage.id} //esse Key é obrigatório e tem que ser criado com um atributo unico da listagem
                            icon={mapIcon} //Icone
                            position={[orphanage.latitude, orphanage.longitude]} //Posição do icone
                        >
                            <Popup closeButton={false} minWidth={240} maxWidth={240} className="markerPopup">
                                {orphanage.name}
                                <Link to={`/orphanage/${orphanage.id}`}>
                                    <FiArrowRight size={20} color="#fff" />
                                </Link>
                            </Popup>
                        </Marker>
                    )
                })}

            </MapContainer>

            <Link to="/orphanages/create" className="create-orphanage">
                <FiPlus size={32} color="#ffffff" />
            </Link>
        </div>

    )
}

export default OrphanagesMap;