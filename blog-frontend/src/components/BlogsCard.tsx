import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  IconButton,
  Typography,
} from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";

// Define TypeScript props interface
interface BlogCardProps {
  title: string;
  content: string;
  onEdit: () => void;
  onDelete: () => void;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  content,
  onEdit,
  onDelete,
}) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton color="primary" onClick={onEdit}>
          <EditIcon />
        </IconButton>
        <IconButton color="error" onClick={onDelete}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default BlogCard;
