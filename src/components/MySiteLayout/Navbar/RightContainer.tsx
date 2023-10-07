import Image from 'next/image'

export const RightContainer = () => {
  return (
    <ul className='relative flex items-center'>
      {/* <!-- Notification dropdown --> */}
      <li className='relative' data-te-dropdown-ref>
        <a
          className='mr-4 flex items-center text-gray-500 hover:text-gray-700 focus:text-gray-700'
          href='#'
          id='navbarDropdownMenuLink'
          role='button'
          data-te-dropdown-toggle-ref
          aria-expanded='false'
        >
          <span className='dark:text-gray-200 [&>svg]:w-3.5'>
            <svg
              aria-hidden='true'
              focusable='false'
              data-prefix='fas'
              data-icon='bell'
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 448 512'
            >
              <path
                fill='currentColor'
                d='M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z'
              ></path>
            </svg>
          </span>
          <span className='absolute -mt-2.5 ml-2 rounded-full bg-red-600 px-1.5 py-[1px] text-[0.6rem] text-white'>
            1
          </span>
        </a>
        <ul
          className='absolute left-auto right-0 z-[1000] float-left m-0 mt-1 hidden min-w-[10rem] list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-zinc-700 [&[data-te-dropdown-show]]:block'
          aria-labelledby='navbarDropdownMenuLink'
          data-te-dropdown-menu-ref
        >
          <li>
            <a
              className='block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-200 dark:hover:bg-white/30'
              href='#'
              data-te-dropdown-item-ref
            >
              Some news
            </a>
          </li>
          <li>
            <a
              className='block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-200 dark:hover:bg-white/30'
              href='#'
              data-te-dropdown-item-ref
            >
              Another news
            </a>
          </li>
          <li>
            <a
              className='block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-200 dark:hover:bg-white/30'
              href='#'
              data-te-dropdown-item-ref
            >
              Something else here
            </a>
          </li>
        </ul>
      </li>

      {/* <!-- Icon --> */}
      <li className='mr-4'>
        <a href='#'>
          <span className='fill-gray-500 hover:fill-gray-700 focus:fill-gray-700 dark:fill-gray-200 [&>svg]:w-4'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'>
              {/* <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
              <path d='M41.4 9.4C53.9-3.1 74.1-3.1 86.6 9.4L168 90.7l53.1-53.1c28.1-28.1 73.7-28.1 101.8 0L474.3 189.1c28.1 28.1 28.1 73.7 0 101.8L283.9 481.4c-37.5 37.5-98.3 37.5-135.8 0L30.6 363.9c-37.5-37.5-37.5-98.3 0-135.8L122.7 136 41.4 54.6c-12.5-12.5-12.5-32.8 0-45.3zm176 221.3L168 181.3 75.9 273.4c-4.2 4.2-7 9.3-8.4 14.6H386.7l42.3-42.3c3.1-3.1 3.1-8.2 0-11.3L277.7 82.9c-3.1-3.1-8.2-3.1-11.3 0L213.3 136l49.4 49.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0zM512 512c-35.3 0-64-28.7-64-64c0-25.2 32.6-79.6 51.2-108.7c6-9.4 19.5-9.4 25.5 0C543.4 368.4 576 422.8 576 448c0 35.3-28.7 64-64 64z' />
            </svg>
          </span>
        </a>
      </li>
      {/* <!-- Icon --> */}
      <li className='mr-4'>
        <a href='#'>
          <span className='fill-gray-500 hover:fill-gray-700 focus:fill-gray-700 dark:fill-gray-200 [&>svg]:w-4'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 496 512'>
              {/* <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
              <path d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z' />
            </svg>
          </span>
        </a>
      </li>

      {/* <!-- Icon dropdown --> */}
      <li className='relative' data-te-dropdown-ref>
        <a
          className='mr-4 flex items-center text-gray-500 hover:text-gray-700 focus:text-gray-700'
          href='#'
          id='navbarDropdown'
          role='button'
          data-te-dropdown-toggle-ref
          aria-expanded='false'
        >
          <span className='relative inline-block h-[11px] w-4 overflow-hidden bg-gray-200 leading-[11px] decoration-inherit'>
            <span className="inline-block h-[11px] w-4 content-[''] [background-position:-36px_-26px_!important] [background:url(https://tecdn.b-cdn.net/img/svg/flags.png)_no-repeat_-108px_-1976px]"></span>
          </span>
        </a>
        <ul
          className='absolute left-auto right-0 z-[1000] float-left m-0 mt-1 hidden min-w-[10rem] list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-zinc-700 [&[data-te-dropdown-show]]:block'
          aria-labelledby='navbarDropdown'
          data-te-dropdown-menu-ref
        >
          <li>
            <a
              className='block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-200 dark:hover:bg-white/30'
              href='#'
              data-te-dropdown-item-ref
            >
              <span className='relative mr-2 inline-block h-[11px] w-4 overflow-hidden bg-gray-200 leading-[11px] decoration-inherit'>
                <span className="inline-block h-[11px] w-4 content-[''] [background-position:-36px_-26px_!important] [background:url(https://tecdn.b-cdn.net/img/svg/flags.png)_no-repeat_-108px_-1976px]"></span>
              </span>
              <span className='mr-4'>English</span>
              <span className='inline-block fill-green-600 dark:fill-gray-200 [&>svg]:h-3.5 [&>svg]:w-3.5'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                  {/* <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
                  <path d='M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z' />
                </svg>
              </span>
            </a>
          </li>
          <li>
            <hr className='my-2' />
          </li>
          <li>
            <a
              className='block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-200 dark:hover:bg-white/30'
              href='#'
              data-te-dropdown-item-ref
            >
              <span className='relative mr-2 inline-block h-[11px] w-4 overflow-hidden bg-gray-200 leading-[11px] decoration-inherit'>
                <span className="inline-block h-[11px] w-4 content-[''] [background:url(https://tecdn.b-cdn.net/img/svg/flags.png)_no-repeat_-108px_-1976px] [background-position:-72px_-572px_!important]"></span>
              </span>
              Polski
            </a>
          </li>
          <li>
            <a
              className='block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-200 dark:hover:bg-white/30'
              href='#'
              data-te-dropdown-item-ref
            >
              <span className='relative mr-2 inline-block h-[11px] w-4 overflow-hidden bg-gray-200 leading-[11px] decoration-inherit'>
                <span className="inline-block h-[11px] w-4 content-[''] [background:url(https://tecdn.b-cdn.net/img/svg/flags.png)_no-repeat_-108px_-1976px] [background-position:0px_-1196px_!important]"></span>
              </span>
              中文
            </a>
          </li>
          <li>
            <a
              className='block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-200 dark:hover:bg-white/30'
              href='#'
              data-te-dropdown-item-ref
            >
              <span className='relative mr-2 inline-block h-[11px] w-4 overflow-hidden bg-gray-200 leading-[11px] decoration-inherit'>
                <span className="inline-block h-[11px] w-4 content-[''] [background:url(https://tecdn.b-cdn.net/img/svg/flags.png)_no-repeat_-108px_-1976px] [background-position:-36px_-910px_!important]"></span>
              </span>
              日本語
            </a>
          </li>
          <li>
            <a
              className='block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-200 dark:hover:bg-white/30'
              href='#'
              data-te-dropdown-item-ref
            >
              <span className='relative mr-2 inline-block h-[11px] w-4 overflow-hidden bg-gray-200 leading-[11px] decoration-inherit'>
                <span className="inline-block h-[11px] w-4 content-[''] [background:url(https://tecdn.b-cdn.net/img/svg/flags.png)_no-repeat_-108px_-1976px] [background-position:0px_-1430px_!important]"></span>
              </span>
              Deutsch
            </a>
          </li>
          <li>
            <a
              className='block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-200 dark:hover:bg-white/30'
              href='#'
              data-te-dropdown-item-ref
            >
              <span className='relative mr-2 inline-block h-[11px] w-4 overflow-hidden bg-gray-200 leading-[11px] decoration-inherit'>
                <span className="inline-block h-[11px] w-4 content-[''] [background:url(https://tecdn.b-cdn.net/img/svg/flags.png)_no-repeat_-108px_-1976px] [background-position:0px_-1976px_!important]"></span>
              </span>
              Français
            </a>
          </li>
          <li>
            <a
              className='block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-200 dark:hover:bg-white/30'
              href='#'
              data-te-dropdown-item-ref
            >
              <span className='relative mr-2 inline-block h-[11px] w-4 overflow-hidden bg-gray-200 leading-[11px] decoration-inherit'>
                <span className="inline-block h-[11px] w-4 content-[''] [background:url(https://tecdn.b-cdn.net/img/svg/flags.png)_no-repeat_-108px_-1976px] [background-position:-0px_-1742px_!important]"></span>
              </span>
              Español
            </a>
          </li>
          <li>
            <a
              className='block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-200 dark:hover:bg-white/30'
              href='#'
              data-te-dropdown-item-ref
            >
              <span className='relative mr-2 inline-block h-[11px] w-4 overflow-hidden bg-gray-200 leading-[11px] decoration-inherit'>
                <span className="inline-block h-[11px] w-4 content-[''] [background:url(https://tecdn.b-cdn.net/img/svg/flags.png)_no-repeat_-108px_-1976px] [background-position:-72px_-884px_!important]"></span>
              </span>
              Русский
            </a>
          </li>
          <li>
            <a
              className='block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-200 dark:hover:bg-white/30'
              href='#'
              data-te-dropdown-item-ref
            >
              <span className='relative mr-2 inline-block h-[11px] w-4 overflow-hidden bg-gray-200 leading-[11px] decoration-inherit'>
                <span className="inline-block h-[11px] w-4 content-[''] [background:url(https://tecdn.b-cdn.net/img/svg/flags.png)_no-repeat_-108px_-1976px] [background-position:-72px_-702px_!important]"></span>
              </span>
              Português
            </a>
          </li>
        </ul>
      </li>

      {/* <!-- Avatar --> */}
      <li className='relative' data-te-dropdown-ref>
        <a
          className='hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none'
          href='#'
          id='navbarDropdownMenuLink'
          role='button'
          data-te-dropdown-toggle-ref
          aria-expanded='false'
        >
          <Image
            src='https://tecdn.b-cdn.net/img/Photos/Avatars/img (31).webp'
            className='rounded-full'
            width={22}
            height={22}
            alt='Avatar'
            loading='lazy'
          />
        </a>
        <ul
          className='absolute left-auto right-0 z-[1000] float-left m-0 mt-1 hidden min-w-[10rem] list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-zinc-700 [&[data-te-dropdown-show]]:block'
          aria-labelledby='dropdownMenuButton2'
          data-te-dropdown-menu-ref
        >
          <li>
            <a
              className='block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-200 dark:hover:bg-white/30'
              href='#'
              data-te-dropdown-item-ref
            >
              My profile
            </a>
          </li>
          <li>
            <a
              className='block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-200 dark:hover:bg-white/30'
              href='#'
              data-te-dropdown-item-ref
            >
              Settings
            </a>
          </li>
          <li>
            <a
              className='block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-200 dark:hover:bg-white/30'
              href='#'
              data-te-dropdown-item-ref
            >
              Logout
            </a>
          </li>
        </ul>
      </li>
    </ul>
  )
}
