import "./widgetBig.css"

export default function WidgetBig() {

  const Button = ({type}) => {
    return <button className={"widgetBigButton " + type}>{type}</button>
  }
  return (
    <div className="widgetBig">
        <h3 className="widgetBigTitle">Latest Transactions</h3>
        <table className="widgetBigTable">
          <tr className="widgetBigTr">
            <th className="widgetBigTh">Consumer</th>
            <th className="widgetBigTh">Date</th>
            <th className="widgetBigTh">Amount</th>
            <th className="widgetBigTh">Status</th>
          </tr>
          <tr className="widgetBigTr">
            <td className="widgetBigUser">
              <img src="https://imgs.search.brave.com/Y4rNpi-FpHgcS7xzkzRixq10_2tvE_oI63ri_R7HZ0E/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9t/YW4tZ3JlZW4tc2hp/cnQtaGF2aW5nLWhp/cy1hcm1zLWNyb3Nz/ZWRfMjMtMjE0ODQw/MTM4MC5qcGc" alt="" className="widgetBigImg" />
              <span className="widgetBigName">Chris Quinn</span>
            </td>
            <td className="widgetBigDate">14 Apr 2023</td>
            <td className="widgetBigAmount">$250</td>
            <td className="widgetBigStatus"><Button type="Accept"/></td>
          </tr>
          <tr className="widgetBigTr">
            <td className="widgetBigUser">
              <img src="https://imgs.search.brave.com/Y4rNpi-FpHgcS7xzkzRixq10_2tvE_oI63ri_R7HZ0E/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9t/YW4tZ3JlZW4tc2hp/cnQtaGF2aW5nLWhp/cy1hcm1zLWNyb3Nz/ZWRfMjMtMjE0ODQw/MTM4MC5qcGc" alt="" className="widgetBigImg" />
              <span className="widgetBigName">Chris Quinn</span>
            </td>
            <td className="widgetBigDate">14 Apr 2023</td>
            <td className="widgetBigAmount">$250</td>
            <td className="widgetBigStatus"><Button type="Decline"/></td>
          </tr>
          <tr className="widgetBigTr">
            <td className="widgetBigUser">
              <img src="https://imgs.search.brave.com/Y4rNpi-FpHgcS7xzkzRixq10_2tvE_oI63ri_R7HZ0E/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9t/YW4tZ3JlZW4tc2hp/cnQtaGF2aW5nLWhp/cy1hcm1zLWNyb3Nz/ZWRfMjMtMjE0ODQw/MTM4MC5qcGc" alt="" className="widgetBigImg" />
              <span className="widgetBigName">Chris Quinn</span>
            </td>
            <td className="widgetBigDate">14 Apr 2023</td>
            <td className="widgetBigAmount">$250</td>
            <td className="widgetBigStatus"><Button type="Pending"/></td>
          </tr>
          <tr className="widgetBigTr">
            <td className="widgetBigUser">
              <img src="https://imgs.search.brave.com/Y4rNpi-FpHgcS7xzkzRixq10_2tvE_oI63ri_R7HZ0E/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9t/YW4tZ3JlZW4tc2hp/cnQtaGF2aW5nLWhp/cy1hcm1zLWNyb3Nz/ZWRfMjMtMjE0ODQw/MTM4MC5qcGc" alt="" className="widgetBigImg" />
              <span className="widgetBigName">Chris Quinn</span>
            </td>
            <td className="widgetBigDate">14 Apr 2023</td>
            <td className="widgetBigAmount">$250</td>
            <td className="widgetBigStatus"><Button type="Accept"/></td>
          </tr>
        </table>
    </div>
  )
}
