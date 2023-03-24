import { HandbagSimple } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog'
import { CartClose, CartContainer, CartContent, CartFooter, CartItemContainer, CartItemText } from '../styles/components/CustomerCart'
import { X } from 'phosphor-react'
import Image from 'next/image'

export function CustomerCart() {
    const repeat = [0,1,2,3,4,5,6,7,8,9]
    return(
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <button>
                    <HandbagSimple weight='bold' size={24} />
                    <span>
                        1
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
                        {repeat.map((item)=> (
                            <CartItemContainer>
                            <Image
                                src={""}
                                alt=""
                                width={102}
                                height={94}
                            />
                            <CartItemText>
                            <p>Camiseta Beyond the Limits</p>
                            <strong>R$ 79,90</strong>
                            <button>Remover</button>
                            </CartItemText>
                        </CartItemContainer>
                        ))}
                    </CartContainer>
                    <CartFooter>
                        <span>
                            <p>Quantidade</p>
                            <p>3 itens</p>
                        </span>
                        <span>
                            <strong>Valor total</strong>
                            <strong>R$ 199,90</strong>
                        </span>
                        <button>
                            Finalizar compra
                        </button>
                    </CartFooter>
                </CartContent>
            </Dialog.Portal>
        </Dialog.Root>

    )
}