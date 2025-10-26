"use client";
import { Card } from "@/components/ui/Card";
import { DataTable } from "@/components/table";
import { Text } from "@/components/ui/Typography";

// Dummy users data
const users = [
  { id: "u1", name: "Jane Doe", email: "jane@acme.com" },
  { id: "u2", name: "John Smith", email: "john@acme.com" },
  { id: "u3", name: "Alice Johnson", email: "alice@acme.com" },
];

const columns = [
  { accessorKey: "name", header: "Name" },
  { accessorKey: "email", header: "Email" },
];

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <Card title="All Users">
        <DataTable data={users} columns={columns} pageSize={10} searchable={true} showNumber/>
      </Card>
    </div>
  );
}