import { Col, Row } from 'react-bootstrap'
import storeItems from '../data/items.json'
import { StoreItem } from '../components/StoreItem'

export function Store(){
  return (
	<>
		<div className='store-bg'>
			<h1 className='text-uppercase all-products-font'>All Products</h1>
			<Row md={2} xs={1} lg={3} className='g-3 ms-5 me-5 mb-5 mt-2'>
				{storeItems.map(item => (
					<Col key={item.id}>
						<StoreItem  {...item} />
					</Col>
				))}
			</Row>
		</div>
		<footer className='p-3 text-center d-block align-items-center justify-content-center'>
                <div>
                    <p className='mb-0'>© 2023 BUY2K</p>
                </div>
        </footer>
		</>
	)
}