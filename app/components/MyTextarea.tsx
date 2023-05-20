import { Controller, useForm } from "react-hook-form";
import { RichTextarea } from "rich-textarea";
import Highlighter from "react-highlight-words";

export default function MyTextarea() {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {textarea: "",}
  });

  const style = { padding: ".5rem"};

  return (
    <div className="textareaWrapper">
        <form onSubmit={handleSubmit((data) => {console.log(data)})}>

            <label htmlFor="textarea">Add your notes here:</label>

            <Controller
            control={control}
            name="textarea"
            rules={{required: true}}
            render={({
                field: { onChange, onBlur, value, name, ref}
            }) => (
                <RichTextarea 
                    aria-invalid={errors.textarea ? "true" : "false"}
                    value={value}
                    style={style}
                    placeholder="notes"
                    name={name}
                    onChange={onChange}
                    onBlur={onBlur}
                    ref={ref}
                >
                    {(v) => {
                    return v.split("").map((t, i) => (
                        <span key={i} style={{ color: i % 2 === 0 ? "red" : undefined }}>
                        {t}
                        </span>
                    ));
                }}
                </RichTextarea>)
                    
                }
            />
            <input type="submit" />
        </form>
    </div>
  );
}
