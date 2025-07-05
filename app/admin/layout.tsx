'use client';
import { BlogIcon, ContributionIcon, DashboardIcon, ProjectIcon, SkillIcon } from '@/app/resources';
import { Avatar, ListItemButton } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import classNames from 'classnames';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { ThemeProvider } from '../components/ThemeProvider';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname() as string;
  const { data: session } = useSession();
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <ThemeProvider>
      <QueryClientProvider client={client}>
        <div className="flex h-screen w-screen text-black dark:text-white">
          <div className="!flex !w-72 !flex-col p-1 text-black dark:text-white">
            <div className="flex h-full flex-col rounded-lg bg-white dark:bg-gray-900">
              <div className="flex gap-2 border-b !border-gray-200 p-4 dark:!border-gray-900">
                <Avatar className="!bg-primary !text-white">
                  {session?.user?.name?.slice(0, 1)}
                </Avatar>
                <div className="flex flex-col">
                  <p className="font-bold">{session?.user?.name}</p>
                  <p className="text-xs">{session?.user?.role}</p>
                </div>
              </div>
              <div className="flex flex-col">
                <ListItemButton
                  className={classNames(
                    'group !flex !items-center !gap-2 !transition-all hover:!bg-primary hover:!text-white',
                    {
                      '!bg-primary !text-white': pathname === '/admin',
                    }
                  )}
                  onClick={() => router.push('/admin')}
                >
                  <DashboardIcon isSelected={pathname === '/admin'} />
                  Dashboard
                </ListItemButton>
                <ListItemButton
                  className={classNames(
                    'group !flex !items-center !gap-2 !transition-all hover:!bg-primary hover:!text-white',
                    {
                      '!bg-primary !text-white': pathname === '/admin/blogs',
                    }
                  )}
                  onClick={() => router.push('/admin/blogs')}
                >
                  <BlogIcon isSelected={pathname === '/admin/blogs'} />
                  Blogs
                </ListItemButton>
                <ListItemButton
                  className={classNames(
                    'group !flex !items-center !gap-2 !transition-all hover:!bg-primary hover:!text-white',
                    {
                      '!bg-primary !text-white': pathname === '/admin/contributions',
                    }
                  )}
                  onClick={() => router.push('/admin/contributions')}
                >
                  <ContributionIcon isSelected={pathname === '/admin/contributions'} />
                  Contributions
                </ListItemButton>
                <ListItemButton
                  className={classNames(
                    'group !flex !items-center !gap-2 !transition-all hover:!bg-primary hover:!text-white',
                    {
                      '!bg-primary !text-white': pathname === '/admin/skills',
                    }
                  )}
                  onClick={() => router.push('/admin/skills')}
                >
                  <SkillIcon isSelected={pathname === '/admin/skills'} />
                  Skills
                </ListItemButton>
                <ListItemButton
                  className={classNames(
                    'group !flex !items-center !gap-2 !transition-all hover:!bg-primary hover:!text-white',
                    {
                      '!bg-primary !text-white': pathname === '/admin/projects',
                    }
                  )}
                  onClick={() => router.push('/admin/projects')}
                >
                  <ProjectIcon isSelected={pathname === '/admin/projects'} />
                  Projects
                </ListItemButton>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col bg-gray-100 p-1 !pl-0 dark:bg-secondary">
            <div className="h-full rounded-lg">{children}</div>
          </div>
        </div>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
