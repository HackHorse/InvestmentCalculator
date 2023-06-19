const TableData = (props) => {


  
  return (
    <tbody>
      <tr>
        <td>{props.years}</td>
        <td>{props.savings}</td>
        <td>{props.yearlyinterest}</td>
        <td>{props.totalinterest}</td>
        <td>{props.investedcapital}</td>
      </tr>
    </tbody>
  );
};

export default TableData;
