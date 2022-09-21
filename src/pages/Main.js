import React from "react";
import MainVisual from './MainVisual';
import MainContent from './MainContent';
import Customner from './Customner';

const Main = () => {
    return (
        <main className="Main">
            <MainVisual />
            <MainContent />
            <Customner />
        </main>
    )
}

export default Main;