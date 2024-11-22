/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import axios from "axios";

const useCurrencyApi = () => {
    const [currencyData, setCurrencyData] = useState([]);
    const [currencyName, setCurrencyName] = useState(["CAD", "IDR", "JPY", "CHF", "EUR", "GBP"]);
   
    useEffect(() => {
        const fetchDataCurency = async () => {
            try {
                const res = await axios('https://api.currencyfreaks.com/v2.0/rates/latest?apikey=d3a7f4674734472d87f527dfbf49679b')
                const currencyRates = res.data.rates;

                const filteredCurencyData = currencyName.map((currency) => {
                    return {
                        currency,
                        weBuy: currencyRates[currency] * 1.05,
                        exchangeRate: currencyRates[currency],
                        weSell: currencyRates[currency] * 0.95
                    }
                })
                
                setCurrencyData(filteredCurencyData);
            } catch (error) {
                console.error(error);
            }
        }

        fetchDataCurency();
    }, [])

    return {
        currencyData
    }
}

export default useCurrencyApi;