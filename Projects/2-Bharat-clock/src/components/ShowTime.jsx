
export function ShowTime() {

  const date = new Date();

  // let hours = date.getHours();
  // let minutes = date.getMinutes();
  // let seconds = date.getSeconds();

  // let currentTime = hours +":"+ minutes +":"+ seconds;

  return (
    <h2>This is the current time : {date.toLocaleDateString()} - {date.toLocaleTimeString()}</h2>
  )
}