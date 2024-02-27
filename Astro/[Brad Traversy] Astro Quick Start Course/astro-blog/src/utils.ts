function formatDate(date: Date): string {
	const options: Intl.DateTimeFormatOptions = { day: "numeric", month: "long", year: "numeric" };

	return new Date(date).toLocaleDateString(undefined, options);
}

export { formatDate };
