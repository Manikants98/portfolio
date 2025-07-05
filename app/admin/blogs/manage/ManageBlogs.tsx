'use client';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { useFormik } from 'formik';
import { Editor } from '@tinymce/tinymce-react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function ManageBlogs({
  openDialog,
  handleCloseDialog,
  currentBlog,
  editorRef,
}: {
  openDialog: boolean;
  handleCloseDialog: () => void;
  currentBlog: any;
  editorRef: any;
}) {
  const queryClient = useQueryClient();
  const createBlogMutation = useMutation({
    mutationFn: async (blogData: any) => {
      const response = await fetch('/api/blogs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(blogData),
      });
      if (!response.ok) throw new Error('Failed to create blog');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blogs'] });
      handleCloseDialog();
    },
  });

  const updateBlogMutation = useMutation({
    mutationFn: async ({ id, data }: { id: string; data: any }) => {
      const response = await fetch(`/api/blogs/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error('Failed to update blog');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blogs'] });
      handleCloseDialog();
    },
  });
  const formik = useFormik({
    initialValues: {
      title: '',
      content: '',
      category: '',
      status: 'DRAFT' as 'PUBLISHED' | 'DRAFT',
    },
    onSubmit: values => {
      if (currentBlog) {
        updateBlogMutation.mutate({ id: currentBlog.id, data: values });
      } else {
        createBlogMutation.mutate(values);
      }
    },
  });

  const handleEditorContent = (content: string) => {
    formik.setFieldValue('content', content);
  };

  return (
    <Dialog
      PaperProps={{ className: '!bg-white dark:!bg-gray-900', elevation: 0 }}
      open={openDialog}
      onClose={handleCloseDialog}
      maxWidth="md"
      fullWidth
    >
      <DialogTitle>{currentBlog ? 'Edit Blog' : 'Create New Blog'}</DialogTitle>
      <DialogContent>
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-5">
          <TextField
            required
            fullWidth
            id="title"
            label="Title"
            name="title"
            size="small"
            value={formik.values.title}
            onChange={formik.handleChange}
          />
          <TextField
            required
            fullWidth
            id="category"
            label="Category"
            name="category"
            size="small"
            value={formik.values.category}
            onChange={formik.handleChange}
          />

          <Editor
            apiKey="s38zt1n4g73f25p3ohjdwddcwsgs238939vhonhjq6bcmqot"
            onInit={(_evt: any, editor: any) => {
              (editorRef as React.MutableRefObject<any>).current = editor;
            }}
            value={formik.values.content}
            onEditorChange={handleEditorContent}
            init={{
              height: 500,
              branding: false,
              menubar: false,
              outline: false,
              skin: window.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'oxide-dark'
                : 'oxide',
              content_style: 'body { outline: none; }',
              content_css: window.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'dark'
                : 'default',
            }}
          />
          <FormControl fullWidth>
            <InputLabel id="status-label">Status</InputLabel>
            <Select
              labelId="status-label"
              id="status"
              name="status"
              size="small"
              value={formik.values.status}
              label="Status"
              onChange={formik.handleChange}
            >
              <MenuItem value="DRAFT">Draft</MenuItem>
              <MenuItem value="PUBLISHED">Published</MenuItem>
            </Select>
          </FormControl>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseDialog}>Cancel</Button>
        <Button
          onClick={() => formik.handleSubmit()}
          variant="contained"
          color="primary"
          disabled={createBlogMutation.isPending || updateBlogMutation.isPending}
        >
          {createBlogMutation.isPending || updateBlogMutation.isPending ? 'Saving...' : 'Save'}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
