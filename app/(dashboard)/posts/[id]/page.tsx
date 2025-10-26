"use client";
import { Card } from "@/components/ui/Card";
import { Text } from "@/components/ui/Typography";
import { DataTable } from "@/components/table";
import { Button } from "@/components/ui/Button";

// Dummy post details
const post = {
  id: "p1",
  title: "Getting Started with React",
  author: "Jane Doe",
  business: "Tech Corp",
  date: "2024-06-02",
  views: 120,
  status: "Published",
  content: "This post covers the basics of React and how to get started.",
};

// Dummy comments data
const comments = [
  { id: "c1", user: "Alice", comment: "Great post!" },
  { id: "c2", user: "Bob", comment: "Very helpful, thanks!" },
];

const commentColumns = [
  { accessorKey: "user", header: "User" },
  { accessorKey: "comment", header: "Comment" },
];

export default function PostDetailsPage() {
  return (
    <div className="space-y-6">
      <Card title="Post Details">
        <div className="space-y-2">
          <Text variant="h3">{post.title}</Text>
          <Text>Author: {post.author}</Text>
          <Text>Business: {post.business}</Text>
          <Text>Date: {post.date}</Text>
          <Text>Status: {post.status}</Text>
          <Text>Views: {post.views}</Text>
          <Text>{post.content}</Text>
        </div>
      </Card>
      <Card title="Comments">
        <DataTable
          data={comments}
          columns={commentColumns}
          pageSize={5}
          searchable={true}
          showNumber={true}
        />
      </Card>
      <Button variant="default">Edit Post</Button>
    </div>
  );
}