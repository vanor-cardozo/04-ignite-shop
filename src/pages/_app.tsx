import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";

import logoImg from '../assets/logo.svg'
import { Container, Header } from "../styles/pages/app";

import Image from "next/image";
import { CustomerCart } from "../components/CustomerCart";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
  <Container>
    <Header>
      <Image src={logoImg.src} width={130} height={60} alt=""/>
      <CustomerCart />
    </Header>

    <Component {...pageProps} />
  </Container>
  )
}
