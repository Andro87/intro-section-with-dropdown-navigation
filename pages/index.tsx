import ContainerContext from "../contexts/ContainerContext";
import MainContainer from "../components/mainContainer";
import React, { useState } from "react";

export default function Home() {
    const open = useState(false);
    return (
        <ContainerContext.Provider value={{ open }}>
            <MainContainer />
        </ContainerContext.Provider>
    );
}
