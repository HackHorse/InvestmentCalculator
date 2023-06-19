import React,{useState} from "react";
import Form from "./Forms/Form";
import TableData from "./Tables/TableData";
import TableHead from "./Tables/TableHead";

function App() {
const [userInput, setUserInput] = useState(null);

const realData = (userInput) => {

  setUserInput(userInput);
}

const yearlyData = []; // per-year results
if(userInput){
  let currentSavings = +userInput["curretsavings"]; // feel free to change the shape of this input object!
  const yearlyContribution = +userInput["yearlycontribution"]; // as mentioned: feel free to change the shape...
  const expectedReturn = +userInput["expectedreturn"] / 100;
  const duration = +userInput["duration"];

// The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution
      });
}
}

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});


  return (
    <>
    <Form getInvestmentData={realData}/>

    <TableHead>

    {!userInput && <>No Investment Calculated yet.</>}
    {userInput && (yearlyData.map((inveset,index)=> (
    <TableData key={index} years={inveset.year} savings={formatter.format(inveset.savingsEndOfYear)} yearlyinterest={formatter.format(inveset.yearlyInterest)} totalinterest={formatter.format(inveset.savingsEndOfYear - +userInput["curretsavings"] - inveset.yearlyContribution * inveset.year)} investedcapital={formatter.format(+userInput["curretsavings"] + inveset.yearlyContribution * inveset.year)} />
)))}
    </TableHead>

    </>

  );
}

export default App;
