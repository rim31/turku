import React, { useState, useEffect } from 'react'
import { readRemoteFile } from 'react-papaparse'

export default function TableCsvStore() {
  // const [data, setData] = useState<any>([]);
  const [header, setHeader] = useState<any>([]);
  const [rows, setRows] = useState<any>([]);
  const [query, setQuery] = useState<string>("")
  const [order, setOrder] = useState<number>(1)


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


  useEffect(() => {
    readRemoteFile('/alkoholilupa_toimipaikkatiedot_ABC.csv', {
      complete: (results: any) => {
        // console.log('Results:', results)
        // setData(results)
        if (results) {
          setHeader(results.data.shift());
          setRows(results.data);
        }
      }
    });
    // readRemoteFile('http://example.com/big.csv', {
    //   step: (row) => {
    //     console.log('Row:', row.data)
    //   },
    //   complete: () => {
    //     console.log('All done!')
    //   }
    // })
  }, [])

  return (
    <div className="content">
      <div className="col-lg-12 col-md-12">
        <div className="card ">
          <div className="card-header">
            <h4 className="card-title">Popular validated alcohol store </h4>
          </div>
          <div className="input-group-prepend mb-3 pl-2 pr-2">
            <input type="text" className="form-control border search" placeholder="Search a place..." value={query} onChange={(e) => setQuery(e.target.value)} aria-label="search place" aria-describedby="alcohol" />
          </div>
          <div className="card-body">
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
        </div >
      </div >
    </div >
  )
}
