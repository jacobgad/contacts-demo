import { useEffect, useState } from 'react';

function getSavedValue<T>(key: string, initialValue: T) {
	const savedValue = localStorage.getItem(key);
	if (savedValue) return JSON.parse(savedValue);
	return initialValue;
}

export default function useLocalStorage<T>(key: string, initialValue: T) {
	const [value, setValue] = useState<T>(() => {
		return getSavedValue(key, initialValue);
	});

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value));
	}, [value]);

	const array: [T, React.Dispatch<React.SetStateAction<T>>] = [value, setValue];
	return array;
}
