import { HandbagSimple } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog'
import { CartClose, CartContainer, CartContent, CartFooter, CartItemContainer, CartItemText } from '../styles/components/CustomerCart'
import { X } from 'phosphor-react'
import Image from 'next/image'
import { useContext } from 'react'
import { CustomerCartContext } from '../contexts/CustomerCartContext'
import { currencyFormatter } from '../utils/currencyFormatter'
import axios from 'axios'

export function CustomerCart() {
    const { customerCartItems, setCustomerCartItems, totalCartValue } = useContext(CustomerCartContext)
    const totalValue = totalCartValue()

    function removeCartItem(id){
        setCustomerCartItems(customerCartItems.filter(item => item.id !== id))
    }

    async function handleBuyProduct() {
        const productsSelected = customerCartItems.map((item)=> (
            {
                price: item.defaultPriceId,
                quantity: 1,
            }
        ))
        try {
            // setIsCreatingCheckoutSession(true)
            const response = await axios.post('/api/checkout', {
                products: productsSelected,
            })

            const { checkoutUrl } = response.data

            window.location.href = checkoutUrl
        } catch (err) {
        // recomendado utilizar uma ferramenta de Observabilidade **Datadog / Sentry
            // setIsCreatingCheckoutSession(false)
            alert('Falha ao redirecionar ao checkout!')
        }
    }

    return(
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <button>
                    <HandbagSimple weight='bold' size={24} />
                    <span>
                        {customerCartItems?.length}
                    </span>
                </button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <CartContent>
                    <CartClose asChild>
                        <X size={24} weight="bold" />
                    </CartClose>
                    <h2>Carrinho de compras</h2>
                    <CartContainer>
                        {customerCartItems.map((cartItem, index)=> (
                        <CartItemContainer key={index ++}>
                            <Image
                                src={cartItem.imageUrl}
                                alt=""
                                width={102}
                                height={94}
                            />
                            <CartItemText>
                            <p>{cartItem.name}</p>
                            <strong>{currencyFormatter(cartItem.price)}</strong>
                            <button onClick={()=>removeCartItem(cartItem.id)}>Remover</button>
                            </CartItemText>
                        </CartItemContainer>
                        ))}
                    </CartContainer>
                    <CartFooter>
                        <span>
                            <p>Quantidade</p>
                            <p>{`${customerCartItems.length} itens`}</p>
                        </span>
                        <span>
                            <strong>Valor total</strong>
                            <strong>{totalValue}</strong>
                        </span>
                        <button 
                            disabled={customerCartItems.length > 0 ? false : true}
                            onClick={()=> handleBuyProduct()}
                        >
                            Finalizar compra
                        </button>
                    </CartFooter>
                </CartContent>
            </Dialog.Portal>
        </Dialog.Root>

    )
}