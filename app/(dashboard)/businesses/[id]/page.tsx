"use client";
import { Card } from "@/components/ui/Card";
import { Text } from "@/components/ui/Typography";
import { DataTable } from "@/components/table";
import { Button } from "@/components/ui/Button";
import { useRouter } from "next/router";

// Dummy business details
const business = {
  id: "1",
  name: "Acme Corp",
  email: "contact@acme.com",
  owner: { id: "u1", name: "Jane Doe", email: "jane@acme.com" },
  status: "Active",
  createdAt: "2024-06-01",
  performance: {
    revenue: "$12,000",
    users: 1200,
    posts: 34,
    jobs: 8,
    growth: "15% MoM"
  }
};

// Dummy posts
const posts = [
  { id: "p1", title: "Welcome to Acme!", date: "2024-06-02", views: 120 },
  { id: "p2", title: "New Product Launch", date: "2024-06-05", views: 98 },
];

// Dummy jobs
const jobs = [
  { id: "j1", title: "Frontend Developer", date: "2024-06-03", applicants: 12 },
  { id: "j2", title: "Backend Developer", date: "2024-06-06", applicants: 8 },
];

export default function BusinessDetailsPage() {
  // Columns for posts table
  const postColumns = [
    { accessorKey: "title", header: "Title" },
    { accessorKey: "date", header: "Date" },
    { accessorKey: "views", header: "Views" },
  ];

  // Columns for jobs table
  const jobColumns = [
    { accessorKey: "title", header: "Job Title" },
    { accessorKey: "date", header: "Date" },
    { accessorKey: "applicants", header: "Applicants" },
  ];

  return (
    <div className="space-y-6">
      <Card title="Business Details">
        <Text variant="h2">{business.name}</Text>
        <Text>Email: {business.email}</Text>
        <Text>Owner: {business.owner.name} ({business.owner.email})</Text>
        <Text>Status: {business.status}</Text>
        <Text>Created At: {business.createdAt}</Text>
      </Card>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card title="Performance">
          <Text>Revenue: {business.performance.revenue}</Text>
          <Text>Users: {business.performance.users}</Text>
          <Text>Posts: {business.performance.posts}</Text>
          <Text>Jobs: {business.performance.jobs}</Text>
          <Text>Growth: {business.performance.growth}</Text>
        </Card>
        <Card title="Business Posts">
          <DataTable data={posts} columns={postColumns} pageSize={5} showNumber={true} />
        </Card>
        <Card title="Business Jobs">
          <DataTable data={jobs} columns={jobColumns} pageSize={5} showNumber={true} />
        </Card>
      </div>
      <Card title="Other Details">
        <Text>Additional business info or actions can go here.</Text>
        <Button variant="outline">Edit Business</Button>
      </Card>
    </div>
  );
}