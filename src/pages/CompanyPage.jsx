import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import Search from "../components/Search";
import TableauCompany from "../components/TableauCompany";

const CompanyPage = () => {
  const [selected, setSelected] = useState("");
  const [companies, setCompanies] = useState([]);
  const [companyData, setCompanyData] = useState(null);

  useEffect(() => {
    // Directly use the URL of your CSV file in S3
    const csvUrl =
      "https://corpoindia.s3.eu-north-1.amazonaws.com/gold_layer/companies.csv";

    // Fetch the CSV file
    fetch(csvUrl)
      .then((response) => response.text())
      .then((csvText) => {
        // Parse the CSV file using PapaParse
        Papa.parse(csvText, {
          header: true,
          dynamicTyping: true,
          complete: (results) => {
            console.log("Parsed CSV Data:", results.data); // Debugging log
            if (results.data && results.data.length > 0) {
              setCompanies(
                results.data.map((row) => ({
                  value: row.company_id || "N/A",
                  label: row.company || "N/A",
                  ...row, // Spread other data fields
                })),
              );
            } else {
              console.warn("No data found in CSV or CSV format is incorrect.");
            }
          },
          error: (error) => console.error("Error parsing the CSV file:", error),
        });
      })
      .catch((error) => console.error("Error fetching the CSV file:", error));
  }, []);

  useEffect(() => {
    if (selected && companies.length) {
      const selectedCompany = companies.find(
        (company) => company.value === selected,
      );
      if (selectedCompany) {
        console.log("Selected Company Data:", selectedCompany); // Add this line
        setCompanyData({
          name: selectedCompany.label,
          description: selectedCompany.description || "N/A",
          founded: selectedCompany.founded_year || "N/A",
          headquarters: `${selectedCompany.city || "N/A"}, ${selectedCompany.state || "N/A"}`,
          industry: selectedCompany.industry1 || "N/A",
          employees: selectedCompany.employee_grp || "N/A",
          revenue: selectedCompany.revenue_grp || "N/A",
          score: selectedCompany.timefund || "N/A",
          funding: selectedCompany.funding_round
            ? [
                {
                  round: selectedCompany.funding_round,
                  status: selectedCompany.funding_status || "N/A",
                  date: selectedCompany.last_funding_date || "N/A",
                  type: selectedCompany.last_funding_type || "N/A",
                  totalAmount: selectedCompany.total_funding_amt || "N/A",
                },
              ]
            : [],
          report: "Provide a meaningful report based on company data",
          similarCompanies: ["Company A", "Company B", "Company C"], // Replace with actual similar companies if available
          company_id: selectedCompany.value, // Ensure this field is included
        });
      }
    }
  }, [selected, companies]);

  return (
    <div className="p-4">
      <Search options={companies} setSelected={setSelected} />
      <h1 className="mt-4 text-3xl font-bold">
        {companyData?.name || "Select a Company"}
      </h1>
      <p className="mt-5">{companyData?.description}</p>

      {companyData && (
        <>
          <div className="mt-4">
            <h2 className="text-2xl font-semibold">Company Insights</h2>
            <div className="grid grid-cols-2 gap-4 mt-2">
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Founded: {companyData.founded}
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Headquarters: {companyData.headquarters}
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Industry: {companyData.industry}
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Employees: {companyData.employees}
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Revenue: {companyData.revenue} Crore Rs
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Score: {companyData.score}
              </button>
            </div>
          </div>

          <div className="mt-4">
            <h2 className="text-2xl font-semibold">Funding</h2>
            {/* Pass companyData.company_id to TableauCompany */}
            <TableauCompany companyIdParameter={companyData.company_id} />
          </div>

          <div className="mt-4">
            <h2 className="text-2xl font-semibold">Report</h2>
            <p>
              24 Mantra Organic is a leading organic food brand in India, known
              for its commitment to promoting sustainable agriculture and
              healthy living.
            </p>

            <p>{companyData.report || "Report not available"}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default CompanyPage;
