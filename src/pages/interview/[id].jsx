import React from "react";
import { useRouter } from "next/router";
import PageLayout from "../../common/layout/PageLayout";

export default function View() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <PageLayout>
      <div>{id}</div>
    </PageLayout>
  );
}
