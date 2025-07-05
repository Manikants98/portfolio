'use client';

import { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  TablePagination,
  Skeleton,
  Tooltip,
} from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';

interface Contribution {
  id: string;
  title: string;
  description: string;
  author: string;
  created_at: string;
  updated_at: string;
}

export default function Contributions() {
  const [contributions, setContributions] = useState<Contribution[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [editingContribution, setEditingContribution] = useState<Contribution | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
  });
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const fetchContributions = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/contributions');
      if (!response.ok) {
        throw new Error('Failed to fetch contributions');
      }
      const data = await response.json();
      setContributions(data);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch contributions');
      console.error('Error fetching contributions:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContributions();
  }, []);

  const handleOpen = (contribution?: Contribution) => {
    if (contribution) {
      setEditingContribution(contribution);
      setFormData({
        title: contribution.title,
        description: contribution.description,
      });
    } else {
      setEditingContribution(null);
      setFormData({
        title: '',
        description: '',
      });
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditingContribution(null);
    setFormData({
      title: '',
      description: '',
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const url = editingContribution
        ? `/api/contributions/${editingContribution.id}`
        : '/api/contributions';
      const method = editingContribution ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to save contribution');
      }

      handleClose();
      fetchContributions();
    } catch (err) {
      console.error('Error saving contribution:', err);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this contribution?')) {
      return;
    }

    try {
      const response = await fetch(`/api/contributions/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete contribution');
      }

      fetchContributions();
    } catch (err) {
      console.error('Error deleting contribution:', err);
    }
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  if (loading) {
    return (
      <div className="p-6">
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
          <Skeleton variant="text" width={200} height={40} />
          <Skeleton variant="rectangular" width={120} height={36} />
        </Box>
        <TableContainer component={Paper} className="!bg-white dark:!bg-gray-900">
          <Table sx={{ minWidth: 650 }}>
            <TableHead sx={{ backgroundColor: 'primary.main' }}>
              <TableRow>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Title</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Description</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Author</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Created At</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Updated At</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[...Array(10)].map((_, index) => (
                <TableRow key={index}>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <TableCell key={index} className="!bg-white !py-3 dark:!bg-gray-900">
                      <Skeleton variant="text" />
                    </TableCell>
                  ))}
                  <TableCell className="!bg-white !py-3 dark:!bg-gray-900">
                    <Box display="flex" gap={1}>
                      <Skeleton variant="circular" width={24} height={24} />
                      <Skeleton variant="circular" width={24} height={24} />
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <TablePagination
            component="div"
            count={0}
            rowsPerPage={rowsPerPage}
            page={0}
            className="!bg-white !text-black dark:!bg-gray-900 dark:!text-white"
            onPageChange={() => {}}
          />
        </TableContainer>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6">
        <Typography color="error">{error}</Typography>
      </div>
    );
  }

  return (
    <div className="p-6">
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h5" component="h1" fontWeight="bold">
          Manage Contributions
        </Typography>
        <Button variant="contained" color="primary" onClick={() => handleOpen()}>
          Add New Contribution
        </Button>
      </Box>

      <TableContainer component={Paper} className="!bg-white dark:!bg-gray-900">
        <Table>
          <TableHead sx={{ backgroundColor: 'primary.main' }}>
            <TableRow>
              <TableCell className="font-bold !text-black dark:!text-white">Title</TableCell>
              <TableCell className="font-bold !text-black dark:!text-white">Description</TableCell>
              <TableCell className="font-bold !text-black dark:!text-white">Author</TableCell>
              <TableCell className="font-bold !text-black dark:!text-white">Created At</TableCell>
              <TableCell className="font-bold !text-black dark:!text-white">Updated At</TableCell>
              <TableCell className="font-bold !text-black dark:!text-white">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contributions
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(contribution => (
                <TableRow key={contribution.id} hover>
                  <TableCell className="!bg-white dark:!bg-gray-900">
                    {contribution.title}
                  </TableCell>
                  <TableCell className="!bg-white dark:!bg-gray-900">
                    <Tooltip title={contribution.description} placement="top" arrow>
                      <div className="w-52 truncate">{contribution.description}</div>
                    </Tooltip>
                  </TableCell>
                  <TableCell className="!bg-white dark:!bg-gray-900">
                    {contribution.author}
                  </TableCell>
                  <TableCell className="!bg-white dark:!bg-gray-900">
                    {new Date(contribution.created_at).toLocaleDateString()}
                  </TableCell>
                  <TableCell className="!bg-white dark:!bg-gray-900">
                    {new Date(contribution.updated_at).toLocaleDateString()}
                  </TableCell>
                  <TableCell className="!bg-white dark:!bg-gray-900">
                    <IconButton
                      size="small"
                      color="primary"
                      onClick={() => handleOpen(contribution)}
                    >
                      <EditIcon fontSize="small" />
                    </IconButton>
                    <IconButton
                      size="small"
                      color="error"
                      onClick={() => handleDelete(contribution.id)}
                    >
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={contributions.length}
          rowsPerPage={rowsPerPage}
          page={page}
          className="!bg-white !text-black dark:!bg-gray-900 dark:!text-white"
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          className: '!bg-white dark:!bg-gray-900',
        }}
      >
        <DialogTitle className="!text-black dark:!text-white">
          {editingContribution ? 'Edit Contribution' : 'Add New Contribution'}
        </DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="Title"
              fullWidth
              value={formData.title}
              onChange={e => setFormData({ ...formData, title: e.target.value })}
              required
              className="!text-black dark:!text-white"
              InputLabelProps={{
                className: '!text-black dark:!text-white',
              }}
              InputProps={{
                className: '!text-black dark:!text-white',
              }}
            />
            <TextField
              margin="dense"
              label="Description"
              fullWidth
              multiline
              rows={4}
              value={formData.description}
              onChange={e => setFormData({ ...formData, description: e.target.value })}
              required
              className="!text-black dark:!text-white"
              InputLabelProps={{
                className: '!text-black dark:!text-white',
              }}
              InputProps={{
                className: '!text-black dark:!text-white',
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} className="!text-black dark:!text-white">
              Cancel
            </Button>
            <Button type="submit" variant="contained" color="primary">
              {editingContribution ? 'Update' : 'Create'}
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
