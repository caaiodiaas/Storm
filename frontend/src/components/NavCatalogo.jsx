import React from "react";
import "../assets/css/navcatalogo.css"

function NavCatalogo() {
    return(
        <div className="navegacaoCatalogo">
            <img src="../image/kisspng-shopping-bag-cartoon-fashion-shopping-bags-5a810a5eab7012.5003817015184062387022.png" alt="" />
            <div className="barra">
                <ul>
                    <li>Ofertas</li>
                    <li>Novidades</li>
                    <li>Maia vendidos</li>
                </ul>
            </div>
        </div>
    );
}
export default NavCatalogo;