import ChartBar from "./ChartBar";
import './Chart.css'

const Chart = (props) => {
  const valuePerMonth = props.dataList.map(dataPerMonth => dataPerMonth.value);
  const totalMax = Math.max (...valuePerMonth);


  return(
    <div className='chart'>
      {props.dataList.map(dataForBar => (
        <ChartBar
          key = {dataForBar.label}
          label = {dataForBar.label}
          value = {dataForBar.value}
          maxValue = {totalMax}
        />
      ))}
    </div>
  );
};

export default Chart;