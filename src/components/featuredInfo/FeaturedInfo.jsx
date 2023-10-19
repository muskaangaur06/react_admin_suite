import "./featuredInfo.css"
import { ArrowDownward, ArrowUpward } from "@material-ui/icons"

export default function FeaturedInfo() {
  return (
    <div className="featured">
        <div className="featuredItem">
            <span className="featuredTitle">Revenue</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$3000</span>
                <span className="featuredMoneyRate">
                    -10  <ArrowDownward className="featuredIcon negative"/>
                </span>
            </div>
            <span className="featuredSubtitle">Compared to previous month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Sales</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$4000</span>
                <span className="featuredMoneyRate">
                    -10  <ArrowDownward className="featuredIcon negative"/>
                </span>
            </div>
            <span className="featuredSubtitle">Compared to previous month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Cost</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$3050</span>
                <span className="featuredMoneyRate">
                    +20  <ArrowUpward className="featuredIcon positive"/>
                </span>
            </div>
            <span className="featuredSubtitle">Compared to previous month</span>
        </div>
    </div>
  )
}
