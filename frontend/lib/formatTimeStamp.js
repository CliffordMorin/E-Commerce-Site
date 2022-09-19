export default function formatTimeStamp(created) {
  let date = new Date(created * 1000);

  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  return `${month}/${day}/${year}`;
}
