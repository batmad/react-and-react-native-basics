/* eslint-disable react/prop-types */
import useCurrencyApi from "./useCurrencyApi";

const CurrencyComponent  = () => {
    const { currencyData } = useCurrencyApi();

    const CurrencyListTable = ({ currency, weBuy, exchangeRate, weSell }) => {
        return (
                <tr>
                    <td>{currency}</td>
                    <td>{weBuy}</td>
                    <td>{exchangeRate}</td>
                    <td>{weSell}</td>
                </tr>
            )
    }
    
    return currencyData.length === 0 ? (
        <div
            style={{
                textAlign: "center",
                color: "white",
                fontSize: "50px"
            }}
        >
            ...loading
        </div>
    ) : (
        <table
            style={{
                margin: "0 auto",
                borderCollapse: "collapse",
                textAlign: "center",
                color: "white",
            }}
        >
            <thead>
                <tr>
                    <th>Currency</th>
                    <th>We Buy</th>
                    <th>Exchange Rate</th>
                    <th>We Sell</th>
                </tr>
            </thead>
            <tbody>
                {currencyData.map((item) => (
                    <CurrencyListTable
                        key={item.currency}
                        currency={item.currency}
                        weBuy={item.weBuy}
                        exchangeRate={item.exchangeRate}
                        weSell={item.weSell}
                    />
                ))}
            </tbody>
        </table>
    );
    
}

export default CurrencyComponent ;