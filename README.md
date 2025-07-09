# FORM-APP AULA-4# 

## class04 - 03/07/2025 (quinta-feira) - Praticando Conceitos do React

### :react-js:Conteúdo produzido por Profº Vinicius Martins


O React é uma biblioteca para interfaces de usuário nativas e da web. O React permite que você crie interfaces de usuário a partir de partes individuais chamadas componentes


O objetivo dessa lista de exercícios é praticar o uso de `Composition`, `Props` e `Conditional Rendering`. É importante realizar.

### 1️⃣ Exercise: **Card de Usuário com Nível de Acesso (Props + Condicional)**

Crie um componente `CardUsuario` que recebe as props:

- `nome`
- `tipoUsuario` ( "admin", "visitante" e "editor")

**Mostre o nome** e, de acordo com `tipoUsuario`, **renderize mensagens diferentes**:

- "Bem-vindo, administrador" (quando o tipo de Usuário for “admin”)
- "Acesso limitado para visitantes" (quando o tipo de Usuário for “visitantes”)
- "Editor autorizado" (quando o tipo de Usuário for “editor”)

Use Renderização condicional para fazer a lógica.

Lembre-se de utilizar typescript para realizar a tipagem das `Props` e de importar o componente no App.tsx para poder vê-lo sendo exibido.

### 2️⃣ Exercise: **Painel de Comentários com Condição e Children**

Crie um componente `Comentario` que recebe:

- `autor`
- um `children` contendo um parágrafo com texto
- `revisado` (boolean)

Exiba o nome do autor.

Se `revisado` for `false`, exiba a mensagem: **“Comentário aguardando revisão”**.

Caso contrário, mostre o texto normalmente.

Use `App.tsx` para renderizar 2 ou 3 comentários com diferentes valores de `revisado`.

### 3️⃣ Exercise: **Painel Reutilizável com Composição via Props**

Crie um componente `Painel` que recebe:

- `titulo` (prop)
- `children` (conteúdo interno)

Use o `Painel` em `App.tsx` com dois blocos diferentes:

- Um mostrando uma mensagem de boas-vindas
- Outro com uma lista (ul/li)

Exemplo de uso:

```tsx
//1º forma de fazer
<Painel titulo="Notícias">
	<img src="caminhoDaImagem.png" alt="texto alternativo" />
</Painel>

//2ª forma de fazer

<Painel 
	titulo="Notícias" 
	children={<img src="caminhoDaImagem.png" alt="texto alternativo" />}
/>

//AS duas maneiras funcionam
```

### 4️⃣ Challenge: **Lista de Produtos com Preço e Estoque**

Crie um componente `ListaProdutos` que recebe um array de objetos `produto` via props.

Cada produto deve conter: `nome`, `preco`, `emEstoque (boolean)`.

- Crie um componente `Produto` que recebe essas props e:
    - Mostre o nome e o preço
    - Use **renderização condicional** para exibir "Disponível" ou "Indisponível"
- A `ListaProdutos` deve usar `.map()` para exibir todos os produtos

Para esse desafio tente pesquisar os conceitos que ainda não foram dados em aula


Adicionado estilização com três tipos de exemplos.