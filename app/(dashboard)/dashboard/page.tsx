"use client";
import { Card } from "@/components/ui/Card";
import { Text } from "@/components/ui/Typography";
import Image from "next/image";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function DashboardPage() {
  // Dummy analytics data
  const userStats = { count: 1245 };
  const businessStats = { count: 312 };
  const postStats = { count: 876 };
  const jobStats = { count: 54 };

  // Dummy chart data
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const usersData = days.map((day, i) => ({ day, users: 1000 + i * 30 + (i * 7 + 11) % 50 }));
  const businessesData = days.map((day, i) => ({ day, businesses: 300 + i * 5 + ((i * 3 + 7) % 10) }));
  const postsData = days.map((day, i) => ({ day, posts: 800 + i * 10 + ((i * 13 + 17) % 20) }));
  const jobsData = days.map((day, i) => ({ day, jobs: 50 + i * 1 + ((i * 2 + 3) % 3) }));

  return (
    <div className="p-8 space-y-8">
      <div className="flex items-center gap-4 mb-8">
        <Image src="/images/vybout-logo.svg" alt="Vybout Logo" width={48} height={48} />
        <Text variant="h1" className="font-bold text-2xl text-gray-800">Vybout Admin Dashboard</Text>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card title="Users">
          <Text variant="h2" className="font-semibold text-lg mb-2">Total Users</Text>
          <Text variant="h1" className="text-blue-600 text-3xl font-bold">
            {userStats.count}
          </Text>
        </Card>
        <Card title="Businesses">
          <Text variant="h2" className="font-semibold text-lg mb-2">Total Businesses</Text>
          <Text variant="h1" className="text-green-600 text-3xl font-bold">
            {businessStats.count}
          </Text>
        </Card>
        <Card title="Posts">
          <Text variant="h2" className="font-semibold text-lg mb-2">Total Posts</Text>
          <Text variant="h1" className="text-purple-600 text-3xl font-bold">
            {postStats.count}
          </Text>
        </Card>
        <Card title="Jobs">
          <Text variant="h2" className="font-semibold text-lg mb-2">Total Jobs</Text>
          <Text variant="h1" className="text-orange-600 text-3xl font-bold">
            {jobStats.count}
          </Text>
        </Card>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <Card title="Users Over Days">
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={usersData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="users" stroke="#2563eb" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </Card>
        <Card title="Businesses Over Days">
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={businessesData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="businesses" stroke="#22c55e" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </Card>
        <Card title="Posts Over Days">
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={postsData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="posts" stroke="#a21caf" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </Card>
        <Card title="Jobs Over Days">
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={jobsData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="jobs" stroke="#ea580c" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
