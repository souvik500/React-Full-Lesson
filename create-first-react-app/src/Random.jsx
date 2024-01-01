
export function Random () {

  let myName = () => {
    return "Souvik";
  }

  let randomNo = Math.random() * 100;

  return <p style={{backgroundColor : "yellow"}}>
    Hello, How are you?? {myName}  and my number is {randomNo}  
  </p>
}