import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import MarkerImg from '../../img/local.svg';
import './sidebar.css';

export default function Sidebar() {
    const {goBack} = useHistory();

    return(
        <aside className="sidebar">
            <img src={MarkerImg} alt="Happy"/>

            <footer>
                <button type="button" onClick={goBack}>
                    <FiArrowLeft size={24} color="#fff" />
                </button>
            </footer>
        </aside>
    )
}