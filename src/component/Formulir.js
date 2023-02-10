import React, { Component, useState } from "react";  
import Swal from "sweetalert2";
import Aside from './Aside'
import Header from './Header'
import { Link, NavLink } from "react-router-dom";

const Formulir = () => {
    
  return (
    <><Header /><Aside /><div className="content-wrapper">
      {/* Content Header (Page header) */}
      {/* Main content */}
       {/* Customer Service */}
      <section className="content-header">
        <div className="row">
          <div className="col-md-6">
            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">Customer Service</h3>
                <div className="card-tools">
                  <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                    <i className="fas fa-minus" />
                  </button>
                </div>
              </div>
              <div className="card-body">
              <div className="form-group">
                  <label htmlFor="inputName">id</label>
                  <input type="text" id="inputName" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="inputName">Number Ticket</label>
                  <input type="text" id="inputName" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="inputName">Ticket Date</label>
                  <input type="date" id="inputName" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="inputName">Customer</label>
                  <input type="text" id="inputName" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="inputName">Detail Customer</label>
                  <input type="text" id="inputName" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="inputStatus">Product</label>
                  <select id="inputStatus" className="form-control custom-select" >
                    <option selected disabled>Select one</option>
                    <option>Abaka D</option>
                    <option>Abaka D+</option>
                    <option>Abaka Dr</option>
                    <option>Abaka H</option>
                    <option>Abaka H02</option>
                    <option>K1.0 Smart Kiosk</option>
                    <option>ADM.Kiosk</option>
                    <option>Alpine Al-One</option>
                    <option>Alpine Al-Pay</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="inputName"> Serial Number</label>
                  <input type="text" id="inputName" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="inputName"> No. SAM/Perso</label>
                  <input type="text" id="inputName" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="inputStatus">Status</label>
                  <select id="inputStatus" className="form-control" >
                    <option selected disabled>Select one</option>
                    <option>Open Ticket</option>
                    <option>Pending</option>

                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="inputStatus">Case</label>
                  <select id="inputStatus" className="form-control" >
                    <option selected disabled>Select one</option>
                    <option>Fingerprint</option>
                    <option>Layar LCD</option>
                    <option>Port USB</option>
                    <option>Motherboard</option>
                    <option>Software</option>
                    <option>Lainnya</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="inputName">Keterangan Masalah</label>
                  <input type="text" id="inputName" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="inputName">Remarks</label>
                  <input type="text" id="inputName" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="inputName">Expedisi</label>
                  <input type="text" id="inputName" className="form-control"/>
                </div>
                <div className="form-group">
                  <label htmlFor="inputName">No Resi Terima</label>
                  <input type="text" id="inputName" className="form-control"/>
                </div>
                <div className="row">
            <div className="col-12">
              <Link to={"/home"}>
          <button class="btn btn-danger btn mb-3">Cancel</button>
          </Link>
          <button class="btn btn-success btn mb-3 float-right">Submit</button>  
          </div>
        </div>
              </div>

              {/* /.card-body */}
            </div>
            {/* /.card */}
          </div>
           {/* Service */}
          <div className="col-md-6">
            <div className="card card-green">
              <div className="card-header">
                <h3 className="card-title">Service</h3>
                <div className="card-tools">
                  <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                    <i className="fas fa-minus" />
                  </button>
                </div>
              </div>
              <div className="card-body">
                <div className="form-group">
                  <label htmlFor="inputEstimatedBudget">Hasil Cek Kendala</label>
                  <input type="text" id="inputName" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="inputSpentBudget">Service Selesai</label>
                  <input type="date" id="inputName" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="inputEstimatedBudget">Activity</label>
                  <input type="text" id="inputName" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="inputEstimatedBudget">No PO Service</label>
                  <input type="text" id="inputName" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="inputStatus">Last Update</label>
                  <select id="inputStatus" className="form-control custom-select">
                    <option selected disabled>Select one</option>
                    <option>On Going </option>
                    <option>Success</option>
                  </select>
                </div>
                <div className="row">
            <div className="col-12">
              <Link to={"/home"}>
          <button class="btn btn-danger btn mb-3">Cancel</button>
          </Link>
          <button class="btn btn-success btn mb-3 float-right">Submit</button>  
          </div>
        </div>
              </div>
              {/* /.card-body */}
            </div>
            {/* /.card */}
          </div>
           {/* Delivery */}
          <div className="col-md-12 " >
            <div className="card card-red">
              <div className="card-header">
                <h3 className="card-title">Delivery</h3>
                <div className="card-tools">
                  <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                    <i className="fas fa-minus" />
                  </button>
                </div>
              </div>
              <div className="card-body">
              <div className="form-group">
                  <label htmlFor="inputEstimatedBudget">Device In</label>
                  <input type="date" id="inputName" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="inputEstimatedBudget">Device Out</label>
                  <input type="date" id="inputName" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="inputEstimatedBudget">Expedisi</label>
                  <input type="text" id="inputName" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="inputSpentBudget">No Resi</label>
                  <input type="text" id="inputName" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="inputEstimatedBudget">Remarks</label>
                  <input type="text" id="inputName" className="form-control" />
                </div>
                <div className="row">
            <div className="col-12">
              <Link to={"/home"}>
          <button class="btn btn-danger btn mb-3">Cancel</button>
          </Link>
          <button class="btn btn-success btn mb-3 float-right">Submit</button>  
          </div>
        </div>
              </div>
              {/* /.card-body */}
            </div>
            {/* /.card */}
          </div>
        </div>
      </section>
      {/* /.content */}
    </div></>
  )
}

export default Formulir