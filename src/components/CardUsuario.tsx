import "./styles.css"

type Props = {
    nome: string;
    tipoUsuario: "admin" | "visitante" | "editor";
}

function CardUsuario (props: Props) {
    return(
        <>
        <div className="container2">
        <h1 className="container">{props.nome}</h1>
        {props.tipoUsuario == "admin" && <p>Bem-vindo, administrador</p>}
        {props.tipoUsuario == "visitante" && <p>Acesso limitado para visitantes</p>}
        {props.tipoUsuario == "editor" && <p>Editor autorizado</p>}
        </div>
        </>
    )
}

export default CardUsuario;