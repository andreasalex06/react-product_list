import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export function SearchInput({
  value,
  onChange,
  onSubmit,
}) {
  function handleSubmit(event) {
    event.preventDefault();

    onSubmit();
  }

  return (
    <form onSubmit={handleSubmit}>
      <Field orientation="horizontal">
        <Input
          type="text"
          placeholder="Search..."
          value={value}
          onChange={(event) =>
            onChange(event.target.value)
          }
        />

        <Button type="submit">
          Search
        </Button>
      </Field>
    </form>
  );
}