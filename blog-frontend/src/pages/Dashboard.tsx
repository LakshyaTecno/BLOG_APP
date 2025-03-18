import React, { useState } from "react";
import {
  Container,
  Button,
  Typography,
  Pagination,
  Box,
  Stack,
} from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import BlogCard from "../components/BlogsCard";

// Define TypeScript type for a blog post
interface Blog {
  id: number;
  title: string;
  content: string;
}

// Generate 28 blogs dynamically
const allBlogs: Blog[] = Array.from({ length: 28 }, (_, i) => ({
  id: i + 1,
  title: `Blog ${i + 1}`,
  content: `This is the content of blog ${i + 1}.`,
}));

const Dashboard: React.FC = () => {
  const [page, setPage] = useState(1);
  const blogsPerPage = 6;

  // Calculate start and end index for current page
  const startIndex = (page - 1) * blogsPerPage;
  const endIndex = startIndex + blogsPerPage;
  const paginatedBlogs = allBlogs.slice(startIndex, endIndex);

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  const handleCreateBlog = () => {
    console.log("Create New Blog Clicked");
  };

  return (
    <Container maxWidth="md">
      {/* Main Heading */}
      <Typography
        variant="h4"
        component="h1"
        sx={{ mt: 4, mb: 3, textAlign: "center", fontWeight: "bold" }}
      >
        Welcome to the Blog Single Page App
      </Typography>

      {/* Create Blog Button */}
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        onClick={handleCreateBlog}
        sx={{ display: "block", mx: "auto", mb: 3 }}
      >
        Create New Blog
      </Button>

      {/* Blog List - Two Columns Per Row */}
      <Stack spacing={3}>
        {paginatedBlogs.map((blog, index) =>
          index % 2 === 0 ? (
            <Box
              key={blog.id}
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              {/* First Card */}
              <BlogCard
                title={blog.title}
                content={blog.content}
                onEdit={() => {}}
                onDelete={() => {}}
              />

              {/* Second Card (Only if there is another blog available) */}
              {paginatedBlogs[index + 1] && (
                <BlogCard
                  title={paginatedBlogs[index + 1]?.title}
                  content={paginatedBlogs[index + 1]?.content}
                  onEdit={() => {}}
                  onDelete={() => {}}
                />
              )}
            </Box>
          ) : null
        )}
      </Stack>

      {/* Pagination Controls */}
      <Pagination
        count={Math.ceil(allBlogs.length / blogsPerPage)}
        page={page}
        onChange={handleChangePage}
        sx={{ display: "flex", justifyContent: "center", mt: 4 }}
      />
    </Container>
  );
};

export default Dashboard;
