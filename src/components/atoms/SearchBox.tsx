import { cn } from 'src/utils';

type SearchBox = {
  className?: string;
};

export const SearchBox = (props: SearchBox) => {
  const { className } = props;

  const classNameMerge = cn(className);

  return (
    <form className='flex'>
      <div className='relative h-[58px] w-full'>
        <input
          type='search'
          id='search-dropdown'
          className='z-20 block w-full rounded-lg border border-l-2 border-gray-300 border-l-gray-50 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:border-l-gray-700  dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500'
          placeholder='Search ...'
          required
        />
        <button
          type='submit'
          className='absolute right-0 top-0 h-full rounded-r-lg border border-blue-700 bg-blue-700 p-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >
          <svg
            className='h-4 w-4'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 20 20'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
            />
          </svg>
          <span className='sr-only'>Search</span>
        </button>
      </div>
    </form>
  );
};
