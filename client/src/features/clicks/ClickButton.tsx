import { Button } from "@/components/ui/button";
import { useCreateClickMutation, useGetClicksQuery } from "@/store/api";
import { useState, useEffect } from "react";

export const ClickButton = () => {
  const [createClick] = useCreateClickMutation();
  const { data: clicks, isLoading } = useGetClicksQuery();
  const [count, setCount] = useState(clicks?.length || 0);

  useEffect(() => {
    setCount(clicks?.length || 0);
  }, [clicks]);

  const handleClick = async () => {
    await createClick();
    setCount((count) => count + 1);
  };

  return (
    <Button onClick={handleClick}>
      Count is {count} {isLoading ? "loading..." : ""}
    </Button>
  );
};
