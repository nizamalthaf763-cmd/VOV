"use client";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Card, CardContent } from "./Card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

// Sample data
const chartData = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 500 },
  { name: "Apr", value: 200 },
  { name: "May", value: 700 },
  { name: "Jun", value: 600 },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#F8F9FD] flex flex-col">
      {/* Topbar */}
      <Topbar />

      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Dashboard */}
        <main className="flex-1 p-6">
          {/* Title */}
          <h1 className="text-2xl font-bold text-[#1E1E2F] mb-6">Dashboard</h1>

          {/* Stats Cards */}
          <div className="text-[#1E1E2F] grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <StatCard title="Total Balance" amount="$632.000" icon="💰" />
            <StatCard title="Total Income" amount="$632.000" icon="👤" />
            <StatCard title="Total Saving" amount="$632.000" icon="💳" />
            <StatCard title="Total Outcome" amount="$632.000" icon="📉" />
          </div>

          {/* Analytics + Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* Analytics */}
            <div className="col-span-2 p-4 bg-white rounded-xl shadow-sm">
              <h2 className="text-lg text-[#1E1E2F] font-semibold mb-4">Analytics</h2>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="value" stroke="#2297F2" strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Cards */}
            <div className="p-4 bg-white rounded-xl shadow-sm">
              <h2 className="text-lg text-[#1E1E2F] font-semibold mb-4">Cards</h2>
              <CreditCard name="Jock Lewis" number="1234 5678 9101 1121" type="mastercard" />
              <CreditCard name="Jock Lewis" number="1234 5678 9101 1121" type="visa" />
            </div>
          </div>

          {/* Transactions */}
          <div className="p-4 bg-white rounded-xl shadow-sm">
            <h2 className="text-lg text-[#1E1E2F] font-semibold mb-4">Transaction</h2>
            <div className="max-h-64 overflow-y-auto">
              <TransactionRow name="Adobe After Effect" date="Sat, 20 Apr 2020" amount="$80.09" status="Income" />
              <TransactionRow name="McDonald's" date="Fri, 19 Apr 2020" amount="$7.03" status="Outcome" />
              <TransactionRow name="Adobe After Effect" date="Sat, 20 Apr 2020" amount="$80.09" status="Income" />
              <TransactionRow name="McDonald's" date="Fri, 19 Apr 2020" amount="$7.03" status="Outcome" />
              <TransactionRow name="Adobe After Effect" date="Sat, 20 Apr 2020" amount="$80.09" status="Income" />
              <TransactionRow name="McDonald's" date="Fri, 19 Apr 2020" amount="$7.03" status="Outcome" />
              <TransactionRow name="Adobe After Effect" date="Sat, 20 Apr 2020" amount="$80.09" status="Income" />
              <TransactionRow name="McDonald's" date="Fri, 19 Apr 2020" amount="$7.03" status="Outcome" />
              <TransactionRow name="Adobe After Effect" date="Sat, 20 Apr 2020" amount="$80.09" status="Income" />
              <TransactionRow name="McDonald's" date="Fri, 19 Apr 2020" amount="$7.03" status="Outcome" />
              <TransactionRow name="Adobe After Effect" date="Sat, 20 Apr 2020" amount="$80.09" status="Income" />
              <TransactionRow name="McDonald's" date="Fri, 19 Apr 2020" amount="$7.03" status="Outcome" />
              <TransactionRow name="Adobe After Effect" date="Sat, 20 Apr 2020" amount="$80.09" status="Income" />
              <TransactionRow name="McDonald's" date="Fri, 19 Apr 2020" amount="$7.03" status="Outcome" />
              <TransactionRow name="Adobe After Effect" date="Sat, 20 Apr 2020" amount="$80.09" status="Income" />
              <TransactionRow name="McDonald's" date="Fri, 19 Apr 2020" amount="$7.03" status="Outcome" />
              <TransactionRow name="Adobe After Effect" date="Sat, 20 Apr 2020" amount="$80.09" status="Income" />
              <TransactionRow name="McDonald's" date="Fri, 19 Apr 2020" amount="$7.03" status="Outcome" />
              {/* Add more TransactionRow as needed */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

/* Components */
function StatCard({ title, amount, icon }) {
  return (
    <Card className="p-4 shadow-sm">
      <CardContent>
        <div className="flex items-center space-x-3">
          <div className="text-3xl">{icon}</div>
          <div>
            <p className="text-sm text-gray-500">{title}</p>
            <p className="text-xl font-bold">{amount}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function CreditCard({ name, number, type }) {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 rounded-xl mb-4">
      <p className="text-sm">{type.toUpperCase()}</p>
      <p className="text-lg font-semibold">{number}</p>
      <p className="text-sm mt-2">{name}</p>
    </div>
  );
}

function TransactionRow({ name, date, amount, status }) {
  return (
    <div className="flex justify-between items-center border-b py-3 ">
      <div>
        <p className="font-medium text-[#1E1E2F]">{name}</p>
        <p className="text-sm text-gray-500">{date}</p>
      </div>
      <div className="flex items-center space-x-4">
        <span className="font-bold text-[#1E1E2F]">{amount}</span>
        <span
          className={`px-3 py-1 rounded-full text-xs ${
            status === "Income" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
          }`}
        >
          {status}
        </span>
      </div>
    </div>
  );
}
