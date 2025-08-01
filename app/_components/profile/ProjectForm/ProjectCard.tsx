import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Project } from "@/types/userData";
import { Edit, Trash2 } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  onEdit: () => void;
  onDelete: () => void;
}

const ProjectCard = ({ project, onEdit, onDelete }: ProjectCardProps) => {
  return (
    <Card className="h-full flex flex-col hover:shadow-md transition-shadow">
      {/* Project Content */}
      <CardHeader>
        <div className="flex flex-col">
          <CardTitle className="text-xl">{project.projectName}</CardTitle>
          {project.date && <CardDescription>{project.date}</CardDescription>}
        </div>
      </CardHeader>

      <CardContent className="flex-1">
        <CardDescription className="line-clamp-2 sr-only">
          {project.description}
        </CardDescription>
      </CardContent>

      <CardFooter className="flex flex-col items-start gap-3 pt-0">
        <div className="flex gap-2 w-full">
          <Button variant="outline" onClick={onEdit}>
            <Edit className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            className="text-destructive hover:text-destructive"
            onClick={onDelete}
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
export default ProjectCard;
