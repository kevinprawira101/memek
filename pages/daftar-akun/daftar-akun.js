import React from 'react';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { Button, DropdownButton, Dropdown, Row, Col } from 'react-bootstrap';
import Add from '@material-ui/icons/Add';

export default function DaftarAkun () {
	return (
		<Layout>
			<div variant="container">
				<Row>
					<Col>
						<h4>Daftar Akun</h4>
					</Col>
					<Col className="d-flex justify-content-end">
						<DropdownButton variant="primary mr-2" id="dropdown-basic-button" title="Tindakan">
							<Dropdown.Item>
								<Link href="/daftar-akun/atur-saldo-awal">
									<a>Atur Saldo Awal</a>
								</Link>
							</Dropdown.Item>
							<Dropdown.Item>
								<Link href="/daftar-akun/tutup-buku">Penutupan Buku</Link>
							</Dropdown.Item>
						</DropdownButton>
						<Link href="/daftar-akun/buat-akun-baru">
							<Button>
								<Add fontSize="small" />Buat akun baru
							</Button>
						</Link>
					</Col>
				</Row>
				<div class="mt-8">
					<table class="min-w-full table-auto">
						<thead class="justify-between">
							<tr class="bg-dark">
								<th class="px-2 py-2">
									<span class="text-gray-300">Kode Akun</span>
								</th>
								<th class="px-2 py-2">
									<span class="text-gray-300">Nama Akun</span>
								</th>
								<th class="px-2 py-2">
									<span class="text-gray-300">Kategori Akun</span>
								</th>

								<th class="px-2 py-2">
									<span class="text-gray-300">Saldo (dalam IDR)</span>
								</th>
							</tr>
						</thead>
						<tbody class="bg-white divide-y divide-gray-200">
							<tr>
								<td class="px-2 py-2 whitespace-nowrap">
									<div class="flex items-center">
										<div>
											<div class="text-sm font-medium text-gray-900">002</div>
											<div class="text-sm text-gray-500">Bank Central Asia</div>
										</div>
									</div>
								</td>
								<td class="px-2 py-2 whitespace-nowrap">
									<div class="text-sm text-gray-900">John Smith</div>
									<div class="text-sm text-gray-500">Ceo</div>
								</td>
								<td class="px-2 py-2 whitespace-nowrap">
									<div class="text-sm text-gray-900">-</div>
								</td>
								<td class="px-2 py-2 whitespace-nowrap font-medium">
									<div class="text-sm text-gray-900">Rp. 0</div>
								</td>
							</tr>

							<tr>
								<td class="px-2 py-2 whitespace-nowrap">
									<div class="flex items-center">
										<div>
											<div class="text-sm font-medium text-gray-900">011</div>
											<div class="text-sm text-gray-500">Mandiri</div>
										</div>
									</div>
								</td>
								<td class="px-2 py-2 whitespace-nowrap">
									<div class="text-sm text-gray-900">Charles James</div>
									<div class="text-sm text-gray-500">Manager</div>
								</td>
								<td class="px-2 py-2 whitespace-nowrap">
									<div class="text-sm text-gray-900">-</div>
								</td>
								<td class="px-2 py-2 whitespace-nowrap font-medium">
									<div class="text-sm text-gray-900">Rp. 0</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</Layout>
	);
}
