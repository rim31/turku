import React, { useState, useEffect } from 'react'
import { readRemoteFile } from 'react-papaparse'

// Best Alcohol Places in Finland 🍻
export default function TableCsvPlaceAlcohol() {
  const [header, setHeader] = useState<any>([]); // header of the table
  const [rows, setRows] = useState<any>([]); // core of the table
  const [query, setQuery] = useState<string>("") // for the search bar
  const [title, setTitle] = useState<string>("Places"); // title
  const [order, setOrder] = useState<number>(1) // to order the table
  const [loading, setLoading] = useState<boolean>(true) // display loading if true


  // {/**
  //   filter a key in the array, return true if find it in any row of array then return tue object array filtered
  // */}
  function filterData() {
    return !query
      ? rows :
      rows.filter((obj: any) => {
        let flag: Boolean = false;
        Object.values(obj).forEach((val: any) => {
          // filter the search of the value request
          if (String(val ? val.toLowerCase() : val).indexOf(query.toLowerCase()) > -1) {
            flag = true;
            return null;
          }
        });
        // if it find the string research, return the table including the string
        if (flag) return obj;
        // normal table without filter return
        return null;
      });
  }

  // {/**
  //   sorting function : sort a column giving the key name
  // */}
  const sorting = (key: string) => {
    setOrder(order * -1);
    // order : sorting +/- alphabeticaly
    setRows(rows.sort((a: any, b: any) =>
      (order === 1 ? a[key] > b[key] : a[key] < b[key]) ? 1 : -1
    ));
  }

  // {/**
  //   getNamesData function : to set header of the table and the others rows for better presentation
  // */}
  const getNamesData = (name: any) => {
    // reading the fils.csv from the public folder;
    readRemoteFile(name, {
      complete: (results: any) => {
        if (results) {
          // header of the table, it is display in bold
          setHeader(results.data.shift());
          // rest of the array
          setRows(results.data);
        }
      }
    })
    setLoading(false);
  }

  useEffect(() => {
    // get the table
    getNamesData("/turku/images/alkoholilupa_toimipaikkatiedot_34.csv");
    // title of the table
    setTitle("Places")
  }, [])

  useEffect(() => {
    if (rows && rows.length > 0)
      // cancel loading.gif if the data is load - complete
      setLoading(false);
  }, [rows])

  return (
    <div className="content">
      <div className="card ">

        {/*  TITLE */}
        <div className="card-header">
          <h1 className=" card-title text-center pt-1">Approval alcohol consumption : {title}</h1>
        </div>

        {/*  SEARCH  - filter - */}
        <div className="input-group-prepend pb-0 pl-2 pr-2">
          <input type="text" className="form-control border search" placeholder="Search a place..." value={query} onChange={(e) => setQuery(e.target.value)} aria-label="search place" aria-describedby="alcohol" />
        </div>

        {/*  TABLE  - can sort and filter */}
        <div className="card-body">

          {/* loading */}
          {loading && (<div className="col-12 text-center full-page-loader"><img height='50' width='50' src='turku/images/logo.png' alt='LOADING' /><h2>LOADING...</h2></div>)}
          <div className="table-responsive">
            <table className="table tablesorter " id="">
              <thead className=" text-primary">
                <tr>
                  {/* display the header of table if it exists */}
                  {header && (header.map((name: string, ii: number) => (
                    <th key={ii} onClick={() => sorting(name)} >{name}&#8597;</th>)
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* display the table if it exists and filter : update according to the search string */}
                {filterData() &&
                  (filterData().map((numList: any, i: number) => (
                    <tr key={i} >
                      {
                        numList.map((num: any, j: number) =>
                          <td key={j}>{num}</td>)
                      }
                    </tr>)
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
