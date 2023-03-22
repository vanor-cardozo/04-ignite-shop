import { stripe } from "@/src/lib/stripe"
import { ImageContainer, ProductContainer, ProductDetails } from "@/src/styles/pages/product"
import { currencyFormatter } from "@/src/utils/currencyFormatter"
import { GetStaticPaths, GetStaticProps } from "next"
import Image from "next/image"
import { useRouter } from "next/router"
import Stripe from "stripe"


interface ProductsProps {
    product: {
        id: string
        name: string
        imageUrl: string
        price: number
        description: string
    }
}

export default function Product({ product }: ProductsProps) {
    const { isFallback } = useRouter()

    if(isFallback) {
        return <p>Loading...</p>
    }

    return(
        <ProductContainer>
            <ImageContainer>
                <Image src={product.imageUrl} width={520} height={480} alt=""/>
            </ImageContainer>
            <ProductDetails>
                <h1>{product.name}</h1>
                <span>{currencyFormatter(product.price)}</span>

                <p>{product.description}</p>

                <button>
                    comprar agora
                </button>
            </ProductDetails>
        </ProductContainer>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            { params: {id: 'prod_NZEra3HCO7lwYX'}} // utilizar paths apenas para rotas principais **produtos mais vendidos, **produtos mais visualizados, pois pode afetar o tempo de execução e performace do build
        ],
        fallback: true, //utilizar o fallback como true habilita e implementar o loading, é uma boa alternativa para apps com muitas rotas dinâmicas
    }
}

export const getStaticProps: GetStaticProps<any, {id: string}> = async ({ params }) => {
    const productId = params!.id

    const product = await stripe.products.retrieve(productId, {
        expand: ['default_price']
    })

    const price = product.default_price as Stripe.Price

    return {
        props: {
            product: {
                id: product.id,
                name: product.name,
                imageUrl: product.images[0],
                price: price.unit_amount,
                description: product.description,
            }
        },
        revalidate: 60 * 60 *1 // 1 hora
    }
}