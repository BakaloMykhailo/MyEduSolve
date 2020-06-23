import React from 'react';
import Calendar from '../Calendar';
import TableInfo from '../TableInfo';

const columns = [
  {
    title: 'Tanggal Mulai',
    dataIndex: 'startDate',
    key: 'startDate',
  },
  {
    title: 'Waktu',
    dataIndex: 'time',
    key: 'time',
  },
  {
    title: 'Sesi',
    dataIndex: 'session',
    key: 'session',
  },
  {
    title: 'Harga',
    dataIndex: 'price',
    key: 'price',
    responsive: ['sm'],
  }
];
  
const data = [
  {
    key: '1',
    startDate: 'Senin, 07 Juni 2020',
    time: '14.00 - 16.00',
    session: '1',
    price: 'Rp 499.000',
  },
  {
    key: '2',
    startDate: 'Selasa, 08 Juni 2020',
    time: '14.00 - 16.00',
    session: '1',
    price: 'Rp 499.000',
  },
  {
    key: '3',
    startDate: 'Rabu, 09 Juni 2020',
    time: '09.00 - 12.00',
    session: '1',
    price: 'Rp 499.000',
  },
  {
    key: '4',
    startDate: 'Kamis, 10 Juni 2020',
    time: '12.00 - 13.00',
    session: '1',
    price: 'Rp 499.000',
  },
  {
    key: '5',
    startDate: 'Jumat, 11 Juni 2020',
    time: '12.00 - 13.00',
    session: '1',
    price: 'Rp 499.000',
  }
];

const Schedule = () => {
  return (
    <div className="schedule card">
      <header className="schedule__header">
        <h2 className="schedule__title">Pilih Jadwal</h2>
        <Calendar />
      </header>
      <TableInfo columns={columns} data={data} classN="table table--schedule"/>
    </div>
  )
}

export default Schedule;