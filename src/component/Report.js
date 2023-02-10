import React, {Fragment,useState} from 'react'
import Aside from './Aside'
import Header from './Header'
import Donat from './Donat'
import { Link } from 'react-router-dom'

const Report = () => {
  const [ toggleTab, setToggleTab] = useState(1)
  const toggleState = (index) =>{
    setToggleTab(index)
  }

    return (
      <Fragment>
        <><Aside /><Header /><div>
          <div className="content-wrapper">
            <div className="content-header">
              <div className="container-fluid">
                <div className="row mb-2">
                  <div className="col-sm-6">
                    <h1 className="m-0">Report</h1>
                  </div>
                </div>
              </div>
            </div>
    
            {/* Main content */}
            <section className="content">
              {/* /.Chart */}
              <div className="card">
  <div className="card-header">
    <h3 className="card-title">
      <i className="fas fa-chart-pie mr-1" />
      Report Table
    </h3>
    <div className="card-tools">
      <ul className="nav nav-pills ml-auto">
        
        <li className="nav-item">
          <a className={toggleTab === 1 ? "single-tab nav-link active active-tab": "single-tab"}
    onClick = {() => toggleState(1)} data-toggle="tab">To do list</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-toggle="tab">Chart</a>
        </li>
      </ul>
    </div>
  </div>{/* /.card-header */}
  <div className="card-body">
    <div className="tab-content p-0">
      {/* Morris chart - Sales */}
      <div className="card">
  <div className="card-header border-transparent">
    <h3 className="card-title">Latest Ticket</h3>
    <div className="card-tools">
      <button type="button" className="btn btn-tool" data-card-widget="collapse">
        <i className="fas fa-minus" />
      </button>
    </div>
  </div>
  {/* /.card-header */}
  <div className="card-body p-0">
    <div className="table-responsive">
      <table className="table m-0">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Item</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><a href="pages/examples/invoice.html">OR9842</a></td>
            <td>Call of Duty IV</td>
            <td><span className="badge badge-success">Shipped</span></td>
          </tr>
          <tr>
            <td><a href="pages/examples/invoice.html">OR1848</a></td>
            <td>Samsung Smart TV</td>
            <td><span className="badge badge-warning">Pending</span></td>
          </tr>
          <tr>
            <td><a href="pages/examples/invoice.html">OR7429</a></td>
            <td>iPhone 6 Plus</td>
            <td><span className="badge badge-danger">Delivered</span></td>
            
          </tr>
          <tr>
            <td><a href="pages/examples/invoice.html">OR7429</a></td>
            <td>Samsung Smart TV</td>
            <td><span className="badge badge-info">Processing</span></td>
            
          </tr>
          <tr>
            <td><a href="pages/examples/invoice.html">OR1848</a></td>
            <td>Samsung Smart TV</td>
            <td><span className="badge badge-warning">Pending</span></td>
            
          </tr>
          <tr>
            <td><a href="pages/examples/invoice.html">OR7429</a></td>
            <td>iPhone 6 Plus</td>
            <td><span className="badge badge-danger">Delivered</span></td>
            
          </tr>
          <tr>
            <td><a href="pages/examples/invoice.html">OR9842</a></td>
            <td>Call of Duty IV</td>
            <td><span className="badge badge-success">Shipped</span></td>
            
          </tr>
        </tbody>
      </table>
    </div>
    {/* /.table-responsive */}
  </div>
  {/* /.card-body */}
  <div className="card-footer clearfix">
  <Link to={"/form"}>
    <a className="btn btn-sm btn-info float-left">Create New Ticket</a>
    </Link>
    <Link to={"/table"}>
    <a className="btn btn-sm btn-secondary float-right">View All Orders</a>
    </Link>
  </div>
  {/* /.card-footer */}
</div>

    </div>
  </div>
</div>
            </section>
          </div>
        </div></>
        </Fragment>
      )
}

export default Report
