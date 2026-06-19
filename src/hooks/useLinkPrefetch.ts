import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function useLinkPrefetch(href: string) {
  const router = useRouter();

  useEffect(() => {
    router.prefetch(href);
  }, [href, router]);
}

export function prefetchLink(router: ReturnType<typeof useRouter>, href: string) {
  router.prefetch(href);
}
