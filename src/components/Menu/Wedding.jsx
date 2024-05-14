import { FaImages, FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';

const TableRow = ({ number, name }) => (
  <tr>
    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{number}</td>
    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{name}</td>
    <td className="whitespace-nowrap px-4 py-2 text-white  flex justify-center gap-1">
      <Link to="/weddingedit">
        <button className="bg-blue-600 p-2 rounded-md">
          <FaImages />
        </button>
      </Link>
      <button className="bg-yellow-500 p-2 rounded-md">
        <FaEdit />
      </button>
      <button className="bg-red-600 p-2 rounded-md">
        <MdDelete />
      </button>
    </td>
  </tr>
);

const Wedding = () => {
  return (
    <div className="px-6 w-[100%] h-screen overflow-y-auto">
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
              Wedding{' '}
            </a>
          </li>
        </ol>
      </nav>
      <header>
        {' '}
        <div className="mx-auto lg:px-4  py-6   ">
          <div className="sm:flex items-center justify-between">
            <div className="text-left">
              <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Wedding</h1>
            </div>

            <div className="mt-4 flex  gap-4 sm:mt-0 sm:flex-row sm:items-center">
              <button className="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring" type="button">
                Tambah List{' '}
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className="overflow-x-auto lg:px-4">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">No</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Name</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y text-center divide-gray-200">
            <TableRow number="1" name="Lukas-Bella" />
            <TableRow number="2" name="Dea-Lutfi" />
            <TableRow number="3" name="Sarah-John" />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Wedding;
