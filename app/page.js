import MortgageCalculator from "./mortgage-calculator";

export const metadata = {
  title: "Mortgage Calculator",
  description:
    "This is a mortgage calculator which helps you to calculate your mortgage",
};

export default function Home() {
  return <MortgageCalculator />;
}
