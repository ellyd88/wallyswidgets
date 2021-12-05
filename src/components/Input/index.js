import {useState} from "react";

export function Input() {    
    const [targetValue, setTargetValue] = useState(0);
    const [result, setResult] = useState([]);

    function packsToSend(targetValue) {   
        
        const packs = {
            qty5000: 0,
            qty2000: 0,
            qty1000: 0,
            qty500: 0,
            qty250: 0
        }
        let order = [];

        while (targetValue >= 5000) {
          targetValue -= 5000;
          packs.qty5000++;
        }
      
        while (targetValue > 4750) {
          targetValue -= 5000;
          packs.qty5000++;
        }
      
        while (targetValue > 1750) {
          targetValue -= 2000;
          packs.qty2000++;
        }
      
        while (targetValue > 2000) {
          targetValue -= 2000;
          packs.qty2000++;
        }
      
        while (targetValue >= 1000) {
          targetValue -= 1000;
          packs.qty1000++;
        }
      
        while (targetValue > 750) {
          targetValue -= 1000;
          packs.qty1000++;
        }
      
        while (targetValue > 250) {
          targetValue -= 500;
          packs.qty500++;
        }
      
        while (targetValue <= 250 && targetValue > 0) {
          targetValue -= 250;
          packs.qty250++;
        }
        for (let packSize in packs) {
            if(packs[packSize]>0){
                order.push([packs[packSize],packSize]);
            }
        }
        return order;
      }

return (
    <>
    <input
    type="text"
    placeholder="How many widgets?"
    onChange={(e) => setTargetValue(e.target.value)}
  ></input>
  <button type="submit" onClick={() => {
      const arr = [...packsToSend(targetValue)]
      setResult(arr)
      }
      }>
    Get order details
  </button>
<p> </p>
  {result.map((packs, i) => {
      return (
          <>
          <li key={i}>
              {packs[0]} x {packs[1].substring(3)}
          </li>
          </>
      )
  })}
  <p> </p>
  <p>To see the task, <a href="https://drive.google.com/file/d/1j6fZxAM39760Ujso6xDzK_48Q1Jir9Pq/view">click here</a></p>
  <p>To see the code, <a href="https://github.com/ellyd88/wallyswidgets">click here</a></p>
  </>
)
}