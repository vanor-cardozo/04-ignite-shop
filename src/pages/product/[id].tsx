import { ImageContainer, ProductContainer, ProductDetails } from "@/src/styles/pages/product"
import { useRouter } from "next/router"


export default function Product() {
    const {query} = useRouter()
    return(
        <ProductContainer>
            <ImageContainer>

            </ImageContainer>
            <ProductDetails>
                <h1>Camiseta X</h1>
                <span>R$ 79,90</span>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum repellendus architecto, quae excepturi perspiciatis fugiat a blanditiis consequatur quam expedita velit assumenda sint quos modi quia dolorem, repudiandae voluptas sit?</p>

                <button>
                    comprar agora
                </button>
            </ProductDetails>
        </ProductContainer>
    )
}