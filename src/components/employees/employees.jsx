function EmployeeDetail({ employee }) {
  if (!employee.profession) {
    employee["profession"] = {
      title: "No title",
      yearsExperience: 0,
      company: "No company",
    };
  }

  if (!employee.profession.company) {
    employee["profession"]["company"] = "No company";
  }

  return (
    <div>
      <p>
        {" "}
        <span style={{ color: "red" }}>
          {employee.name} {employee.lastName}
        </span>{" "}
        <br /> {employee.profession.title}
        <br /> Years of experience: {employee.profession.yearsExperience}
        <br />
        {employee.profession.company}
      </p>
    </div>
  );
}

export default function EmployeesList({ data }) {
  const employees = data.map((employee, index) => (
    <div key={index}>
      <EmployeeDetail employee={employee} />
    </div>
  ));

  return <div>{employees}</div>;
}
