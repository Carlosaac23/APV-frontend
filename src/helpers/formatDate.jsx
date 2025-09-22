export default function formatDate(date) {
  const newDate = new Date(date);
  return new Intl.DateTimeFormat('es-CO', { dateStyle: 'long' }).format(
    newDate,
  );
}
