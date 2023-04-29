import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from '../components/navbar/Navbar';
import Loader from '../components/Loader';

export default function Coins() {
  const { coinId } = useParams();
  const [coin, setCoin] = useState<null | {
    image: {
      large: string;
    };
    name: string;
    coingecko_rank: number;
    market_data: {
      price_change_percentage_24h: number;
      current_price: {
        usd: number;
      };
    };
    symbol: string;
    description: {
      en: string;
    };
  }>(null);
  const [loading, setLoading] = useState(true);
  const url = `https://api.coingecko.com/api/v3/coins/${coinId}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Error!');
        }
        const json = await response.json();
        setCoin(json);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [url]);

  if (!coin) {
    return (
      <div className="max-h-[100vh] text-3xl p-8 flex justify-center items-center">
        <span>
          Something went wrong!!!! Go <Link to="/">Home </Link>
        </span>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <>
      <header className="bg-gradient-to-t from-bg-primary to-bg-secondary min-h-screen">
        <section className="mx-auto max-w-7xl">
          <Navbar />
        </section>
        <article className="mx-auto max-w-7xl grid lg:grid-cols-12 my-24 p-8">
          <div className="lg:col-span-4 flex flex-col items-center border-r-2">
            <img src={coin?.image.large} />
            <h1 className="mt-4 text-4xl font-bold">{coin.name}</h1>
            <h2 className="text-xl mt-2 font-semibold">
              Rank #{coin.coingecko_rank}
            </h2>
          </div>
          <div className="lg:col-span-8">
            <div className="flex justify-between items-center px-8 py-2 text-lg font-bold">
              <div>
                <span>24 hrs change : </span>
                <span
                  className={
                    coin.market_data.price_change_percentage_24h >= 0
                      ? 'text-green-600'
                      : 'text-red-600'
                  }
                >
                  {coin.market_data
                    ? coin.market_data.price_change_percentage_24h.toFixed(2) +
                      '%'
                    : ''}
                </span>
              </div>
              <div>
                <span>Price : </span>
                <span className="text-green-500">
                  {coin.market_data
                    ? '$' +
                      numberWithCommas(
                        Number(coin.market_data.current_price.usd.toFixed(2))
                      )
                    : null}
                </span>
              </div>
              <div>
                <span>Symbol : </span>
                <span>{coin.symbol}</span>
              </div>
            </div>
            <div className="p-4 overflow-y-scroll max-h-80">
              <p
                dangerouslySetInnerHTML={{
                  __html: coin.description ? coin.description.en : '',
                }}
              ></p>
            </div>
          </div>
        </article>
      </header>
    </>
  );
}

function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
