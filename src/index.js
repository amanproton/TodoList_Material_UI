import react from 'react';
import reactDom from 'react-dom';

import TopContainer from './TopContainer'
import BottomContainer from './BottomContainer'

import './temp.css'







reactDom.render(

    <>
        <div id="container">

            <TopContainer />

            <BottomContainer />

        </div>
    </>,
    document.getElementById('root')
)

