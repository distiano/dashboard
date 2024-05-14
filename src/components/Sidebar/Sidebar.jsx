import React from 'react';

const Sidebar = () => {
  const menuItems = [
    { title: 'General', link: '/' },

    { title: 'Wedding', link: '/wedding' },
    { title: 'Yearbook', link: '/yearbook' },
    { title: 'Company Profile', link: '/comprovideo' },
    { title: 'Wedding Cinematic', link: '#' },
    {
      title: 'Teams',
      link: '#',
      subItems: [
        { title: 'Banned Users', link: '#' },
        { title: 'Calendar', link: '#' },
      ],
    },
    {
      title: 'Account',
      link: '#',
      subItems: [
        { title: 'Details', link: '#' },
        { title: 'Security', link: '#' },
      ],
    },
  ];

  return (
    <div className="hidden md:flex h-screen w-1/4 flex-col justify-between border-e bg-[#212631]">
      <div className="px-4 py-6">
        <span className="grid font-bold rounded-lg text-white">Andana Dashboard</span>
        <ul className="mt-6 space-y-1">
          {menuItems.map((item, index) => (
            <li key={index}>
              {item.subItems ? (
                <details className="group [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-white hover:bg-gray-100 hover:text-gray-700">
                    <span className="text-sm font-medium">{item.title}</span>
                    <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </summary>
                  <ul className="mt-2 space-y-1 px-4">
                    {item.subItems.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <a href={subItem.link} className="block rounded-lg px-4 py-2 text-sm font-medium text-white hover:bg-gray-100 hover:text-gray-700">
                          {subItem.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </details>
              ) : (
                <a href={item.link} className="block rounded-lg  px-4 py-2 text-sm font-medium text-white hover:bg-gray-100 hover:text-gray-700">
                  {item.title}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
