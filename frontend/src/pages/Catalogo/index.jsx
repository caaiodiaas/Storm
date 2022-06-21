import React from "react";
import "./catalogo.css"
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Categorias from "../../components/Categorias";
import NavCatalogo from "../../components/NavCatalogo";
import ItemCatalogo from "../../components/ItemCatalogo";

function Catalogo(){
    return(
        <div className="PagCatalogo">
            <Navbar />
            <div className="topo-catalogo">
                <input className="pesquisaCatalogo" type="text" name="pesquisar" id="pesquisa" placeholder="O que está procurando hoje?" />
                <Categorias />
            </div>
            <NavCatalogo />
            <div className="corpoCatalogo">
                <div className="mensagem">
                    <h2>Resultados de sua Busca <strong>“nome da busca”</strong></h2>
                </div>
                <div className="colunas">
                    <div className="colunaDireita">
                    <ItemCatalogo imagem="" nome="Carro" preco="00,00" parcelas="0 x R$ 00,00" frete="gratis" />
                    <ItemCatalogo imagem="" nome="Carro" preco="00,00" parcelas="0 x R$ 00,00" frete="gratis" />
                    <ItemCatalogo imagem="" nome="Carro" preco="00,00" parcelas="0 x R$ 00,00" frete="gratis" />
                    <ItemCatalogo imagem="" nome="Carro" preco="00,00" parcelas="0 x R$ 00,00" frete="gratis" />
                    <ItemCatalogo imagem="" nome="Carro" preco="00,00" parcelas="0 x R$ 00,00" frete="gratis" />
                    <ItemCatalogo imagem="" nome="Carro" preco="00,00" parcelas="0 x R$ 00,00" frete="gratis" />
                    <ItemCatalogo imagem="" nome="Carro" preco="00,00" parcelas="0 x R$ 00,00" frete="gratis" />
                    <ItemCatalogo imagem="" nome="Carro" preco="00,00" parcelas="0 x R$ 00,00" frete="gratis" />
                    <ItemCatalogo imagem="" nome="Carro" preco="00,00" parcelas="0 x R$ 00,00" frete="gratis" />
                    <ItemCatalogo imagem="" nome="Carro" preco="00,00" parcelas="0 x R$ 00,00" frete="gratis" />
                    <ItemCatalogo imagem="" nome="Carro" preco="00,00" parcelas="0 x R$ 00,00" frete="gratis" />
                    <ItemCatalogo imagem="" nome="Carro" preco="00,00" parcelas="0 x R$ 00,00" frete="gratis" />
                    <ItemCatalogo imagem="" nome="Carro" preco="00,00" parcelas="0 x R$ 00,00" frete="gratis" />
                    <ItemCatalogo imagem="" nome="Carro" preco="00,00" parcelas="0 x R$ 00,00" frete="gratis" />
                    <ItemCatalogo imagem="" nome="Carro" preco="00,00" parcelas="0 x R$ 00,00" frete="gratis" />
                    <ItemCatalogo imagem="" nome="Carro" preco="00,00" parcelas="0 x R$ 00,00" frete="gratis" />
                    </div>

                    <div className="colunaEsquerda">
                        <h2>Categoria</h2>

                        <div>
                            <input type="checkbox" id="categoria1" name="categria1" />
                            <label for="categoria1">Categoria 1</label>
                        </div>

                        <div>
                            <input type="checkbox" id="categoria2" name="categria2" />
                            <label for="categoria2">Categoria 2</label>
                        </div>

                        <div>
                            <input type="checkbox" id="categoria3" name="categria3" />
                            <label for="categoria3">Categoria 3</label>
                        </div>

                        <div>
                            <input type="checkbox" id="categoria4" name="categria4" />
                            <label for="categoria4">Categoria 4</label>
                        </div>

                        <h2>Tamanho</h2>

                        <div>
                            <input type="checkbox" id="P" name="P" />
                            <label for="P">P</label>
                        </div>

                        <div>
                            <input type="checkbox" id="M" name="M" />
                            <label for="M">M</label>
                        </div>

                        <div>
                            <input type="checkbox" id="G" name="G" />
                            <label for="G">G</label>
                        </div>

                        <div>
                            <input type="checkbox" id="GG" name="GG" />
                            <label for="GG">GG</label>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default Catalogo;