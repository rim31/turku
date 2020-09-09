import React, { useState, useEffect } from 'react'
import { readRemoteFile } from 'react-papaparse'

export default function TableCsvPlaceAlcohol() {
  // const [data, setData] = useState<any>([]);
  const [header, setHeader] = useState<any>([]);
  const [rows, setRows] = useState<any>([]);
  const [query, setQuery] = useState<string>("")
  const [order, setOrder] = useState<number>(1)
  const [title, setTitle] = useState<string>("Places");
  const [loading, setLoading] = useState<boolean>(true)


  // {/**
  //   filter a key in the array, return true if find it in any row of array then return tue object array filtered
  // */}
  function filterData() {
    return !query
      ? rows :
      rows.filter((obj: any) => {
        let flag: Boolean = false;
        Object.values(obj).forEach((val: any) => {
          if (String(val ? val.toLowerCase() : val).indexOf(query.toLowerCase()) > -1) {
            flag = true;
            return null;
          }
        });
        if (flag) return obj;
        return null;
      });
  }

  // {/**
  //   function : sort a column giving the key name
  // */}
  const sorting = (key: string) => {
    setOrder(order * -1);
    setRows(rows.sort((a: any, b: any) =>
      (order === 1 ? a[key] > b[key] : a[key] < b[key]) ? 1 : -1
    ));
  }

  const getNamesData = (name: any) => {
    // setLoading(true);
    readRemoteFile(name, {
      complete: (results: any) => {
        if (results) {
          setHeader(results.data.shift());
          setRows(results.data);
        }
      }
    })
    //  readRemoteFile('http://example.com/big.csv', {
    //    step: (row) => {
    //      console.log('Row:', row.data)
    //    },
    //    complete: () => {
    //      console.log('All done!')
    //    }
    //  })
    setLoading(false);
  }

  useEffect(() => {
    getNamesData('turku/images/alkoholilupa_toimipaikkatiedot_34.csv');
    setTitle("Places")
  }, [])

  useEffect(() => {
    if (rows && rows.length > 0)
      setLoading(false);
  }, [rows])

  return (
    <div className="content">
      <div className="card ">
        <div className="card-header">
          <h1 className=" card-title text-center pt-1">Approval alcohol consumption : {title}</h1>
        </div>
        {/* <div className="d-flex mt-2 mb-2 justify-content-center">
          <span className="badge badge-pill badge-secondary mr-1 ml-1" onClick={() => { getNamesData('turku/images/alkoholilupa_toimipaikkatiedot_34.csv'); setLoading(true); setTitle("Places") }}>name</span>
          <span className="badge badge-pill badge-secondary mr-1" onClick={() => { getNamesData('turku/images/alkoholilupa_toimipaikkatiedot_ABC.csv'); setLoading(true); setTitle("Store") }}>year</span>
        </div> */}
        <div className="input-group-prepend pb-0 pl-2 pr-2">
          <input type="text" className="form-control border search" placeholder="Search a place..." value={query} onChange={(e) => setQuery(e.target.value)} aria-label="search place" aria-describedby="alcohol" />
        </div>
        <div className="card-body">
          {loading && (<div className="col-12 text-center full-page-loader"><img height='50' width='50' src='turku/images/logo.png' alt='LOADING' /><h2>LOADING...</h2></div>)}
          <div className="table-responsive">
            <table className="table tablesorter " id="">
              <thead className=" text-primary">
                <tr>
                  {header && (header.map((name: string, ii: number) => (
                    <th key={ii} onClick={() => sorting(name)} >{name}&#8597;</th>)
                  ))}
                </tr>
              </thead>
              <tbody>
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
