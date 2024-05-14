import Yearbook from '../components/Menu/Yearbook';
import Sidebar from '../components/Sidebar/Sidebar';

const YearbookPages = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Yearbook />
    </div>
  );
};

export default YearbookPages;
