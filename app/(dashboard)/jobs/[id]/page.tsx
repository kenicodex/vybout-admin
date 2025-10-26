"use client";
import { Card } from "@/components/ui/Card";
import { Text } from "@/components/ui/Typography";
import { DataTable } from "@/components/table";
import { Button } from "@/components/ui/Button";

// Dummy job details
const job = {
  id: "j1",
  title: "Frontend Developer",
  business: "Tech Corp",
  location: "Remote",
  posted: "2024-06-01",
  applicants: 34,
  status: "Open",
  description: "We are looking for a skilled frontend developer to join our team.",
};

// Dummy applicants data
const applicants = [
  { id: "a1", name: "Alice", email: "alice@email.com" },
  { id: "a2", name: "Bob", email: "bob@email.com" },
];

const applicantColumns = [
  { accessorKey: "name", header: "Name" },
  { accessorKey: "email", header: "Email" },
];

export default function JobDetailsPage() {
  return (
    <div className="space-y-6">
      <Card title="Job Details">
        <div className="space-y-2">
          <Text variant="h3">{job.title}</Text>
          <Text>Business: {job.business}</Text>
          <Text>Location: {job.location}</Text>
          <Text>Posted: {job.posted}</Text>
          <Text>Status: {job.status}</Text>
          <Text>Applicants: {job.applicants}</Text>
          <Text>{job.description}</Text>
        </div>
      </Card>
      <Card title="Applicants">
        <DataTable
          data={applicants}
          columns={applicantColumns}
          pageSize={5}
          searchable={true}
          showNumber={true}
          onViewRoute={(applicant) => `/users/${applicant.id}`}
        />
      </Card>
      <Button variant="default">Edit Job</Button>
    </div>
  );
}