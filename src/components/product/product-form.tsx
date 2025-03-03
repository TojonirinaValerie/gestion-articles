"use client";

// Extern
import { z } from "zod";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

// Ui
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { zodResolver } from "@hookform/resolvers/zod";
import { Product } from "@/types/product";
import { getAllCategory } from "@/api/product";
import {
  productFormSchema,
  ProductFormValueType,
} from "@/validation/product-validation";
import { capitalize } from "@/lib/utils";
import ProductUploader from "./product-uploader";
import Loading from "../shared/loading";

type ProductFormProps = {
  defaultValue?: Product;
  type: "edit" | "add";
  onSubmit: (value: z.infer<ProductFormValueType>) => void;
  isLoading?: boolean;
};

const ProductForm: React.FC<ProductFormProps> = ({
  defaultValue,
  type,
  onSubmit,
  isLoading,
}) => {
  // Var
  const { data } = useQuery({
    queryKey: ["allCategory"],
    queryFn: getAllCategory,
  });
  const form = useForm<z.infer<ProductFormValueType>>({
    resolver: zodResolver(productFormSchema),
    defaultValues: {
      title: defaultValue ? defaultValue.title : "",
      price: defaultValue ? defaultValue.price : 0,
      description: defaultValue ? defaultValue.description : "",
      image: defaultValue ? defaultValue.image : undefined,
      category: defaultValue ? defaultValue.category : "",
    },
  });
  console.log("default category =>", defaultValue?.category);
  // -------------------------------------------------------------------------

  // Methoode
  const handleSubmit = (value: z.infer<ProductFormValueType>) => {
    // Precaution pour eviter l'appelle de onSubmit si le form n'est pas valide
    console.log(form.formState.errors);
    if (form.formState.isValid) onSubmit(value);
  };
  // -------------------------------------------------------------------------

  const onfileChange = (file: File) => {
    form.setValue("image", file);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="flex flex-col w-full gap-4"
      >
        <h1 className="text-xl">
          {type == "add" ? "Add New Product" : "Edit Product"}
        </h1>
        <div className="flex flex-row w-full gap-4 max-md:flex-col">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Title" disabled={isLoading} {...field} />
                </FormControl>
                <FormMessage>
                  {form.formState.errors?.title?.message}
                </FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Category</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={defaultValue?.category}
                    disabled={isLoading}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select Category" />
                    </SelectTrigger>
                    <SelectContent>
                      {data?.data.map((category: string, index: number) => (
                        <SelectItem
                          value={category}
                          key={`${index}-${category}`}
                        >
                          {capitalize(category)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage>
                  {form.formState.errors?.category?.message}
                </FormMessage>
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="image"
          render={() => (
            <FormItem>
              <FormLabel>Product Image</FormLabel>
              <ProductUploader
                setFile={onfileChange}
                defaultValue={defaultValue?.image}
                disabled={isLoading}
              />
              <FormMessage>
                {form.formState.errors.image?.message?.toString()}
              </FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Description"
                  disabled={isLoading}
                  {...field}
                  rows={6}
                />
              </FormControl>
              <FormMessage>
                {form.formState.errors?.description?.message}
              </FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input
                  placeholder="price"
                  type="number"
                  disabled={isLoading}
                  {...field}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                />
              </FormControl>
              <FormMessage>{form.formState.errors?.price?.message}</FormMessage>
            </FormItem>
          )}
        />

        {isLoading ? (
          <Loading />
        ) : (
          <Button
            variant="default"
            color="grey"
            disabled={!form.formState.isValid || isLoading}
          >
            {type === "add" ? "Add Product" : "Update Product"}
          </Button>
        )}
      </form>
    </Form>
  );
};

export default ProductForm;
