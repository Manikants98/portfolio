'use client';
import { useEffect, useState } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
import { LineChart } from '@mui/x-charts/LineChart';
import { Skeleton } from '@mui/material';

interface DashboardData {
  counts: {
    blogs: number;
    contributions: number;
    skills: number;
    projects: number;
  };
  monthlyData: {
    months: string[];
    blogs: number[];
    contributions: number[];
    skills: number[];
    projects: number[];
  };
  categories: {
    blogs: { label: string; value: number }[];
    skills: { label: string; value: number }[];
    projects: { label: string; value: number }[];
  };
}

export default function AdminPage() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await fetch('/api/dashboard');
        if (!response.ok) {
          throw new Error('Failed to fetch dashboard data');
        }
        const dashboardData = await response.json();
        setData(dashboardData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch dashboard data');
        console.error('Error fetching dashboard data:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchDashboardData();
  }, []);

  if (loading) {
    return (
      <div className="flex h-[calc(100vh-12px)] flex-col overflow-y-auto">
        <div className="grid gap-1 lg:grid-cols-2">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="rounded-lg bg-white p-4 dark:bg-gray-900">
              <Skeleton variant="text" width={200} height={32} className="mb-4" />
              <Skeleton variant="rectangular" height={270} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-[calc(100vh-12px)] items-center justify-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (!data) return null;

  const pieChartData = [
    { id: 0, value: data.counts.blogs, label: 'Blogs', color: '#069110' },
    { id: 1, value: data.counts.contributions, label: 'Contributions', color: '#4CAF50' },
    { id: 2, value: data.counts.skills, label: 'Skills', color: '#8BC34A' },
    { id: 3, value: data.counts.projects, label: 'Projects', color: '#CDDC39' },
  ];

  const barChartData = {
    xAxis: [{ data: data.monthlyData.months, scaleType: 'band' }],
    series: [
      { data: data.monthlyData.blogs, label: 'Blogs', color: '#069110' },
      { data: data.monthlyData.contributions, label: 'Contributions', color: '#4CAF50' },
    ],
  };

  const lineChartData = {
    xAxis: [{ data: data.monthlyData.months, scaleType: 'point' }],
    series: [
      { data: data.monthlyData.skills, label: 'Skills Growth', color: '#069110' },
      { data: data.monthlyData.projects, label: 'Projects Growth', color: '#4CAF50' },
    ],
  };

  const categoryPieChartData = [
    ...data.categories.blogs.slice(0, 3).map((cat, index) => ({
      id: index,
      value: cat.value,
      label: `Blog: ${cat.label}`,
      color: `hsl(${(index * 360) / data.categories.blogs.length}, 70%, 50%)`,
    })),
    ...data.categories.skills.slice(0, 3).map((cat, index) => ({
      id: index + data.categories.blogs.length,
      value: cat.value,
      label: `Skill: ${cat.label}`,
      color: `hsl(${(index * 360) / data.categories.skills.length}, 70%, 50%)`,
    })),
    ...data.categories.projects.slice(0, 3).map((cat, index) => ({
      id: index + data.categories.blogs.length + data.categories.skills.length,
      value: cat.value,
      label: `Project: ${cat.label}`,
      color: `hsl(${(index * 360) / data.categories.projects.length}, 70%, 50%)`,
    })),
  ];

  return (
    <div className="flex h-[calc(100vh-12px)] flex-col overflow-y-auto">
      <div className="grid gap-1 lg:grid-cols-2">
        <div className="rounded-lg bg-white p-4 dark:bg-gray-900">
          <p className="mb-4 text-start font-bold">Content Distribution</p>
          <div className="h-[39.7vh]">
            <PieChart
              series={[
                {
                  data: pieChartData,
                  highlightScope: { fade: 'global', highlight: 'item' },
                  faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                },
              ]}
              height={270}
            />
          </div>
        </div>

        <div className="rounded-lg bg-white p-4 dark:bg-gray-900">
          <p className="mb-4 text-start font-bold">Content Growth by Month</p>
          <div className="h-[39.7vh]">
            <BarChart xAxis={barChartData.xAxis as any} series={barChartData.series} height={250} />
          </div>
        </div>

        <div className="rounded-lg bg-white p-4 dark:bg-gray-900">
          <p className="mb-4 text-start font-bold">Skills & Projects Growth</p>
          <div className="h-[39.7vh]">
            <LineChart
              xAxis={lineChartData.xAxis as any}
              series={lineChartData.series}
              height={270}
            />
          </div>
        </div>

        <div className="rounded-lg bg-white p-4 dark:bg-gray-900">
          <p className="mb-4 text-start font-bold">Content Category Breakdown</p>
          <div className="h-[39.7vh]">
            <PieChart
              series={[
                {
                  data: categoryPieChartData,
                  innerRadius: 60,
                  outerRadius: 100,
                  paddingAngle: 2,
                  cornerRadius: 5,
                },
              ]}
              height={270}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
