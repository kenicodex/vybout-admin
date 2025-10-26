"use client";
import { Card } from "@/components/ui/Card";
import { Text } from "@/components/ui/Typography";
import { DataTable } from "@/components/table";
import { Button } from "@/components/ui/Button";

// Dummy user details
const user = {
  id: "u1",
  name: "Jane Doe",
  email: "jane@acme.com",
  joinedAt: "2024-05-01",
  status: "Active"
};

// Dummy posts by user
const posts = [
  { id: "p1", title: "My First Post", date: "2024-06-02", views: 120 },
  { id: "p2", title: "React Tips", date: "2024-06-05", views: 98 },
];

// Dummy jobs applied by user
const appliedJobs = [
  { id: "j1", title: "Frontend Developer", date: "2024-06-03", status: "Pending" },
  { id: "j2", title: "Backend Developer", date: "2024-06-06", status: "Interview" },
];

export default function UserDetailsPage() {
  // Columns for posts table
  const postColumns = [
    { accessorKey: "title", header: "Title" },
    { accessorKey: "date", header: "Date" },
    { accessorKey: "views", header: "Views" },
  ];

  // Columns for applied jobs table
  const jobColumns = [
    { accessorKey: "title", header: "Job Title" },
    { accessorKey: "date", header: "Applied Date" },
    { accessorKey: "status", header: "Status" },
  ];

  return (
    <div className="space-y-6">
      <Card title="User Details">
        <Text variant="h2">{user.name}</Text>
        <Text>Email: {user.email}</Text>
        <Text>Status: {user.status}</Text>
        <Text>Joined At: {user.joinedAt}</Text>
      </Card>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card title="User's Posts">
          <DataTable data={posts} columns={postColumns} pageSize={5} showNumber={true} onViewRoute={(post) => `/posts/${post.id}`} />
        </Card>
        <Card title="Applied Jobs">
          <DataTable data={appliedJobs} columns={jobColumns} pageSize={5} showNumber={true} onViewRoute={(job) => `/jobs/${job.id}`} />
        </Card>
      </div>
      <Card title="Other Details">
        <Text>Additional user info or actions can go here.</Text>
        <Button variant="outline">Edit User</Button> 
      </Card>
    </div>
  );
}