import React from 'react'

export default function Todo() {
  return (
    <div className="card card-tasks">
      <div className="card-header ">
        <h6 className="title d-inline">Tasks(5)</h6>
        <p className="card-category d-inline">today</p>
        <div className="dropdown">
          <button type="button" className="btn btn-link dropdown-toggle btn-icon" data-toggle="dropdown">_
            <i className="tim-icons icon-settings-gear-63"></i>
          </button>
          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
            <a className="dropdown-item" href="#pablo">Action</a>
            <a className="dropdown-item" href="#pablo">Another action</a>
            <a className="dropdown-item" href="#pablo">Something else</a>
          </div>
        </div>
      </div>
      <div className="card-body ">
        <div className="table-full-width table-responsive">
          <table className="table">
            <tbody>
              <tr>
                <td>
                  <div className="form-check">
                    <label className="form-check-label">
                      <input className="form-check-input" type="checkbox" value="" />
                      <span className="form-check-sign">
                        <span className="check"></span>
                      </span>
                    </label></div>
                </td>
                <td>
                  <p className="title">Update the Documentation</p><p className="text-muted">Dwuamish Head, Seattle, WA 8:47 AM</p></td>
                <td className="td-actions text-right">
                  <button type="button" title="" className="btn btn-link" >Edit Task
                      <i className="tim-icons icon-pencil"></i></button>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="form-check">
                    <label className="form-check-label">
                      <input className="form-check-input" type="checkbox" value="" />
                      <span className="form-check-sign">
                        <span className="check"></span>
                      </span>
                    </label></div></td>
                <td>
                  <p className="title">GDPR Compliance</p><p className="text-muted">The GDPR is a regulation that requires businesses to protect the personal data and privacy of Europe citizens for transactions that occur within EU member states.</p></td>
                <td className="td-actions text-right">
                  <button type="button" title="" className="btn btn-link" >Edit Task
                    <i className="tim-icons icon-pencil"></i></button>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="form-check">
                    <label className="form-check-label">
                      <input className="form-check-input" type="checkbox" value="" />
                      <span className="form-check-sign">
                        <span className="check"></span>
                      </span>
                    </label></div></td>
                <td>
                  <p className="title">Solve the issues</p><p className="text-muted">Fifty percent of all respondents said they would be more likely to shop at a company </p></td>
                <td className="td-actions text-right">
                  <button type="button" title="" className="btn btn-link" >Edit Task
                    <i className="tim-icons icon-pencil"></i></button>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="form-check">
                    <label className="form-check-label">
                      <input className="form-check-input" type="checkbox" value="" />
                      <span className="form-check-sign">
                        <span className="check"></span>
                      </span>
                    </label></div></td>
                <td>
                  <p className="title">Release v2.0.0</p><p className="text-muted">Ra Ave SW, Seattle, WA 98116, SUA 11:19 AM</p></td>
                <td className="td-actions text-right">
                  <button type="button" title="" className="btn btn-link" >Edit Task
                    <i className="tim-icons icon-pencil"></i></button>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="form-check">
                    <label className="form-check-label">
                      <input className="form-check-input" type="checkbox" value="" />
                      <span className="form-check-sign">
                        <span className="check"></span>
                      </span>
                    </label></div></td>
                <td>
                  <p className="title">Export the processed files</p><p className="text-muted">The report also shows that consumers will not easily forgive a company once a breach exposing their personal data occurs. </p></td>
                <td className="td-actions text-right">
                  <button type="button" title="" className="btn btn-link" >Edit Task
                    <i className="tim-icons icon-pencil"></i></button>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="form-check">
                    <label className="form-check-label">
                      <input className="form-check-input" type="checkbox" value="" />
                      <span className="form-check-sign">
                        <span className="check"></span>
                      </span>
                    </label></div></td>
                <td>
                  <p className="title">Arival at export process</p><p className="text-muted">Capitol Hill, Seattle, WA 12:34 AM</p></td>
                <td className="td-actions text-right">
                  <button type="button" title="" className="btn btn-link" >Edit Task
                    <i className="tim-icons icon-pencil"></i></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
