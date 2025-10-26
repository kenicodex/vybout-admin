"use client";
import { Card } from "@/components/ui/Card";
import { Text } from "@/components/ui/Typography";
import Image from "next/image";
import { DataTable } from "@/components/table";
import { ColumnDef } from "@tanstack/react-table";

// Dummy data for registered businesses
const businesses = [
  {
    id: "1",
    name: "Acme Corp",
    email: "contact@acmecorp.com",
    owner: "John Doe",
    status: "Active",
    createdAt: "2024-06-01",
  },
  {
    id: "2",
    name: "Beta Solutions",
    email: "info@betasolutions.com",
    owner: "Jane Smith",
    status: "Pending",
    createdAt: "2024-05-28",
  },
  {
    id: "3",
    name: "Gamma Innovations",
    email: "hello@gammainnov.com",
    owner: "Alice Johnson",
    status: "Active",
    createdAt: "2024-05-20",
  },
];

const columns: ColumnDef<typeof businesses[0]>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: info => info.getValue(),
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: info => info.getValue(),
  },
  {
    accessorKey: "owner",
    header: "Owner",
    cell: info => info.getValue(),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: info => info.getValue(),
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: info => info.getValue(),
  },
];

export default function BusinessesPage() {
  return (
    <div className="space-y-6">
    
      <Card title="All Businesses">
        <DataTable data={businesses} columns={columns} pageSize={10} searchable={true} showNumber={true} />
      </Card>
    </div>
  );
}