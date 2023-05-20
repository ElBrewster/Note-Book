import { useForm } from "react-hook-form";

export default function MyTextarea() {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm({});
  return <div className="textareaWrapper"></div>;
}
