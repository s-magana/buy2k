import { Button, Card } from 'react-bootstrap'
import { formatCurrency } from '../utilities/formatCurrency'
import { useShoppingCart } from '../context/ShoppingCartContext'

type StoreItemProps = {
	id: number
	name: string
	price: number
	imgUrl: string
}

export function StoreItem({id, name, price, imgUrl} : StoreItemProps){
	const {getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart} = useShoppingCart()

	const quantity = getItemQuantity(id)

	return(
		<Card className='h-100 card-font'>
			<Card.Img variant='top' src={imgUrl} height='200px' style={{objectFit: 'contain'}} />
			<Card.Body className='d-flex flex-column'>
				<Card.Title className='d-flex justify-content-between align-items-baseline mb-4'>
					<span className='fs-4'>{name}</span>
					<span className='ms-2 text-muted fst-italic'>{formatCurrency(price)}</span>
				</Card.Title>
				<div className='mt-auto'>
					{quantity === 0 ? (<Button className='w-100 text-uppercase add-cart-btn' onClick={() => increaseCartQuantity(id)}>+ Add to Cart</Button>) : (
						<div className='d-flex align-items-center flex-column' style={{gap: '0.5rem'}}>
							<div className='d-flex align-items-center justify-content-center' style={{gap: '0.5rem'}}>
								<Button className='increase-decrease-btn' onClick={() => decreaseCartQuantity(id)}>-</Button>
								<div className='text-uppercase'>
									<span className='fs-3'>{quantity}</span> in cart
								</div>
								<Button className='increase-decrease-btn' onClick={() => increaseCartQuantity(id)}>+</Button>
							</div>
							<Button onClick={() => removeFromCart(id)} size='sm' className='text-uppercase remove-btn'>Remove</Button>
						</div>
					)}
				</div>
			</Card.Body>
		</Card>
	)
}