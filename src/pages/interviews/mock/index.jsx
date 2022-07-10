import React, { useState } from "react";
import { Pagination } from "../../../common/components/Pagination";
import PageLayout from "../../../common/layout/PageLayout";

export default function MockInterview({ router }) {
  const { page } = router.query || "";

  const [pageLength, setPageLength] = useState(10);

  const Component = () => {
    return <div className="py-4 px-2 flex flex-col items-center">{page}</div>;
  };

  return (
    <PageLayout title="Mock Interview">
      <Pagination
        page={parseInt(page)}
        Component={Component}
        length={pageLength}
      />
    </PageLayout>
  );
}
