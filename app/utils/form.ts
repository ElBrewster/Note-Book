import { createForm } from "remix-forms";
import {
  Form as FrameworkForm,
  useActionData,
  useSubmit,
  useNavigation,
} from "@remix-run/react";
import { z } from "zod";
import { makeDomainFunction } from "domain-functions";

const RemixForm = createForm({
  component: FrameworkForm,
  useNavigation,
  useSubmit,
  useActionData,
});

const schema = z.object({
  title: z.string(),
  category: z.string(),
  body: z.string(),
});

const mutation = makeDomainFunction(schema)(async (values) => {
  console.log(values);
});

export { RemixForm, schema, mutation };
