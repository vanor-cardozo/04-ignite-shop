export function currencyFormatter(num: number) {
    const result = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        }).format(num / 100)
    return result
}