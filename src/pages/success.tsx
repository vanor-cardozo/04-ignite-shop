import Link from "next/link";
import { ImageContainer, SuccessContainer } from "../styles/pages/success";

export default function Success() {
    return(
        <SuccessContainer>
            <h1>Compra Efetuada!</h1>

            <ImageContainer>

            </ImageContainer>

            <p>
                Uhuull <strong>Vanor Cardozo</strong>, sua <strong>Camiseta Beyond the Limits</strong> já está a caminho da sua casa.
            </p>

            <Link href={'/'}>
                voltar ao Catalogo
            </Link>
        </SuccessContainer>
    )
}