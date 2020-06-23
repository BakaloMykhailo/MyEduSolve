import React from 'react';
import { Table } from 'antd';
import PlayCircleOutlined from '../../node_modules/antd/lib/icon'


const columnsTest = [
    {
      title: 'Materi',
      dataIndex: 'materi',
      key: 'time',
    },
    {
      title: '4 Pelajaran',
      dataIndex: 'pelajaran',
      key: 'startDate',
      responsive: ['sm'],
    }
  ];
    
const dataTest = [
    {
      key: '1',
      materi: 'Tools esensial di dalam desain grafis.',
      pelajaran: '45 Menit',
    },
    {
      key: '2',
      materi: 'Pengertian mengenai komposisi.',
      pelajaran: '45 Menit',

    },
    {
      key: '3',
      materi: 'Penggunaan warna.',
      pelajaran: '45 Menit',

    },
    {
      key: '4',
      materi: 'Aturan - aturan desain grafis lainnya.',
      pelajaran: '45 Menit',

    }
];

dataTest.forEach( el => {
    return  el.materi = (
            <a className="table__icon" href="#">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM10 16.5L16 12L10 7.5V16.5Z" fill="black"/>
                </svg>
                {el.materi}
            </a>
        )
})

const TableInfo = ({columns = columnsTest,data = dataTest, classN = "table"}) => {
    return (
        <div>
            <PlayCircleOutlined />
            <Table 
                columns={columns} 
                dataSource={data} 
                pagination={false} 
                className={classN}
                // scroll={{ x: 900 }}
          />

        </div>
    )
}

export default TableInfo;