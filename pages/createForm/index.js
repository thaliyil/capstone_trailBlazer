import ActivityForm from "@/components/ActivityForm";
import Link from "next/link";

export default function CreateForm({ onAddActivity }) {
  return (
    <>
      <Link href={"/"}>Go back</Link>
      <ActivityForm onSubmit={onAddActivity} />
    </>
  );
}
