import React from 'react'
import { StoreContainer } from '../Store'; // redux - unstated-next
import BarCharts from '../template/BarCharts';

// Component Covid19
export default function Covid() {
  const unstated = StoreContainer.useContainer();
  const [loading, setLoading] = React.useState<boolean>(false)

  /**
   * Getting data of covid 19 from the Store component
   */
  React.useEffect(() => {
    setLoading(true);
    if (!unstated.dataDiff || unstated.dataDiff.length === 0)
      unstated.getDataCovid();
    setLoading(false);
    // eslint-disable-next-line
  }, [])

  return (
    <div className="content">
      <div className="card ">
        <div className="card-header">

          {/* TITLE */}
          <h1 className=" card-title text-center pt-1">Evolution Coronavirus in Finland</h1>
          <h2 className="text-center pt-2">last info : {unstated.lastCases} new cases </h2>

          <div className="alert alert-dismissable border border-default text-center">
            {/* note : button to close this text if the user want */}
            <button className="close mb-0" type="button" data-dismiss="alert">×</button>
            <p style={{ textAlign: "center" }}>you can click on one bar of the graph to display more details</p>
          </div>
        </div>
        <div className="card-body"></div>

        {/* Loading gif while waiting data */}
        {loading && (<div className="col-12 text-center"><img height='50' width='50' src='turku/images/loading.gif' alt='LOADING' /></div>)}

        {/* component Chart of covid 19 */}
        <BarCharts data={unstated.dataDiff} labels={unstated.labels} />
      </div>
    </div>
  )
}
