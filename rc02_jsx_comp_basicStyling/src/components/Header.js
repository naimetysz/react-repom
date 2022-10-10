//* Harici bir dosya icersinde olusturulan bir component
//* export default ile proje icerisinde herhangi bir yerde
//* kullanima kullanima acimiş olur. Kullanmak icin hedef
//* dosyada import .... from "./..." ile import yapmak yeterlidir.

import React from "react";
import App from "../App";
class Header extends React.Component{
  render(){
    return(
      <Header>
        <h1>

        </h1>
      </Header>
    )
  }
}
/// header compoenenti olusturdum simdi kullan
export default Header;