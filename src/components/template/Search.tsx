import React from 'react'

export default function Search() {
  return (
    <div className="modal modal-search fade" id="searchModal" role="dialog" aria-labelledby="searchModal" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="SEARCH" />
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <i className="tim-icons icon-simple-remove"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
