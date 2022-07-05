import ChartBar from './ChartBar';
import '../../assets/css/Chart.css';

const Chart = props => {
  const dataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value)
  const totalMaximum = Math.max(...dataPointsValues);

  return (
    <div className="chart">
      {props.dataPoints.map(datPoint =>
        <ChartBar key={datPoint.label} value={datPoint.value} maxValue={totalMaximum} label={datPoint.label}/>
      )}
    </div>
  )
}

export default Chart;