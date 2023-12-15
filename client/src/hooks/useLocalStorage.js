// Dependencies
import { useState, useEffect } from "react";

/* Example:
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  const [example, setExample] = useLocalStorage('example_key', {example: 'anything as default'});

  return ();
}; */

// Create a new item in the local storage.
export default function useLocalStorage(key = "", defaultValue = null) {
	const [value, setValue] = useState(
		JSON.parse(localStorage.getItem(key)) || defaultValue
	);

	useEffect(() => {
		if (value != null) localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);

	return [value, setValue];
}
