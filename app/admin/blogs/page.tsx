'use client';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {
  Button,
  Dialog,
  IconButton,
  Paper,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from '@mui/material';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Editor } from '@tinymce/tinymce-react';
import React, { useRef, useState } from 'react';
import ManageBlogs from './manage/page';

interface Blog {
  id: string;
  title: string;
  category: string;
  content: string;
  created_at: string;
  updated_at: string;
  status: 'PUBLISHED' | 'DRAFT';
  views: number;
}

const Blogs: React.FC = () => {
  const [page, setPage] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [currentBlog, setCurrentBlog] = useState<Blog | null>(null);
  const queryClient = useQueryClient();
  const editorRef = useRef<Editor>(null);

  const fetchBlogs = async () => {
    const response = await fetch(`/api/blogs?page=${page}`);
    if (!response.ok) throw new Error('Failed to fetch blogs');
    return response.json();
  };

  const {
    data: blogs,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['blogs', page],
    queryFn: fetchBlogs,
  });

  const deleteBlogMutation = useMutation({
    mutationFn: async (id: string) => {
      const response = await fetch(`/api/blogs/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete blog');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blogs'] });
      handleCloseDeleteDialog();
    },
  });

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleOpenDeleteDialog = (blog: Blog) => {
    setCurrentBlog(blog);
    setOpenDeleteDialog(true);
  };

  const handleCloseDeleteDialog = () => {
    setOpenDeleteDialog(false);
  };

  const handleDeleteBlog = async () => {
    if (!currentBlog) return;
    deleteBlogMutation.mutate(currentBlog.id);
  };

  if (isLoading) {
    return (
      <div className="p-6">
        <div className="mb-3 flex items-center justify-between">
          <Skeleton variant="text" width={200} height={40} />
          <Skeleton variant="rectangular" width={120} height={36} />
        </div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }}>
            <TableHead sx={{ backgroundColor: 'primary.main' }}>
              <TableRow>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Title</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Category</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Created At</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Updated At</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Status</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Views</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[...Array(8)].map((_, index) => (
                <TableRow key={index}>
                  {Array.from({ length: 6 }).map((_, index) => (
                    <TableCell key={index} className="!bg-white !py-3 dark:!bg-gray-900">
                      <Skeleton variant="text" />
                    </TableCell>
                  ))}
                  <TableCell className="!bg-white !py-3 dark:!bg-gray-900">
                    <div className="flex gap-1">
                      <Skeleton variant="circular" width={24} height={24} />
                      <Skeleton variant="circular" width={24} height={24} />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <TablePagination
            component="div"
            count={0}
            page={page}
            rowsPerPage={10}
            className="!bg-white !text-black dark:!bg-gray-900 dark:!text-white"
            onPageChange={() => {}}
          />
        </TableContainer>
      </div>
    );
  }
  if (error) return <div className="p-6 text-red-500">{(error as Error).message}</div>;

  return (
    <div className="p-6">
      <div className="mb-3 flex items-center justify-between">
        <Typography variant="h5" component="h1" fontWeight="bold">
          Manage Blogs
        </Typography>
        <Button variant="contained" color="primary" onClick={() => setOpenDialog(true)}>
          Add New Blog
        </Button>
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead sx={{ backgroundColor: 'primary.main' }}>
            <TableRow>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Title</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Category</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Created At</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Updated At</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Status</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Views</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {blogs.map((blog: Blog) => (
              <TableRow key={blog.id} hover>
                <TableCell className="!bg-white !py-3 dark:!bg-gray-900">{blog.title}</TableCell>
                <TableCell className="!bg-white !py-3 dark:!bg-gray-900">{blog.category}</TableCell>
                <TableCell className="!bg-white !py-3 dark:!bg-gray-900">
                  {new Date(blog.created_at).toLocaleDateString()}
                </TableCell>
                <TableCell className="!bg-white !py-3 dark:!bg-gray-900">
                  {new Date(blog.updated_at).toLocaleDateString()}
                </TableCell>
                <TableCell className="!bg-white !py-3 dark:!bg-gray-900">
                  <span
                    className={`rounded-full px-2 py-1 text-xs ${
                      blog.status === 'PUBLISHED'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {blog.status}
                  </span>
                </TableCell>
                <TableCell className="!bg-white !py-3 dark:!bg-gray-900">{blog.views}</TableCell>
                <TableCell className="!bg-white !py-3 dark:!bg-gray-900">
                  <IconButton size="small" color="primary" onClick={() => setCurrentBlog(blog)}>
                    <EditIcon fontSize="small" />
                  </IconButton>
                  <IconButton
                    size="small"
                    color="error"
                    onClick={() => handleOpenDeleteDialog(blog)}
                  >
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          component="div"
          count={blogs?.length || 0}
          rowsPerPage={10}
          page={page}
          className="!bg-white !text-black dark:!bg-gray-900 dark:!text-white"
          onPageChange={handleChangePage}
          rowsPerPageOptions={[10]}
        />
      </TableContainer>

      <Dialog open={openDeleteDialog} onClose={handleCloseDeleteDialog}>
        <div className="p-6">
          <h2 className="mb-4 text-xl font-semibold">Delete Blog</h2>
          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300">
              Are you sure you want to delete &quot;{currentBlog?.title}&quot;? This action cannot
              be undone.
            </p>
          </div>
          <div className="flex justify-end gap-3">
            <button
              onClick={handleCloseDeleteDialog}
              className="rounded px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              Cancel
            </button>
            <button
              onClick={handleDeleteBlog}
              className={`rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700 ${
                deleteBlogMutation.isPending ? 'cursor-not-allowed opacity-70' : ''
              }`}
              disabled={deleteBlogMutation.isPending}
            >
              {deleteBlogMutation.isPending ? 'Deleting...' : 'Delete'}
            </button>
          </div>
        </div>
      </Dialog>

      <ManageBlogs
        openDialog={openDialog}
        handleCloseDialog={() => setOpenDialog(false)}
        currentBlog={currentBlog}
        editorRef={editorRef}
      />
    </div>
  );
};

export default Blogs;
