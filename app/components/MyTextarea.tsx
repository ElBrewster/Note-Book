import { Controller, useForm } from "react-hook-form";

export default function MyTextarea() {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm({});

  return (
    <div className="textareaWrapper">
        <form onSubmit={handleSubmit((data) => {console.log(data)})}>
            <label htmlFor="textarea">Add your notes here:</label>
            <Controller
            control={control}
            name="textarea"
            rules={{required: true}}
            render={({
                field: {}
            }) => (
                <p></p>
            )}
            />
            <input type="submit" />
        </form>
    </div>
  );
}
