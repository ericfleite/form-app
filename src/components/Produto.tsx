
type ProdutoProps = {
    nome: string;
    preco: number;
    emEstoque: boolean;
}

type Props = {
    produtos: ProdutoProps [];
}

function Produto ({produtos}: Props) {
    
    return(
        <>
        <ul>
        {produtos.map((produto, index) =>
        produto.emEstoque && (
        <li key={index}>
        {produto.nome} - R${produto.preco.toFixed(2)}
        </li>
        )
        )}
        </ul>

        </>
    )
}

export default Produto;