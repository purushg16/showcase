import { useParams } from "react-router-dom";

type ProjectTypes = "web" | "python" | "flutter";

const SingleTypeProjects = () => {
  const params = useParams().projectType as ProjectTypes;

  return <div>SingleTypeProjects </div>;
};

export default SingleTypeProjects;
