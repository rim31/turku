import React from 'react'
import { StoreContainer } from '../Store';
import BarCharts from '../template/BarCharts';

export default function Covid() {
  const unstated = StoreContainer.useContainer();
  const [loading, setLoading] = React.useState<boolean>(false)

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
          <h1 className=" card-title text-center pt-1">Evolution Coronavirus in Finland</h1>
        </div>
        <div className="card-body"></div>
        {loading && (<div className="col-12 text-center"><img height='50' width='50' src='turku/images/loading.gif' alt='LOADING' /></div>)}
        <BarCharts data={unstated.dataDiff} labels={unstated.labels} />
      </div>
    </div>
  )
}
