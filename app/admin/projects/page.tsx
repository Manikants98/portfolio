'use client';
import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  IconButton,
  Typography,
  Box,
  TablePagination,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Snackbar,
  Alert,
  SelectChangeEvent,
  Skeleton,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  created_at: string;
  updated_at: string;
  status: 'PUBLISHED' | 'DRAFT';
}

const Projects: React.FC = () => {
  const [page, setPage] = useState(0);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [openDialog, setOpenDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error',
  });
  const [currentProject, setCurrentProject] = useState<Project | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    status: 'DRAFT' as 'PUBLISHED' | 'DRAFT',
  });

  const rowsPerPage = 5;

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/projects');
      if (!response.ok) throw new Error('Failed to fetch projects');

      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.error('Error fetching projects:', error);
      setError('Failed to load projects. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleOpenDialog = (project?: Project) => {
    if (project) {
      setCurrentProject(project);
      setFormData({
        title: project.title,
        category: project.category,
        description: project.description,
        status: project.status,
      });
    } else {
      setCurrentProject(null);
      setFormData({
        title: '',
        category: '',
        description: '',
        status: 'DRAFT',
      });
    }
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleOpenDeleteDialog = (project: Project) => {
    setCurrentProject(project);
    setOpenDeleteDialog(true);
  };

  const handleCloseDeleteDialog = () => {
    setOpenDeleteDialog(false);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelectChange = (e: SelectChangeEvent) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value as 'PUBLISHED' | 'DRAFT',
    });
  };

  const handleSaveProject = async () => {
    try {
      let response;
      if (currentProject) {
        response = await fetch(`/api/projects/${currentProject.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
      } else {
        response = await fetch('/api/projects', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
      }

      if (!response.ok) {
        throw new Error('Failed to save project');
      }

      setSnackbar({
        open: true,
        message: currentProject ? 'Project updated successfully!' : 'Project created successfully!',
        severity: 'success',
      });

      fetchProjects();
      handleCloseDialog();
    } catch (error) {
      console.error('Error saving project:', error);
      setSnackbar({
        open: true,
        message: 'Failed to save project. Please try again.',
        severity: 'error',
      });
    }
  };

  const handleDeleteProject = async () => {
    if (!currentProject) return;

    try {
      const response = await fetch(`/api/projects/${currentProject.id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete project');
      }

      setSnackbar({
        open: true,
        message: 'Project deleted successfully!',
        severity: 'success',
      });

      fetchProjects();
      handleCloseDeleteDialog();
    } catch (error) {
      console.error('Error deleting project:', error);
      setSnackbar({
        open: true,
        message: 'Failed to delete project. Please try again.',
        severity: 'error',
      });
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const displayedProjects = projects.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  if (loading) {
    return (
      <div className="p-6">
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
          <Skeleton variant="text" width={200} height={40} />
          <Skeleton variant="rectangular" width={120} height={36} />
        </Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }}>
            <TableHead sx={{ backgroundColor: 'primary.main' }}>
              <TableRow>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Title</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Category</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Created At</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Updated At</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Status</TableCell>
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

  if (error) return <div className="p-6 text-red-500">{error}</div>;

  return (
    <div className="p-6">
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h5" component="h1" fontWeight="bold">
          Manage Projects
        </Typography>
        <Button variant="contained" color="primary" onClick={() => handleOpenDialog()}>
          Add New Project
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead sx={{ backgroundColor: 'primary.main' }}>
            <TableRow>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Title</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Category</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Created At</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Updated At</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Status</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {displayedProjects.map(project => (
              <TableRow key={project.id} hover>
                <TableCell className="!bg-white dark:!bg-gray-900">{project.title}</TableCell>
                <TableCell className="!bg-white dark:!bg-gray-900">{project.category}</TableCell>
                <TableCell className="!bg-white dark:!bg-gray-900">
                  {new Date(project.created_at).toLocaleDateString()}
                </TableCell>
                <TableCell className="!bg-white dark:!bg-gray-900">
                  {new Date(project.updated_at).toLocaleDateString()}
                </TableCell>
                <TableCell className="!bg-white dark:!bg-gray-900">
                  <span
                    className={`rounded-full px-2 py-1 text-xs ${
                      project.status === 'PUBLISHED'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {project.status}
                  </span>
                </TableCell>
                <TableCell className="!bg-white dark:!bg-gray-900">
                  <IconButton
                    size="small"
                    color="primary"
                    onClick={() => handleOpenDialog(project)}
                  >
                    <EditIcon fontSize="small" />
                  </IconButton>
                  <IconButton
                    size="small"
                    color="error"
                    onClick={() => handleOpenDeleteDialog(project)}
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
          count={projects.length}
          rowsPerPage={rowsPerPage}
          page={page}
          className="!bg-white !text-black dark:!bg-gray-900 dark:!text-white"
          onPageChange={handleChangePage}
        />
      </TableContainer>

      {/* Project Form Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="md" fullWidth>
        <DialogTitle>{currentProject ? 'Edit Project' : 'Create New Project'}</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ mt: 2 }} noValidate>
            <TextField
              margin="normal"
              required
              fullWidth
              id="title"
              label="Title"
              name="title"
              value={formData.title}
              onChange={handleTextChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="category"
              label="Category"
              name="category"
              value={formData.category}
              onChange={handleTextChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              multiline
              rows={4}
              id="description"
              label="Description"
              name="description"
              value={formData.description}
              onChange={handleTextChange}
            />
            <FormControl fullWidth margin="normal">
              <InputLabel id="status-label">Status</InputLabel>
              <Select
                labelId="status-label"
                id="status"
                name="status"
                value={formData.status}
                label="Status"
                onChange={handleSelectChange}
              >
                <MenuItem value="DRAFT">Draft</MenuItem>
                <MenuItem value="PUBLISHED">Published</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleSaveProject} variant="contained" color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={openDeleteDialog} onClose={handleCloseDeleteDialog}>
        <DialogTitle>Delete Project</DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to delete &quot;{currentProject?.title}&quot;? This action cannot
            be undone.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDeleteDialog}>Cancel</Button>
          <Button onClick={handleDeleteProject} variant="contained" color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar for notifications */}
      <Snackbar open={snackbar.open} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Projects;
