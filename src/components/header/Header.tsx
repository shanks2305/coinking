/* eslint-disable react-refresh/only-export-components */
import { memo } from 'react';
import Navbar from '../navbar/Navbar';
import bitcoin from '../../assets/bitcoin.png';
import eth from '../../assets/ethereum.png';
import { Coin } from '../../helper/type';
import Loader from '../Loader';

function Header({ loading, data }: { loading: boolean; data: Coin[] }) {
  return (
    <>
      <header className="bg-gradient-to-t from-bg-primary to-bg-secondary ">
        <Navbar />
        <section className="h-[95vh] mx-auto max-w-7xl">
          <div className="p-8 grid lg:grid-cols-12 items-center">
            <div className="col-span-1 relative hidden lg:block">
              <img className="w-16 h-16 object" src={bitcoin} alt="Bitcoin" />
            </div>
            <div className="text-center uppercase lg:col-span-10">
              <h1 className="text-6xl md:text-8xl font-bold leading-tight mt-24">
                Track and trade{' '}
              </h1>
              <h1 className="text-6xl md:text-8xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-text-primary">
                crypto Currencies
              </h1>
              <div className="my-10">
                {loading ? (
                  <>
                    <div className="flex justify-center p-8 my-16">
                      <Loader />
                    </div>
                  </>
                ) : (
                  <div className="grid grid-cols-12 gap-10">
                    {data.map((item) => (
                      <div key={item.id} className="col-span-6 lg:col-span-3">
                        <div className="flex flex-col justify-center items-center p-4">
                          <img
                            src={item.image}
                            alt={item.id}
                            className="w-24 h-24"
                          />
                          <h2 className="text-2xl font-mono mt-4 flex gap-2">
                            {item.name}
                            <span
                              className={
                                item.price_change_24h.toString().includes('-')
                                  ? 'text-red-500'
                                  : 'text-green-500'
                              }
                            >
                              {item.price_change_24h.toFixed(4)}
                            </span>
                          </h2>
                          <h3 className="text-xl font-semibold">
                            $ {item.current_price.toFixed(2)}
                          </h3>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="col-span-1 relative hidden lg:block">
              <img className="w-16 h-16 object" src={eth} alt="Bitcoin" />
            </div>
          </div>
        </section>
      </header>
    </>
  );
}

export default memo(Header);
