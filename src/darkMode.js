import React, {useEffect} from 'react';
import {useThemeStore} from './store';

const DarkModeToggle = () => {
	const {isDarkMode, setIsDarkMode} = useThemeStore();

	useEffect(() => {
		const savedMode = isDarkMode;
		setIsDarkMode(savedMode);
		document.body.classList.toggle('dark', savedMode);
	}, [isDarkMode]);

	const toggleDarkMode = () => {
		setIsDarkMode(!isDarkMode);
	};

	return (
		<button
			onClick={toggleDarkMode}
			className={`${isDarkMode ? 'text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' : 'text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'}}`}>
			{isDarkMode ? 'Light Canvas' : 'Dark Canvas'}
		</button>
	);
};

export default DarkModeToggle;
