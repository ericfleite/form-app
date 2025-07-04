import Produto from "./Produto";

type ProdutoProps = {
  nome: string;
  preco: number;
  emEstoque: boolean;
};

type Props = {
  produtos: ProdutoProps[];
};

function ListaDeProdutos({ produtos }: Props) {
  return <Produto produtos={produtos} />;
}

export default ListaDeProdutos;
