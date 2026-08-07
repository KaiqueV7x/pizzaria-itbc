import MenuFuncionario from "../MenuFuncionario/MenuFuncionario"


const ListarProduto = () => {

const arrayProdutos = [

{
    id: 1,
    nome: "Pizza de Calabresa",
    precoVenda: 59.90,
    descricao: "Pizza de calabresa com bastante cebola"
},
{
    id: 2,
    nome: "Pizza de Mussarela",
    precoVenda: 69.90,
    descricao: "Pizza de mussarela com tomates frescos"
},
{
    id: 3,
    nome: "Pizza de Frango",
    precoVenda: 63.80,
    descricao: "Pizza de Frango com catupiry"
}


]




    return (

        <div className="container">
            <MenuFuncionario/>

            <div className="table-responsive">
  <table className="table table-bordered table-striped table-hover">
    <thead className="table-sucess">
      <tr>
        <th>Nome</th>
        <th>Preço</th>
        <th>Descrição</th>
        <th>Ações</th> {/*Nova coluna de Ações */} 
      </tr>
    </thead>

    <tbody>

    { arrayProdutos.map((produto) => (

        <tr>
        <td style={{ fontSize: "13px" }}> {produto.nome}</td>

        <td style={{ fontSize: "13px" }}></td>
        {
            new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
            }).format(produto.precoVenda)
        }

        <td style={{ fontSize: "13px" }}> {produto.descricao}</td>

        <td className="text-center" style={{ width: "100px" }}>
          {/* Botão Editar */}
          <button className="btn btn-sm btn-primary me-2">
            <i className="fas fa-pencil-alt"></i>
          </button>

          {/* Botão Excluir */}
          <button className="btn btn-sm btn-danger">
            <i className="fas fa-trash-alt"></i>
          </button>
        </td>
      </tr>


     ))}


      
    </tbody>
  </table>
</div>

        </div>
    )
}

export default ListarProduto