export default function formatDate(date) {
  const pad = (n) => n.toString().padStart(2, "0");

  const year = date.getFullYear();
  const month = pad(date.getMonth() + 1); // Mês começa em 0
  const day = pad(date.getDate());

  return `${year}-${month}-${day}`;
}
