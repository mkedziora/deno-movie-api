const getRandomItemFromArray = <T>(arr: Array<T>) => {
	if (!arr.length) return null;
	return arr[Math.floor(Math.random() * arr.length)];
};

export { getRandomItemFromArray };
