import Wedding from '../components/Menu/Wedding';
import Sidebar from '../components/Sidebar/Sidebar';

const Homepages = () => {
  return (
    <div className="flex">
      <Sidebar />
      <section className="bg-gray-50 w-[100%] px-6">
        <header className="">
          <div className="mx-auto max-w-screen-xl ">
            <div className="flex h-16 items-center justify-between">
              <div className="flex-1 md:flex md:items-center md:gap-12">
                <div className="block ">
                  <button className="rounded bg-gray-100  text-gray-600 transition hover:text-gray-600/75">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="md:flex md:items-center md:gap-12">
                <div className="flex items-center gap-4">
                  <a href="#" className="flex items-center gap-2  p-4 ">
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                      className="size-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-xs ">
                        <strong className="block font-medium ">Eric Frusciante</strong>
                        <span> eric@frusciante.com </span>
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-1 text-sm text-gray-600">
            <li>
              <a href="#" className="block transition hover:text-gray-700">
                <span className="sr-only"> Home </span>

                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </a>
            </li>

            <li className="rtl:rotate-180">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </li>
          </ol>
        </nav>{' '}
        <div className="mx-auto max-w-screen-xl px-4 lg:flex lg:h-[80vh] lg:items-center">
          <div className="mx-auto text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Selamat Datang di <strong className="font-extrabold text-red-700 sm:block"> Dashboard Admin! </strong>
            </h1>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a className="block  rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto" href="#">
                Get Started
              </a>

              <a className="block  rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto" href="#">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>{' '}
    </div>
  );
};

export default Homepages;
