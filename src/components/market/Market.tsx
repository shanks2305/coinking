import { useEffect, useState } from 'react';
import axios from 'axios';
import Table from '../table/Table';
import { Coin } from '../../helper/type';
import Loader from '../Loader';

export default function Market() {
  const [data, setData] = useState<Coin[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(true);

  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${currentPage}&sparkline=false
  `;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(url);
        setData(res.data);
        setLoading(false);
      } catch (error) {
        //log errors
      }
    };
    fetchData();
  }, [url]);

  return (
    <>
      <section className="my-10">
        <h2 className="text-4xl font-bold">Market Update</h2>
        {loading ? (
          <div className="flex justify-center p-8 my-16">
            <Loader />
          </div>
        ) : (
          <>
            <Table data={data} />
          </>
        )}
        <section className="my-4 flex justify-center items-center">
          <div className="flex gap-4">
            {[0, 1, 2, 3, 4].map((i) => (
              <span
                className={`bg-white p-3 text-black rounded text-lg cursor-pointer hover:text-white hover:bg-text-primary ${
                  currentPage === i && 'bg-text-primary text-white'
                }`}
                onClick={() => {
                  setCurrentPage(i);
                }}
                key={i}
              >
                {i + 1}
              </span>
            ))}
          </div>
        </section>
      </section>
    </>
  );
}
