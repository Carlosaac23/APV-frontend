export function formatDate(date) {
  const newDate = new Date(date);
  return new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(
    newDate
  );
}
