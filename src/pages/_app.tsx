import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";

import logoImg from '../assets/logo.svg'
import { Container, Header } from "../styles/pages/app";

import Image from "next/image";
import { CustomerCart } from "../components/CustomerCart";
import { CustomerCartProvider } from "../contexts/CustomerCartContext";
import Link from "next/link";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
  <Container>
    <CustomerCartProvider>
      <Header>
        <Link href={'/'}>
          <Image src={logoImg.src} width={130} height={60} alt=""/>
        </Link>
        <CustomerCart />
      </Header>

      <Component {...pageProps} />
    </CustomerCartProvider>
  </Container>
  )
}
