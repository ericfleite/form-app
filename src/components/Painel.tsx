import React from "react";

type Props = {
    titulo: string;
    children: React.ReactNode;
}

function Painel (props: Props){
    return(
        <>
        <h2>{props.titulo}</h2>
        {props.children}
        </>
    )
}

export default Painel;