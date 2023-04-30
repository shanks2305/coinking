import { useNavigate } from 'react-router-dom';
import { Coin } from '../../helper/type';

function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export default function Table({ data }: { data: Coin[] }) {
  const navigate = useNavigate();

  return (
    <>
      <div className='w-full overflow-x-scroll' >
        <table className="w-full my-10 ">
          <thead className="bg-gradient-to-r from-blue-500 to-text-primary ">
            <tr className="lg:text-2xl font-bold rounded-lg">
              <th className="py-4">Coin</th>
              <th className="py-4">Price</th>
              <th className="py-4">24 hrs Change</th>
              <th className="py-4">Market Cap</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr
                key={item.id}
                className="text-2xl font-bold text-center border-b-2 cursor-pointer hover:bg-bg-secondary"
                onClick={() => navigate(`/coins/${item.id}`)}
              >
                <td className="flex gap-4 items-center px-8 py-8">
                  <img className="w-14 h-14" src={item.image} alt={item.id} />
                  <span>{item.name}</span>
                </td>
                <td className="py-6 px-8">
                  $ {numberWithCommas(item.current_price)}
                </td>
                <td
                  className={`py-6 px-8 ${
                    item.price_change_24h.toString().includes('-')
                      ? 'text-red-500'
                      : 'text-green-500'
                  }`}
                >
                  $ {item.price_change_24h.toFixed(2)}
                </td>
                <td className="py-6 px-8">$ {numberWithCommas(item.market_cap)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
