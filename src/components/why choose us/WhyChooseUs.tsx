import {
  FaBolt,
  FaCarBattery,
  FaChessKnight,
  FaSatelliteDish,
  FaWallet,
} from 'react-icons/fa';
import { RiPencilRuler2Fill } from 'react-icons/ri';
import img from '../../assets/choose-main.png';

export default function WhyChooseUs() {
  return (
    <>
      <section className="my-16 py-8">
        <h2 className="text-8xl font-bold text-center uppercase ">
          Why{' '}
          <span className="bg-gradient-to-r from-blue-500 to-text-primary text-transparent bg-clip-text">
            Choose us
          </span>
        </h2>
        <section className="my-16 grid lg:grid-cols-9 gap-2">
          <div className="lg:col-span-3 flex flex-col gap-6">
            <div className="m-4 border-1 border-gray-500 shadow rounded-lg p-8 bg-[#1B1229] ">
              <div className="flex gap-4">
                <span className="bg-gradient-to-tr from-blue-500 to-text-primary p-4 rounded-xl">
                  <FaWallet size={30} />
                </span>
                <h3 className="text-2xl font-bold">CONNECT YOUR WALLET</h3>
              </div>
              <p className="mt-4 text-lg font-semibold">
                Use Trust Wallet, Metamask or to connect to the app.
              </p>
            </div>
            <div className="m-4 border-1 border-gray-500 shadow rounded-lg p-8 bg-[#1B1229] ">
              <div className="flex gap-4">
                <span className="bg-gradient-to-tr from-blue-500 to-text-primary p-4 rounded-xl">
                  <RiPencilRuler2Fill size={30} />
                </span>
                <h3 className="text-2xl font-bold">SELECT YOUR QUANTITY</h3>
              </div>
              <p className="mt-4 text-lg font-semibold">
                Upload your crypto and set a title, description and price.
              </p>
            </div>
            <div className="m-4 border-1 border-gray-500 shadow rounded-lg p-8 bg-[#1B1229] ">
              <div className="flex gap-4">
                <span className="bg-gradient-to-tr from-blue-500 to-text-primary p-4 rounded-xl">
                  <FaBolt size={30} />
                </span>
                <h3 className="text-2xl font-bold">CONFIRM TRANSACTION</h3>
              </div>
              <p className="mt-4 text-lg font-semibold">
                Earn by selling your crypto on our marketplace.
              </p>
            </div>
          </div>
          <div className="lg:col-span-3 p-4">
            <img className="w-full h-full" src={img} alt="Why choose us" />
          </div>
          <div className="lg:col-span-3 flex flex-col gap-6">
            <div className="m-4 border-1 border-gray-500 shadow rounded-lg p-8 bg-[#1B1229] ">
              <div className="flex gap-4">
                <span className="bg-gradient-to-tr from-blue-500 to-text-primary p-4 rounded-xl">
                  <FaSatelliteDish size={30} />
                </span>
                <h3 className="text-2xl font-bold">RECEIVE YOUR OWN NFTS</h3>
              </div>
              <p className="mt-4 text-lg font-semibold">
                Invest all your crypto at one place on one platform.
              </p>
            </div>
            <div className="m-4 border-1 border-gray-500 shadow rounded-lg p-8 bg-[#1B1229] ">
              <div className="flex gap-4">
                <span className="bg-gradient-to-tr from-blue-500 to-text-primary p-4 rounded-xl">
                  <FaChessKnight size={30} />
                </span>
                <h3 className="text-2xl font-bold">TAKE A MARKET TO SELL</h3>
              </div>
              <p className="mt-4 text-lg font-semibold">
                Discover, collect the right crypto collections to buy or sell.s
              </p>
            </div>
            <div className="m-4 border-1 border-gray-500 shadow rounded-lg p-8 bg-[#1B1229] ">
              <div className="flex gap-4">
                <span className="bg-gradient-to-tr from-blue-500 to-text-primary p-4 rounded-xl">
                  <FaCarBattery size={30} />
                </span>
                <h3 className="text-2xl font-bold">DRIVE YOUR COLLECTION</h3>
              </div>
              <p className="mt-4 text-lg font-semibold">
                We make it easy to Discover, Invest and manage.
              </p>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
