import styles from "./styles.module.css"

type Props = {
    autor: string;
    children: string;
    revisado: boolean;
}

function Comentario(props: Props) {
    return(
        <>
        <h2 className={styles.container}>{props.autor}</h2>
        {props.revisado ? <p className={styles.container}>{props.children}</p> : <p className={styles.container}>Comentário aguardando revisão</p>}
        </>
    )
}

export default Comentario;