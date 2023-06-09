import Image from "next/image";
import { GetStaticProps } from "next";

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import { HomeContainer, Product } from "../styles/pages/home";

import { stripe } from "../lib/stripe";
import Stripe from "stripe";

import { currencyFormatter } from "../utils/currencyFormatter";
import Head from "next/head";

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: number
  }[]
}

export default function Home({products}: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map(product => {
          return (
              <Product
                key={product.id}
                href={`/product/${product.id}`} 
                className="keen-slider__slide"
                prefetch={false}
              >
                <Image src={product.imageUrl} width={520} height={480} alt="" />
        
                <footer>
                  <strong>{product.name}</strong>
                  <span>{currencyFormatter(product.price)}</span>
                </footer>
              </Product>
          )
        })}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async() => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price
    
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount,
    }
  })
  return {
    props: {
      products,
    },
    revalidate: 60 * 60 *2 //cria uma página estática a cada 2 horas,
  }
}
