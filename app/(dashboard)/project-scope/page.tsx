import { Card } from "@/components/ui/Card";
import { Text } from "@/components/ui/Typography";
import Image from "next/image";

export default function ProjectScopePage() {
  return (
    <div className="p-8 space-y-8">
      <div className="flex items-center gap-4 mb-8">
        <Image src="/images/vybout-logo.svg" alt="Vybout Logo" width={48} height={48} />
        <Text variant="h1" className="font-bold text-2xl text-gray-800">Vybout Admin Dashboard</Text>
      </div>
      <Card title="Project Scope" className="mb-8">
        <Text variant="h2" className="font-semibold text-lg mb-2">Scope of Vybout Admin</Text>
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>User management (all types)</li>
          <li>Business verification & moderation</li>
          <li>Content moderation system</li>
          <li>Transaction oversight</li>
          <li>Platform analytics & reports</li>
          <li>Dispute resolution</li>
          <li>Support ticket system</li>
          <li>System settings & configuration</li>
          <li>Admin user management</li>
          <li>Notification management</li>
          <li>Financial reporting</li>
        </ul>
      </Card>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Users">
          <Text variant="p">Manage all users, creators, explorers, and businesses.</Text>
        </Card>
        <Card title="Businesses">
          <Text variant="p">Verify, moderate, and manage business accounts.</Text>
        </Card>
        <Card title="Posts & Listings">
          <Text variant="p">Moderate user-generated content and listings.</Text>
        </Card>
        <Card title="Jobs">
          <Text variant="p">Oversee job marketplace and disputes.</Text>
        </Card>
        <Card title="Transactions">
          <Text variant="p">Monitor financial transactions and refunds.</Text>
        </Card>
        <Card title="Analytics & Reports">
          <Text variant="p">View platform analytics, engagement, and growth reports.</Text>
        </Card>
        <Card title="Support">
          <Text variant="p">Handle support tickets and FAQs.</Text>
        </Card>
        <Card title="Settings">
          <Text variant="p">Configure system-wide settings and notifications.</Text>
        </Card>
      </div>
    </div>
  );
}
