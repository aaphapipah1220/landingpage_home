import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { appConfig } from '../config/App'
import Aside from './Aside'
import Header from './Header'

const Data = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchTicketData();
    }, []);

    async function fetchTicketData() {
        try {
            const res  = await axios.get(appConfig.apiUrl, { headers: {"Authorization" : `Bearer ${appConfig.authToken}`}});
            console.log(res, "response api");
            setData(res.data.data);  
        } catch (error) {
            console.log(error, "error fetching data");
        }
    }

  return (
    <><Aside /><Header /><div className="content-wrapper">
          {/* Content Header (Page header) */}
          <section className="content-header">
              <div className="container-fluid">
                  <div className="row mb-2">
                      <div className="col-sm-6">
                          <h1>DataTable</h1>
                      </div>
                      <div className="col-sm-6">
                          <ol className="breadcrumb float-sm-right">
                              <li className="breadcrumb-item active">DataTables</li>
                          </ol>
                      </div>
                  </div>
              </div>{/* /.container-fluid */}
          </section>
          {/* Main content */}
          <section className="content">
              <div className="container-fluid">
                  <div className="row">
                      <div className="col-12">
                          <div className="card">
                              <div className="card-header">
                                  <h3 className="card-title">Data Complain</h3>
                              </div>
                              {/* /.card-header */}
                              <div className="card-body ">
                                <Table responsive>
                                  <table id="example1" className="table table-bordered table-striped">
                                      <thead>
                                          <tr>
                                              <th>Id</th>
                                              <th>No Ticket</th>
                                              <th>Customer</th>
                                              <th>Detail Custumer</th>
                                              <th>Type Product</th>
                                              <th>Serial Number</th>
                                              <th>No. SAM/Perso</th>
                                              <th>Status</th>
                                              <th>Status Pembayaran</th>
                                              <th>Tanggal Pembayaran</th>
                                              <th>Line</th>
                                              <th>Case</th>
                                              <th>Remarks</th>
                                              <th>Tanggal Resi Terima</th>
                                              <th>Expedisi </th>
                                              <th>Nomer Resi Terima</th>
                                              <th>User Id </th>
                                              <th>Service Id </th>
                                              <th>Delivery Id </th>
                                            
                                          </tr>
                                      </thead>
                                      <tbody>
                                         {data.length > 0 && data?.map(val => {
                                            return (
                                            <tr>
                                            <td>{val.id}</td>
                                            <td>{val.noTicket}</td>
                                            <td>{val.customer}</td>
                                            <td>{val.detailCustomer}</td>
                                            <td>{val.type}</td>
                                            <td>{val.serialNumber}</td>
                                            <td>{val.samperso}</td>
                                            <td>{val.status}</td>
                                            <td>{val.statusPembayaran}</td>
                                            <td>{val.tanggalPembayaran}</td>
                                            <td>{val.line}</td>
                                            <td>{val.case}</td>
                                            <td>{val.remark}</td>
                                            <td>{val.resiAccepted}</td>
                                            <td>{val.expedisi} </td>
                                            <td>{val.noResi}</td>
                                            <td>{val.userId}</td>
                                            <td>{val.serviceId}</td>
                                            <td>{val.deliveryId}</td>
                                            
                                            </tr>
                                            )
                                            })}
                                      </tbody>
                                  </table>
                                  </Table>
                              </div>
                              {/* */}
                          </div>
                          {/* /.card */}
                      </div>
                      {/* /.col */}
                  </div>
                  {/* /.row */}
              </div>
              {/* /.container-fluid */}
          </section>
          {/* /.content */}
      </div></>
  )
}

export default Data