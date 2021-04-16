import React from 'react'
import Layout from '../../components/Layout'
import {Form,Row,Col,Container,FormControl,Button} from 'react-bootstrap'
import AddIcon from '@material-ui/icons/Add';
import Link from 'next/Link'

export async function getServerSideProps() {
	// Fetch data from external API
	const res = await fetch(`http://localhost:3000/api/pembelian`)
	const data = await res.json()

	// Pass data to the page via props
	return { props: { data } }
}

export default function pembelian({data}) {
    return (
        <Layout>
            <Container>
                <Row>
                    <Col sm={8}>
                    Transaksi
                    <h3>Pembelian</h3>
                    </Col>
                    <Col sm={4}>
                    <div class="">  
						<Link href="/beli/penagihan-pembelian">
							<a>
								<button type="button" class="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-blue-500 hover:bg-blue-600 hover:shadow-lg"><AddIcon fontSize="small"/> Buat Pembelian Baru</button>
							</a>
						</Link>
                    </div>
                    </Col>
                </Row>
            </Container>
            <div className="border-t border-gray-200">
            <Form>
                <Form.Group as={Row} controlId="formPlaintext">
                    <Form.Label column sm="4">
                    Pembelian Belum Dibayar(dalam IDR)
                    <br/>
                    Rp.0,00
                    </Form.Label>
                    <Form.Label column sm="4">
                    Pembelian Jatuh Tempo(dalam IDR)
                    <br/>
                    Rp.0,00
                    </Form.Label>
                </Form.Group>
            </Form>
            </div>
            <div className="border-t border-gray-200">
            <Container>
                <Row>
                    <Col sm={8}>
                    <h3>Transaksi Pembelian</h3>
                    </Col>
                    <Col sm={4}>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
                        <Button type="submit">Submit</Button>
                    </Form>
                    </Col>
                </Row>
            </Container>
            </div>
            <table class="min-w-full table-auto">
						<thead class="justify-between">
							<tr class="bg-dark">
                                <th class="px-2">
                                <Form.Check type="checkbox"/>
                                </th>
								<th class="px-2 py-2">
									<span class="text-gray-300">Tanggal</span>
								</th>
                                <th class="px-8 py-2">
									<span class="text-gray-300">Nomor</span>
								</th>
								<th class="px-2 py-2">
									<span class="text-gray-300">Supplier</span>
								</th>
								<th class="px-2 py-2">
									<span class="text-gray-300">Tgl Jatuh Tempo</span>
								</th>
								<th class="px-2 py-2">
									<span class="text-gray-300">Status</span>
								</th>
                                <th class="px-2 py-2">
									<span class="text-gray-300">Sisa Tagihan(dalam IDR)</span>
								</th>
								<th class="px-2 py-2">
									<span class="text-gray-300">Total (dalam IDR)</span>
								</th>
							</tr>
						</thead>
						<tbody class="bg-white divide-y divide-gray-200">
						{data.map((i, index) => (
							<tr>
                                <td class="px-2 py-2 whitespace-nowrap font-large">
									<Form.Check type="checkbox"/>
								</td>
                                 <td class="px-2 py-2 whitespace-nowrap font-large">
									<div class="text-lg text-gray-900">{i.tgltransaksi}</div>
								</td>
								<td class="px-8 py-2 whitespace-nowrap font-large">
									<div class="text-lg text-gray-900">{i.notransaksi}</div>
								</td>
								<td class="px-2 py-2 whitespace-nowrap font-large">
									<div class="text-lg text-gray-900">{i.supplier}</div>
								</td>
								<td class="px-2 py-2 whitespace-nowrap font-large">
									<div class="text-lg text-gray-900">{i.tgljatuhtempo}</div>
								</td>
                                <td class="px-2 py-2 whitespace-nowrap font-large">
									<div class="text-lg text-gray-900">aktif</div>
								</td>
								<td class="px-2 py-2 whitespace-nowrap font-large">
									<div class="text-lg text-gray-900">Rp.0,00</div>
								</td>
                                <td class="px-2 py-2 whitespace-nowrap font-large">
									<div class="text-lg text-gray-900">Rp.0,00</div>
								</td>
							</tr>
					))}
						</tbody>
			</table>
        </Layout>
    )
}
