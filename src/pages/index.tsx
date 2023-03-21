import Image from "next/image";
import { HomeContainer, Product } from "../styles/pages/home";
import tshirt1 from '../assets/tshirts/1.png'
import tshirt2 from '../assets/tshirts/2.png'
import tshirt3 from '../assets/tshirts/3.png'
import tshirt4 from '../assets/tshirts/4.png'

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={tshirt1} width={520} height={480} alt="camiseta com estampa de um foguete decolando"/>

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product>
        <Image src={tshirt2} width={520} height={480} alt="camiseta com estampa de um foguete decolando"/>

        <footer>
          <strong>Camiseta Y</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
