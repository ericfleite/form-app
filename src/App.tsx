import CardUsuario from "./components/CardUsuario"
import Comentario from "./components/Comentario"
import ListaDeProdutos from "./components/ListaDeProdutos"
import Painel from "./components/Painel"


function App() {


const produtos = [
  { nome: "Camiseta", preco: 49.9, emEstoque: true },
  { nome: "Calça Jeans", preco: 89.9, emEstoque: false },
  { nome: "Tênis", preco: 199.9, emEstoque: true },
];


  return (
    <>
      <CardUsuario nome="Adiministrador" tipoUsuario="admin" />
      <CardUsuario nome="Nilce" tipoUsuario="visitante" />
      <CardUsuario nome="Eric" tipoUsuario="editor" />
      <Comentario autor="Eric" children="Olá mundo!" revisado = {true} />
      <Comentario autor="Nilce" children="Olá mundo!" revisado = {false} />
      <Comentario autor="Professor" children="Não use IA" revisado = {true} />
      <Painel titulo="Eric">
        <img src="https://avatars.githubusercontent.com/u/179408451?v=4" alt="Foto do Perfil" height={100} width={100}/>
      </Painel>
      <Painel titulo="Nilce">
        <ul>
          <li>Exemplo 1</li>
          <li>Exemplo 2</li>
        </ul>
      </Painel>
      <ListaDeProdutos produtos={produtos} />
    </>
  )
}

export default App
