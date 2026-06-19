import { useTransition } from "react";
import { useRouter } from "next/navigation";

export function useRouteTransition() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const navigate = (href: string) => {
    startTransition(() => {
      router.push(href);
    });
  };

  return { navigate, isPending };
}
