"use client";
import { Card } from "@/components/ui/Card";
import { DataTable } from "@/components/table";

// Dummy jobs data
const jobs = [
  {
    id: "j1",
    title: "Frontend Developer",
    business: "Tech Corp",
    location: "Remote",
    posted: "2024-06-01",
    applicants: 34,
    status: "Open"
  },
  {
    id: "j2",
    title: "Backend Engineer",
    business: "Dev Inc",
    location: "New York",
    posted: "2024-06-03",
    applicants: 21,
    status: "Closed"
  },
];

const columns = [
  { accessorKey: "title", header: "Title" },
  { accessorKey: "business", header: "Business" },
  { accessorKey: "location", header: "Location" },
  { accessorKey: "posted", header: "Posted" },
  { accessorKey: "applicants", header: "Applicants" },
  { accessorKey: "status", header: "Status" },
];

export default function JobsPage() {
  return (
    <div className="space-y-6">
      <Card title="All Jobs">
        <DataTable
          data={jobs}
          columns={columns}
          pageSize={10}
          searchable={true}
          showNumber={true}
        />
      </Card>
    </div>
  );
}