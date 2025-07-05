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

interface Skill {
  id: string;
  title: string;
  category: string;
  description: string;
  level: string;
  created_at: string;
  updated_at: string;
  status: 'PUBLISHED' | 'DRAFT';
}

const Skills: React.FC = () => {
  const [page, setPage] = useState(0);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [openDialog, setOpenDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error',
  });
  const [currentSkill, setCurrentSkill] = useState<Skill | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    level: '',
    status: 'DRAFT' as 'PUBLISHED' | 'DRAFT',
  });

  const rowsPerPage = 5;

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/skills');
      if (!response.ok) throw new Error('Failed to fetch skills');

      const data = await response.json();
      setSkills(data);
    } catch (error) {
      console.error('Error fetching skills:', error);
      setError('Failed to load skills. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleOpenDialog = (skill?: Skill) => {
    if (skill) {
      setCurrentSkill(skill);
      setFormData({
        title: skill.title,
        category: skill.category,
        description: skill.description,
        level: skill.level,
        status: skill.status,
      });
    } else {
      setCurrentSkill(null);
      setFormData({
        title: '',
        category: '',
        description: '',
        level: '',
        status: 'DRAFT',
      });
    }
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleOpenDeleteDialog = (skill: Skill) => {
    setCurrentSkill(skill);
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

  const handleSaveSkill = async () => {
    try {
      let response;
      if (currentSkill) {
        response = await fetch(`/api/skills/${currentSkill.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
      } else {
        response = await fetch('/api/skills', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
      }

      if (!response.ok) {
        throw new Error('Failed to save skill');
      }

      setSnackbar({
        open: true,
        message: currentSkill ? 'Skill updated successfully!' : 'Skill created successfully!',
        severity: 'success',
      });

      fetchSkills();
      handleCloseDialog();
    } catch (error) {
      console.error('Error saving skill:', error);
      setSnackbar({
        open: true,
        message: 'Failed to save skill. Please try again.',
        severity: 'error',
      });
    }
  };

  const handleDeleteSkill = async () => {
    if (!currentSkill) return;

    try {
      const response = await fetch(`/api/skills/${currentSkill.id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete skill');
      }

      setSnackbar({
        open: true,
        message: 'Skill deleted successfully!',
        severity: 'success',
      });

      fetchSkills();
      handleCloseDeleteDialog();
    } catch (error) {
      console.error('Error deleting skill:', error);
      setSnackbar({
        open: true,
        message: 'Failed to delete skill. Please try again.',
        severity: 'error',
      });
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const displayedSkills = skills.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

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
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Level</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Created At</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Updated At</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Status</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[...Array(5)].map((_, index) => (
                <TableRow key={index}>
                  {Array.from({ length: 6 }).map((_, index) => (
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
          Manage Skills
        </Typography>
        <Button variant="contained" color="primary" onClick={() => handleOpenDialog()}>
          Add New Skill
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead sx={{ backgroundColor: 'primary.main' }}>
            <TableRow>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Title</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Category</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Level</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Created At</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Updated At</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Status</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {displayedSkills.map(skill => (
              <TableRow key={skill.id} hover>
                <TableCell className="!bg-white dark:!bg-gray-900">{skill.title}</TableCell>
                <TableCell className="!bg-white dark:!bg-gray-900">{skill.category}</TableCell>
                <TableCell className="!bg-white dark:!bg-gray-900">{skill.level}</TableCell>
                <TableCell className="!bg-white dark:!bg-gray-900">
                  {new Date(skill.created_at).toLocaleDateString()}
                </TableCell>
                <TableCell className="!bg-white dark:!bg-gray-900">
                  {new Date(skill.updated_at).toLocaleDateString()}
                </TableCell>
                <TableCell className="!bg-white dark:!bg-gray-900">
                  <span
                    className={`rounded-full px-2 py-1 text-xs ${
                      skill.status === 'PUBLISHED'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {skill.status}
                  </span>
                </TableCell>
                <TableCell className="!bg-white dark:!bg-gray-900">
                  <IconButton size="small" color="primary" onClick={() => handleOpenDialog(skill)}>
                    <EditIcon fontSize="small" />
                  </IconButton>
                  <IconButton
                    size="small"
                    color="error"
                    onClick={() => handleOpenDeleteDialog(skill)}
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
          count={skills.length}
          rowsPerPage={rowsPerPage}
          page={page}
          className="!bg-white !text-black dark:!bg-gray-900 dark:!text-white"
          onPageChange={handleChangePage}
        />
      </TableContainer>

      {/* Skill Form Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="md" fullWidth>
        <DialogTitle>{currentSkill ? 'Edit Skill' : 'Create New Skill'}</DialogTitle>
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
              id="level"
              label="Level"
              name="level"
              value={formData.level}
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
          <Button onClick={handleSaveSkill} variant="contained" color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={openDeleteDialog} onClose={handleCloseDeleteDialog}>
        <DialogTitle>Delete Skill</DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to delete &quot;{currentSkill?.title}&quot;? This action cannot be
            undone.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDeleteDialog}>Cancel</Button>
          <Button onClick={handleDeleteSkill} variant="contained" color="error">
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

export default Skills;
