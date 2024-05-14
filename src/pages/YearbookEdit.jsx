import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';
import image1 from '../assets/images/image4.jpg';
import image2 from '../assets/images/image5.jpg';
import image3 from '../assets/images/image6.jpg';
import image4 from '../assets/images/image7.jpg';

const YearbookEdit = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="px-6 w-[100%] lg:overflow-y-auto h-screen">
        <Navbar />
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

            <li>
              <a href="#" className="block transition hover:text-gray-700">
                {' '}
                Yearbook{' '}
              </a>
            </li>
            <li className="rtl:rotate-180">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </li>

            <li>
              <a href="#" className="block transition hover:text-gray-700">
                {' '}
                Tambah Gambar{' '}
              </a>
            </li>
          </ol>
        </nav>{' '}
        <header>
          <div className="mx-auto px-4  py-6   ">
            <div className="sm:flex items-center justify-between">
              <div className="text-left">
                <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Yearbook</h1>
              </div>

              <div className="mt-4 flex gap-4 sm:mt-0 sm:flex-row sm:items-center">
                <button className="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring" type="button">
                  Tambah Gambar{' '}
                </button>
              </div>
            </div>
          </div>
        </header>
        <div className="overflow-x-auto px-4 grid grid-cols-3 gap-5 py-10">
          <div>
            <img src={image1} alt="" />
          </div>
          <div>
            <img src={image2} alt="" />
          </div>
          <div>
            <img src={image3} alt="" />
          </div>
          <div>
            <img src={image4} alt="" />
          </div>
        </div>
      </div>{' '}
    </div>
  );
};

export default YearbookEdit;
