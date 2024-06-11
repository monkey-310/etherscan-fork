import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ThemeConext } from "@/app/theme-provider";
import { ThemeContextType } from '@/app/lib/definition';
import { themeOptions } from '@/app/lib/data';

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeConext) as ThemeContextType;

  return (
    <div className='my-2'>
      <span className="text-sm text-[#066a9c]">
        <a
          href="#"
          id="darkMode"
          data-dropdown-toggle="darkModeToggle"
          data-dropdown-placement="left"
          data-dropdown-offset-distance="-39"
          data-dropdown-offset-skidding="105"
          className="p-[10px] px-[11px] border border-solid border-[var(--bs-border-color)] hover:bg-[var(--bs-toggle-button-hover)] rounded-md"
        >
          {theme && <FontAwesomeIcon icon={themeOptions[theme].icon} />}
        </a>
      </span>
      <div
        id="darkModeToggle"
        className="z-[1000] bg-[var(--bs-bg-color)] border border-solid border-[var(--bs-border-color)] hidden p-2 divide-y divide-[var(--bs-border-color)] rounded-lg shadow w-44"
      >
        <ul
          className="py-2 text-sm text-[var(--bs-text-color)]"
          aria-labelledby="darkMode"
        >
          {Object.keys(themeOptions).map((key, i) => (
            <li key={i}>
              <a
                href="#"
                className="block px-4 py-2 text-xs hover:rounded-md hover:bg-[var(--bs-toggle-button-hover)] active:text-[#0784c3] focus:text-[#0784c3]"
                onClick={() => setTheme(key)}
              >
                <FontAwesomeIcon icon={themeOptions[key].icon} className='mr-2' />
                {themeOptions[key].label}
              </a>
            </li>
          ))}
        </ul>
        <div className="py-1">
          <a
            href="#"
            className="block px-4 py-2 text-xs text-[var(--bs-text-color)] hover:rounded-md hover:bg-[var(--bs-toggle-button-hover)] active:text-[#0784c3] focus:text-[#0784c3]"
          >
            <i className="fa fa-cog mr-2"></i>
            Site Settings
            <i className="fa fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ThemeToggle;
