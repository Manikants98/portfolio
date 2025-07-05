import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const [blogsCount, contributionsCount, skillsCount, projectsCount] = await Promise.all([
      prisma.blog.count(),
      prisma.contribution.count(),
      prisma.skill.count(),
      prisma.project.count(),
    ]);

    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

    const monthlyData = await Promise.all([
      prisma.blog.groupBy({
        by: ['created_at'],
        _count: true,
        where: {
          created_at: {
            gte: sixMonthsAgo,
          },
        },
      }),
      prisma.contribution.groupBy({
        by: ['created_at'],
        _count: true,
        where: {
          created_at: {
            gte: sixMonthsAgo,
          },
        },
      }),
      prisma.skill.groupBy({
        by: ['created_at'],
        _count: true,
        where: {
          created_at: {
            gte: sixMonthsAgo,
          },
        },
      }),
      prisma.project.groupBy({
        by: ['created_at'],
        _count: true,
        where: {
          created_at: {
            gte: sixMonthsAgo,
          },
        },
      }),
    ]);

    const months = Array.from({ length: 6 }, (_, i) => {
      const date = new Date();
      date.setMonth(date.getMonth() - i);
      return date.toISOString().slice(0, 7);
    }).reverse();

    const processMonthlyData = (data: any[]) => {
      const counts = new Array(6).fill(0);
      data.forEach(item => {
        const month = new Date(item.created_at).toISOString().slice(0, 7);
        const index = months.indexOf(month);
        if (index !== -1) {
          counts[index] = item._count;
        }
      });
      return counts;
    };

    const [blogsByMonth, contributionsByMonth, skillsByMonth, projectsByMonth] =
      monthlyData.map(processMonthlyData);

    const [blogCategories, skillCategories, projectCategories] = await Promise.all([
      prisma.blog.groupBy({
        by: ['category'],
        _count: true,
      }),
      prisma.skill.groupBy({
        by: ['category'],
        _count: true,
      }),
      prisma.project.groupBy({
        by: ['category'],
        _count: true,
      }),
    ]);

    return NextResponse.json({
      counts: {
        blogs: blogsCount,
        contributions: contributionsCount,
        skills: skillsCount,
        projects: projectsCount,
      },
      monthlyData: {
        months,
        blogs: blogsByMonth,
        contributions: contributionsByMonth,
        skills: skillsByMonth,
        projects: projectsByMonth,
      },
      categories: {
        blogs: blogCategories.map(cat => ({
          label: cat.category,
          value: cat._count,
        })),
        skills: skillCategories.map(cat => ({
          label: cat.category,
          value: cat._count,
        })),
        projects: projectCategories.map(cat => ({
          label: cat.category,
          value: cat._count,
        })),
      },
    });
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    return NextResponse.json({ error: 'Failed to fetch dashboard data' }, { status: 500 });
  }
}
