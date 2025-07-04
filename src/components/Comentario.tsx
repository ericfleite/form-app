type Props = {
    autor: string;
    children: string;
    revisado: boolean;
}

function Comentario(props: Props) {
    return(
        <>
        <h2>{props.autor}</h2>
        {props.revisado ? <p>{props.children}</p> : <p>Comentário aguardando revisão</p>}
        </>
    )
}

export default Comentario;