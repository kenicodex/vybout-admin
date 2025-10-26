"use client";
import { Card } from "@/components/ui/Card";
import { DataTable } from "@/components/table";

// Dummy posts data
const posts = [
  { 
    id: "p1", 
    title: "Getting Started with React", 
    author: "Jane Doe",
    business: "Tech Corp",
    date: "2024-06-02", 
    views: 120,
    status: "Published"
  },
  { 
    id: "p2", 
    title: "Web Development Best Practices", 
    author: "John Smith",
    business: "Dev Inc",
    date: "2024-06-05", 
    views: 98,
    status: "Published"
  },
];

const columns = [
  { accessorKey: "title", header: "Title" },
  { accessorKey: "author", header: "Author" },
  { accessorKey: "business", header: "Business" },
  { accessorKey: "date", header: "Date" },
  { accessorKey: "views", header: "Views" },
  { accessorKey: "status", header: "Status" },
];

export default function PostsPage() {
  return (
    <div className="space-y-6">
      <Card title="All Posts">
        <DataTable 
          data={posts} 
          columns={columns} 
          pageSize={10} 
          searchable={true} 
          showNumber={true} 
        />
      </Card>
    </div>
  );
}