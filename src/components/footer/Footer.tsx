import bitcoin from '../../assets/bitcoin.png';
import eth from '../../assets/ethereum.png';

export default function Footer() {
  return (
    <footer className="mx-auto max-w-7xl p-8 my-16">
      <section>
        <div className="p-8 grid lg:grid-cols-12 items-center">
          <div className="col-span-1 relative hidden lg:block">
            <img className="w-16 h-16 object" src={bitcoin} alt="Bitcoin" />
          </div>
          <div className="text-center uppercase lg:col-span-10">
            <h1 className="text-6xl md:text-8xl font-bold leading-tight">
              Join us via our
            </h1>
            <h1 className="text-6xl md:text-8xl font-bold leading-tight bg-gradient-to-r from-blue-500 to-text-primary bg-clip-text text-transparent ">
              discord
            </h1>
          </div>
          <div className="col-span-1 relative hidden lg:block">
            <img className="w-16 h-16 object" src={eth} alt="Bitcoin" />
          </div>
        </div>
      </section>
      <section className="text-center text-lg">
        <p>Invest and manage all your crypto at one place.</p>
        <button className="mt-24 text-2xl bg-gradient-to-tr from-blue-500 to-text-primary px-10 py-2 rounded-lg shadow">
          Join Now
        </button>
      </section>
    </footer>
  );
}
