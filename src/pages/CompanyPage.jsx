import React, { useEffect, useState } from "react";
import Search from "../components/Search";
import Papa from 'papaparse';

const CompanyPage = () => {
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
    // Add more options as needed
  ];

  const [selected, setSelected] = useState("")
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    // Fetch the CSV file
    fetch('/combined-companies.csv')
      .then(response => response.text())
      .then(csvText => {
        // Parse the CSV file content
        Papa.parse(csvText, {
          header: true,
          complete: (results) => {
            const formattedCompanies = results.data.map(row => ({
              value: row.company,
              label: row.company
            }));
            setCompanies(formattedCompanies);
          }
        });
      })
      .catch(error => console.error('Error fetching the CSV file:', error));
  }, []);

  // Mock data for demonstration, replace with actual incoming data
  const companyData = {
    name: "Byju's",
    description: "Byju's is an Ed-tech company based in Bengaluru.",
    founded: 2011,
    headquarters: "Bengaluru",
    industry: "Ed tech",
    employees: 25000,
    revenue: -8300,
    score: 500,
    funding: [
      /* Funding data */
    ],
    report:
      "Byju's faces a turbulent present. Once valued at $22 billion, it's now worth $200 million, battling mounting debt and facing criticism for aggressive marketing practices. While they boast 150 million users, hefty losses and layoffs paint a picture of financial strain.",
    similarCompanies: ["Company A", "Company B", "Company C"],
  };

  return (
    <div className="p-4">
      <Search options={companies} setSelected={setSelected} />
      <h1 className="text-3xl font-bold">{selected ? selected : ""}</h1>
      <p>{companyData.description}</p>

      <div className="mt-4">
        <h2 className="text-2xl font-semibold">Company Insights</h2>
        <div className="grid grid-cols-2 gap-4 mt-2">
          <div>Founded: {companyData.founded}</div>
          <div>Headquarters: {companyData.headquarters}</div>
          <div>Industry: {companyData.industry}</div>
          <div>Employees: {companyData.employees}</div>
          <div>Revenue: {companyData.revenue} Crore Rs</div>
          <div>Score: {companyData.score}</div>
        </div>
      </div>

      <div className="mt-4">
        <h2 className="text-2xl font-semibold">Funding</h2>
        {/* Include your funding chart here */}
        {/* Mock chart for illustration */}
        <div className="w-full h-64 bg-gray-200">Funding Chart</div>
      </div>

      <div className="mt-4">
        <h2 className="text-2xl font-semibold">Report</h2>
        <p>{companyData.report}</p>
      </div>

      <div className="mt-4">
        <h2 className="text-2xl font-semibold">Similar Companies</h2>
        <ul>
          {companyData.similarCompanies.map((company, index) => (
            <li key={index}>{company}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CompanyPage;
