import React from 'react';

interface SearchBarDTO {
    placeholder : string
}

const SearchBar = (props : SearchBarDTO) => {
    return (
        <div>
            <form>
                <label htmlFor="default-search"
                       className="text-sm font-medium text-secondary sr-only dark:text-white">Recherche</label>
                <div className="relative lg:w-96">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-secondary dark:text-gray-400" fill="none"
                             stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        </svg>
                    </div>
                    <input type="search" id="default-search"
                           className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                           placeholder={props.placeholder} required/>
                        <button type="submit"
                                className="text-secondary absolute bg-tertiary right-2.5 bottom-2.5 hover:bg-primary hover:text-tertiary hover:scale-110 hover:duration-100 font-medium rounded-md text-sm px-4 py-2">Chercher
                        </button>
                </div>
            </form>

        </div>
    );
};

export default SearchBar;