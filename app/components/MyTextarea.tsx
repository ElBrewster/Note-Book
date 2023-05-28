import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { RichTextarea } from "rich-textarea";
// import Highlighter from "react-highlight-words";

// interface MyData {
//   type: string;
//   prevState: null;
// }

export default function MyTextarea() {
  const [myText, setMyText] = useState();

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

  console.log({myText})

  return (
    <div className="textareaWrapper">
        <form onSubmit={handleSubmit((data) => setMyText(data))}>

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
                    placeholder="content"
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
