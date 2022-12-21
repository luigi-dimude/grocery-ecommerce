export const discountedPrice = (price: number, discount: number) => {
  if (discount <= 0) return price
  return Math.floor(price - ((discount / 100) * price))
}

export const createUrl = (link: string) => link.toLowerCase().split(' ').join('-')
