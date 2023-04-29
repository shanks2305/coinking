import { useEffect, useState } from 'react';
import axios from 'axios';
import { Coin } from '../helper/type';
import Header from '../components/header/Header';
import Market from '../components/market/Market';
import WhyChooseUs from '../components/why choose us/WhyChooseUs';
import Footer from '../components/footer/Footer';

const url =
  'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1&sparkline=false';

export default function Home() {
  const [data, setData] = useState<Coin[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await axios.get(url);
        setData(res.data);
        setLoading(false);
      } catch (error) {
        //
      }
    })();
  }, []);

  return (
    <>
      <Header loading={loading} data={data} />
      <main className="mx-auto max-w-7xl p-8">
        <Market />
        <WhyChooseUs />
      </main>
      <Footer />
    </>
  );
}
