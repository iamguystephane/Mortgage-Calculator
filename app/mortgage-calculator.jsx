"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import "./media-queries.css";

export default function MortgageCalculator() {
  const [amount, setAmount] = useState("");
  const [term, setTerm] = useState("");
  const [rate, setRate] = useState("");
  const [selectedOption, setSelectedOption] = useState("repayment");
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleCalculate = () => {
    const principal = parseFloat(amount);
    const years = parseFloat(term);
    const interestRate = parseFloat(rate) / 100 / 12;
    const numberOfPayments = years * 12;

    let monthlyPayment;

    if (selectedOption === "repayment") {
      monthlyPayment =
        (principal * interestRate) /
        (1 - Math.pow(1 + interestRate, -numberOfPayments));
    } else if (selectedOption === "interestOnly") {
      monthlyPayment = principal * interestRate;
    }

    setMonthlyPayment(monthlyPayment.toFixed(2));
  };
  const handleClear = () => {
    setAmount("");
    setTerm("");
    setRate("");
    setSelectedOption("repayment");
    setMonthlyPayment(null);
  };
  return (
    <div className="main-container flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <Card className="main-card-container xsm:w-full md:w-2/3 h-[400px] flex flex-row items-center justify-center rounded-2xl rounded-tl-2xl rounded-bl-2x p-0 xsm:w-full xsm:h-[400px] main-card">
        <CardContent className="main-card-container-content p-6 bg-white xsm:w-2/3 md:w-1/2 info-card rounded-2xl">
          <div className="flex justify-between">
            <h2 className="text-xl font-semibold">Mortgage Calculator</h2>
            <button
              className="text-sm text-blue-500 cursor-pointer"
              onClick={handleClear}
            >
              Clear All
            </button>
          </div>
          <div className="mt-4 space-y-4">
            <div>
              <Label>Mortgage Amount</Label>
              <Input
                type="number"
                placeholder="£"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Mortgage Term</Label>
                <Input
                  type="number"
                  placeholder="years"
                  value={term}
                  onChange={(e) => setTerm(e.target.value)}
                />
              </div>
              <div>
                <Label>Interest Rate</Label>
                <Input
                  type="number"
                  placeholder="%"
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                />
              </div>
            </div>
            <div>
              <Label>Mortgage Type</Label>
              <Button
                className="w-full bg-transparent border justify-start hover:bg-transparent mt-2"
                onClick={() => handleSelect("repayment")}
              >
                <Input
                  type="radio"
                  className="h-[15px] w-[15px]"
                  checked={selectedOption === "repayment"}
                  onChange={handleChange}
                  name="mortgageType"
                  value="repayment"
                />
                <Label className="text-black"> Repayment </Label>
              </Button>
              <Button
                className="w-full bg-transparent border justify-start hover:bg-transparent mt-2"
                onClick={() => handleSelect("interestOnly")}
              >
                <Input
                  type="radio"
                  className="h-[15px] w-[15px]"
                  checked={selectedOption === "interestOnly"}
                  onChange={handleChange}
                  name="mortgageType"
                  value="interestOnly"
                />
                <Label className="text-black"> Interest Only </Label>
              </Button>
            </div>
            <Button
              className="calculator-btn text-white bg-yellow-700 hover:bg-yellow-800 font-medium py-5 rounded-lg mt-4 w-1/2"
              onClick={handleCalculate}
            >
              Calculate Repayments
            </Button>
          </div>
        </CardContent>
        <CardContent className="display-container p-0 w-1/2 !h-full bg-gray-900 rounded-2xl rounded-tl-none flex flex-col items-center justify-center px-5 xsm:hidden md:flex">
          <h1 className="text-white text-lg"> Results show here </h1>
          <p className="text-center mt-2 text-gray-400">
            Complete the form and click on "complete payments" to see what
            monthly repayments would be.
          </p>
          {monthlyPayment && (
            <div className="text-white mt-4">
              Monthly Payment: £{monthlyPayment}
            </div>
          )}
        </CardContent>
      </Card>
      <Card className="responsive-card w-full h-[400px] flex flex-row items-center justify-center p-0 xsm:w-full xsm:h-[400px]">
        <CardContent className="responsive-card-content p-0 !h-full bg-gray-900 flex flex-col items-center justify-center px-5 xsm:hidden md:flex w-full">
          <h1 className="text-white text-lg w-full"> Results show here </h1>
          <p className="mt-2 text-gray-400 w-full">Your Results</p>
          <p className="mt-2 w-full text-gray-500">
            Your results are shown below based on the information you provided.
            To adjust these results, edit the form and click
          </p>
          {monthlyPayment && (
            <div className="text-white mt-4 bg-gray-800 h-[200px] w-full rounded-2xl p-4">
              <p className="text-lg text-gray-500">Monthly Payments</p>
              <p className="text-3xl font-bold text-yellow-500">
                £{monthlyPayment}
              </p>
              <div className="w-full h-[1px] bg-white mt-4" />
              <p className="mt-2 text-gray-500">
                You'll repay them over the term
              </p>
              <p className="text-3xl font-bold text-yellow-500">
                £{monthlyPayment}
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
