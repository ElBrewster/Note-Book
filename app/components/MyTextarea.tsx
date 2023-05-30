import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { RichTextarea } from "rich-textarea";

type MyTextareaProps = {
  setRichFormData: Function;
}
type MyRichFormData = {
  richFormData: { title: string, category: string, body: string };
}
const initialTitle = { title: ""};
const initialCateogry = { category: ""};
const initialTextArea = { body: ""};

export default function MyTextarea({setRichFormData}: MyTextareaProps, {richFormData}: MyRichFormData) {
  const [myTitle, setMyTitle] = useState(initialTitle);
  const [myCategory, setMyCategory] = useState(initialCateogry);
  const [myText, setMyText] = useState(initialTextArea);
  const { register, resetField, handleSubmit, control, formState: { errors }, } = useForm({
    defaultValues: { title: "", category: "", body: "" },
  });

  // const style = { padding: ".5rem", margin: ".2rem", color: "red"};

  function onSubmit(data) {
    let {title, category, body} = data;
    setMyTitle(title);
    setMyCategory(category);
    setMyText(body);

    setRichFormData(() => ({
      title: title,
      category: category,
      body: body, 
    }));

    resetField("title");
    resetField("category");
    resetField("body");
  }

  return (
    <div className="textareaWrapper">
      <form onSubmit={handleSubmit(onSubmit)} className="componentForm">
        <input placeholder="title" {...register("title")} />
        <input placeholder="category" {...register("category")} />
        
        <label htmlFor="body" className="labelForBody">Add your notes here:</label>

            <Controller
            control={control}
            name="body"
            rules={{required: true}}
            render={({
                field: { onChange, onBlur, value, name, ref}
            }) => (
                <RichTextarea 
                    aria-invalid={errors.body ? "true" : "false"}
                    value={value}
                    // style={style}
                    placeholder="content"
                    name={name}
                    className="controller"

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
                </RichTextarea>
            )}
            />
            <input type="submit" className="submitInput" />
        </form>
    </div>
  );
}
