import React,{useState} from 'react';

const RewardsByMonth=()=>{
    const transactionData = [
    {
      custName:"Jake",
      date:"12-01-2020",
      amountSpent:'$120',
    },
     {
      custName:"Jake",
      date:"11-11-2020",
      amountSpent:'$180',
    },
     {
      custName:"Jake",
      date:"10-21-2020",
      amountSpent:'$220',
    },
    {
      custName:"Jill",
      date:"12-02-2020",
      amountSpent:'$100',
    },
     {
      custName:"Jill",
      date:"11-12-2020",
      amountSpent:'$10',
    },
     {
      custName:"Jill",
      date:"10-22-2020",
      amountSpent:'$250',
    },
    {
      custName:"Jack",
      date:"10-03-2020",
      amountSpent:'$50',
    },
    {
      custName:"Jack",
      date:"11-13-2020",
      amountSpent:'$100',
    },
     {
      custName:"Jack",
      date:"10-23-2020",
      amountSpent:'$150',
    },
     {
      custName:"Jane",
      date:"10-04-2020",
      amountSpent:'$500',
    },
    {
      custName:"Jane",
      date:"11-14-2020",
      amountSpent:'$10',
    },
     {
      custName:"Jane",
      date:"10-24-2020",
      amountSpent:'$15',
    },
    ]; 
 const [date, setState] =useState("");

 
    const getRewardPoints = (amountSpent) => {
        console.log('hello')
        let points = 0;
        let rewardAmount = Number(amountSpent.toString().replace(/[$ ]/, ''));
        if (rewardAmount >= 50) {
            rewardAmount = rewardAmount - 50;
            if (rewardAmount > 50) {
                // 1 point for every dollar between $51 to $100
                points += 50;
                // 2 point for every dollar spent from $101
                points += ((rewardAmount - 50) * 2);
            } else {
                // 1 point for every dollar between $51 to $100
                points += rewardAmount;
            }
        }
        return points;
    };
 
        return(
                <>

                    <h3>Reward Point Calculation Rewards By Month:</h3>
                    <label>Choose a Name:</label>
                    <select id="sel" onChange={e => setState(e.target.value)} value={date}>
                        <option value="Select">Select</option>
                        <option value="12">Dec</option>
                        <option value="11">Nov</option>
                        <option value="10">Oct</option>
                    </select>
                     <div>
                         {transactionData.filter(x => x.date === date).map(x => (<div>
                                                        <p>Name:<b>{x.custName}</b></p>
                                                        <p>Date of Purchase:<b>{x.date}</b></p>
                                                        <p>Amount Spent:<b>{x.amountSpent}</b></p>
                                                        <hr/>
                                                </div>)
                                                )           
                        }
                    <button onClick={()=>getRewardPoints(transactionData.reduce((prev,next) => prev + next.amountSpent.toString().replace(/[$ ]/, ''),0))}>Total amount spent:{}</button>
                    <p>Reward Points:</p>

                     </div>
                     
                   
                    
                </>
        );

    
}

export default RewardsByMonth;