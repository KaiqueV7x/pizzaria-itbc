
import {
    BrowserRouter,
    HashRouter,
    Routes,
    Route

}
from "react-router-dom"
import HomeFuncionario from "../pages/HomeFuncionario/HomeFuncionario"
import ListarProduto from "../pages/ListarProduto/ListarProduto"

// BrowserRouter : utilize para navegação local ou no link "href"
// HashRouter: utilize para navegação local ou online utilizando "Link"

const AppRoutes = () =>{


    return (
     <HashRouter>
          <Routes>
            
             <Route
              path="/"
              element={<HomeFuncionario/>}
             />

             <Route
              path="/pizzaria/funcionario/home"
              element={<HomeFuncionario/>}
             />

             <Route
              path="/pizzaria/funcionario/produtos"
              element={<ListarProduto/>}
             />

          </Routes>
     </HashRouter>
         
    )
}

export default AppRoutes